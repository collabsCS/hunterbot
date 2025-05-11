const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { t } = require('../utils/translator');
const { armas, consumibles, herramientas } = require('../data/equipamiento');
const { obtenerRandom } = require('../utils/random');
const fs = require('fs');
const path = require('path');

// Función para obtener un número determinado de consumibles, permitiendo duplicados
function obtenerConsumibles(consumeList, cantidad) {
  let consumiblesSeleccionados = [];
  for (let i = 0; i < cantidad; i++) {
    const consumibleAleatorio = obtenerRandom(consumeList)[0];
    consumiblesSeleccionados.push(consumibleAleatorio);
  }
  return consumiblesSeleccionados;
}

function validarCombinacion(armasSeleccionadas) {
  const [a, b] = armasSeleccionadas;
  const slotsA = a.slots;
  const slotsB = b.slots;

  if (slotsA === 3 && slotsB === 3) return false;
  if ((slotsA === 3 && slotsB === 2) || (slotsA === 2 && slotsB === 3)) return false;
  return true;
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName('loadout')
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

    const primariaLabel = t(idioma, 'ui.primaria');
    const secundariaLabel = t(idioma, 'ui.secundaria');
    const consumiblesLabel = t(idioma, 'ui.consumibles');
    const herramientasLabel = t(idioma, 'ui.herramientas');
    const totalEstimadoLabel = t(idioma, 'ui.total_estimado');
    const titulo = t(idioma, 'ui.equipamiento_title');

    const maximo = interaction.options.getInteger('max') || Infinity;
    const forzarMedkit = interaction.options.getBoolean('medkit');

    let primaria = obtenerRandom(armas)[0];
    let secundaria = obtenerRandom(armas)[0];
    let cons = obtenerConsumibles(consumibles, 4);
    let herr = obtenerRandom(herramientas, 4);

    if (forzarMedkit) {
      const medkit = herramientas.find(h => h.id === 'first_aid_kit');
      if (medkit && !herr.some(h => h.id === 'first_aid_kit')) {
        herr.push(medkit);
      }
    }

    while (!validarCombinacion([primaria, secundaria])) {
      primaria = obtenerRandom(armas)[0];
      secundaria = obtenerRandom(armas)[0];
    }

    let total =
      primaria.precio +
      secundaria.precio +
      cons.reduce((sum, c) => sum + c.precio, 0) +
      herr.reduce((sum, h) => sum + h.precio, 0);

    while (total > maximo) {
      primaria = obtenerRandom(armas)[0];
      secundaria = obtenerRandom(armas)[0];
      cons = obtenerConsumibles(consumibles, 4);
      herr = obtenerRandom(herramientas, 4);

      total =
        primaria.precio +
        secundaria.precio +
        cons.reduce((sum, c) => sum + c.precio, 0) +
        herr.reduce((sum, h) => sum + h.precio, 0);
    }

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
        { name: '🔗 Any bug?', value: '| [RandomHunter Discord](https://discord.gg/BUk4vjArH9) | ' },
        { name: '☕ Support the project', value: '| [Ko-fi <3](https://ko-fi.com/randomhunterbot) |' }
      )
      .setFooter({ text: t(idioma, 'mensajes.buena_suerte') });

    // 📊 Actualizar estadísticas
    const statsPath = path.join(__dirname, '../stats.json');
    const stats = JSON.parse(fs.readFileSync(statsPath));
    stats.loadout = (stats.loadout || 0) + 1;
    fs.writeFileSync(statsPath, JSON.stringify(stats, null, 2));

    await interaction.reply({
      content: mensajeAjuste,
      embeds: [embed],
      ephemeral: false
    });
  }
};
