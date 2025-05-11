const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { t } = require('../utils/translator');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Available commands | Comandos disponibles | Comandos disponíveis'),

  async execute(interaction) {
    const serverId = interaction.guild?.id || interaction.user.id; // Usa user.id si es en DMs
    const idioma = interaction.client.settings?.[serverId] || 'es';

    // Traducir los mensajes de ayuda
    const helpTitle = t(idioma, 'help_title');
    const helpDescription = t(idioma, 'help_description');
    const equipamientoDesc = t(idioma, 'help_commands.equipamiento');
    const listasDesc = t(idioma, 'help_commands.listas');
    const estadisticasDesc = t(idioma, 'help_commands.estadisticas');
    const retosDesc = t(idioma, 'help_commands.retos');
    const versionDesc = t(idioma, 'help_commands.version');
    const helpDesc = t(idioma, 'help_commands.help');
    const footerText = t(idioma, 'footer');

    // Crear el embed con la traducción
    const embed = new EmbedBuilder()
      .setTitle(helpTitle)
      .setDescription(helpDescription)
      .setColor(0x4b5320)
      .addFields(
        { name: '/loadout', value: equipamientoDesc },
        { name: '/stats (not enabled)', value: estadisticasDesc },
        { name: '/challenge', value: retosDesc },
        { name: '/version', value: versionDesc },
        { name: '/help', value: helpDesc }
      )
      .setFooter({ text: footerText });

    await interaction.reply({ embeds: [embed] });
  }
};
