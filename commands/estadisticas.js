const { SlashCommandBuilder } = require('discord.js');
const { armas, herramientas, consumibles } = require('../data/equipamiento');
const { t } = require('../utils/translator');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('stats')
    .setDescription('Weapon stats | Estadísticas de armas | Estatísticas das armas')
    .addStringOption(option =>
      option
        .setName('objeto')
        .setDescription('El ID del objeto (arma, consumible, herramienta)')
        .setRequired(true)
    ),

  async execute(interaction) {
    const inputId = interaction.options.getString('objeto').toLowerCase();
    const lang = interaction.locale || 'es'; // Idioma del usuario o español por defecto

    const item =
      armas.find(i => i.id.toLowerCase() === inputId) ||
      herramientas.find(i => i.id.toLowerCase() === inputId) ||
      consumibles.find(i => i.id.toLowerCase() === inputId);

    if (!item) {
      return interaction.reply(t('mensaje.error_no_encontrado', lang) || '❌ No se encontró un objeto con ese ID.');
    }

    let mensaje = `**${t(`arma.${item.id}`, lang)}**\n`;

    if (item.precio !== undefined)
      mensaje += `💰 **${t('stats.precio', lang)}**: ${item.precio} HuntDollars <:dollarhunt:1368733291846434887>\n`;

    if (item.danio !== undefined)
      mensaje += `🔫 **${t('stats.danio', lang)}**: ${item.danio}\n`;

    if (item.velocidadBala !== undefined)
      mensaje += `⚡ **${t('stats.velocidad_bala', lang)}**: ${item.velocidadBala} m/s\n`;

    if (item.distanciaMaxima !== undefined)
      mensaje += `🌍 **${t('stats.distancia_maxima', lang)}**: ${item.distanciaMaxima} m\n`;

    if (item.tiempoRecarga !== undefined)
      mensaje += `⏳ **${t('stats.tiempo_recarga', lang)}**: ${item.tiempoRecarga}s\n`;

    if (item.slots !== undefined)
      mensaje += `🎒 **${t('stats.slots', lang)}**: ${item.slots}\n`;

    await interaction.reply(mensaje);
  }
};
