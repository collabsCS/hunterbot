const { SlashCommandBuilder } = require('discord.js');
const { t } = require('../utils/translator');
const { armas, consumibles, herramientas } = require('../data/equipamiento');
const { obtenerRandom } = require('../utils/random');

// Función para obtener un número determinado de consumibles, permitiendo duplicados
function obtenerConsumibles(consumeList, cantidad) {
  let consumiblesSeleccionados = [];
  for (let i = 0; i < cantidad; i++) {
    const consumibleAleatorio = obtenerRandom(consumeList)[0]; // Escoge uno aleatorio
    consumiblesSeleccionados.push(consumibleAleatorio);
  }
  return consumiblesSeleccionados;
}

function validarCombinacion(armasSeleccionadas) {
  const [a, b] = armasSeleccionadas;
  const slotsA = a.slots;
  const slotsB = b.slots;

  // No se permite 2 armas de 3 slots
  if (slotsA === 3 && slotsB === 3) return false;

  // No se permite una de 3 y otra de 2
  if ((slotsA === 3 && slotsB === 2) || (slotsA === 2 && slotsB === 3)) return false;

  // Todo lo demás está permitido (ej: 1+3, 2+2, 1+2, 1+1)
  return true;
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName('lodaut')
    .setDescription('Random loadout | Loadout aleatorio | Loadout aleatório')
    .addIntegerOption(option =>
      option
        .setName('max')
        .setDescription('Valor máximo del loadout en 💵 (opcional)')
        .setRequired(false)
    )
    .addBooleanOption(option =>
      option
        .setName('medkit')
        .setDescription('Forzar el Medkit en el loadout')
        .setRequired(false)
    ),
  
  async execute(interaction) {
    const serverId = interaction.guild?.id || interaction.user.id;
    const idioma = interaction.client.settings?.[serverId] || 'es';

    // Traducción de etiquetas de UI
    const primariaLabel = t(idioma, 'ui.primaria');
    const secundariaLabel = t(idioma, 'ui.secundaria');
    const consumiblesLabel = t(idioma, 'ui.consumibles');
    const herramientasLabel = t(idioma, 'ui.herramientas');
    const totalEstimadoLabel = t(idioma, 'ui.total_estimado');
    const titulo = t(idioma, 'ui.equipamiento_title');

    const maximo = interaction.options.getInteger('max') || Infinity;
    const forzarMedkit = interaction.options.getBoolean('medkit'); // Se obtiene si el Medkit está seleccionado

    // Elegir armas aleatorias
    let primaria = obtenerRandom(armas)[0];
    let secundaria = obtenerRandom(armas)[0];
    let cons = obtenerConsumibles(consumibles, 4); // Usamos la nueva función para consumibles
    let herr = obtenerRandom(herramientas, 4);

    // Forzar el Medkit si el usuario lo seleccionó
    if (forzarMedkit) {
      const medkit = herramientas.find(h => h.id === 'first_aid_kit');
      if (medkit && !herr.some(h => h.id === 'first_aid_kit')) {
        herr.push(medkit);
      }
    }

    // Validar combinación de armas
    while (!validarCombinacion([primaria, secundaria])) {
      primaria = obtenerRandom(armas)[0];
      secundaria = obtenerRandom(armas)[0];
    }

    let total =
      primaria.precio +
      secundaria.precio +
      cons.reduce((sum, c) => sum + c.precio, 0) +
      herr.reduce((sum, h) => sum + h.precio, 0);

    // Ajuste de loadout si el total excede el límite
    while (total > maximo) {
      primaria = obtenerRandom(armas)[0];
      secundaria = obtenerRandom(armas)[0];
      cons = obtenerConsumibles(consumibles, 4); // Nuevamente, obtenemos consumibles
      herr = obtenerRandom(herramientas, 4);

      total =
        primaria.precio +
        secundaria.precio +
        cons.reduce((sum, c) => sum + c.precio, 0) +
        herr.reduce((sum, h) => sum + h.precio, 0);
    }

    const { EmbedBuilder } = require('discord.js');

    // Detectar si el usuario realmente ingresó un máximo
    const maximoAplicado = interaction.options.getInteger('max') !== null;
    
    let mensajeAjuste = '';
    if (maximoAplicado) {
      mensajeAjuste = t(idioma, 'ui.ajuste_maximo').replace('{{maximo}}', maximo);
    }
    
    let embed = new EmbedBuilder()
      .setColor('#B22222')
      .setTitle(`🎯 **${titulo}**`)
      .addFields(
        {
          name: `🔫 **${primariaLabel}:**`,
          value: `${t(idioma, `armas.${primaria.id}`)} (${primaria.precio} HuntDollars <:dollarhunt:1368733291846434887>)`,
          inline: false
        },
        {
          name: `🔫 **${secundariaLabel}:**`,
          value: `${t(idioma, `armas.${secundaria.id}`)} (${secundaria.precio} HuntDollars <:dollarhunt:1368733291846434887>)`,
          inline: false
        },
        {
          name: `🛠️ **${herramientasLabel}:**`,
          value: herr.length > 0
            ? herr.map(h => `• ${t(idioma, `herramientas.${h.id}`)} (${h.precio} HuntDollars <:dollarhunt:1368733291846434887>)`).join('\n')
            : '• —',
          inline: false
        },
        {
          name: `🧨 **${consumiblesLabel}:**`,
          value: cons.length > 0
            ? cons.map(c => `• ${t(idioma, `consumibles.${c.id}`)} (${c.precio} HuntDollars <:dollarhunt:1368733291846434887>)`).join('\n')
            : '• —',
          inline: false
        },
        {
          name: `<:dollarhunt:1368733291846434887> **${totalEstimadoLabel}:**`,
          value: `${total} HuntDollars <:dollarhunt:1368733291846434887>`,
          inline: false
        }
      )
      .addFields(
        { name: '🔗 Any bug?', value: '| [RandomHunter Discord](https://discord.gg/BUk4vjArH9) | ' }
      )
      .addFields(
        { name: '☕ Support the project', value: '| [Ko-fi <3](https://ko-fi.com/randomhunterbot) |' }
      )
      .setFooter({ text: t(idioma, 'mensajes.buena_suerte') });
    
    // Enviar respuesta con mensaje opcional + embed
    await interaction.reply({
      content: mensajeAjuste,
      embeds: [embed],
      ephemeral: false
    });
  }
};
