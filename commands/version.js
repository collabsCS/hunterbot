const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { t } = require('../utils/translator');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('version')
    .setDescription('Bot version | Versión del bot | Versão do bot'),

  async execute(interaction) {
    const serverId = interaction.guild?.id || interaction.user.id; // Usa user.id si es en DMs
    const idioma = interaction.client.settings?.[serverId] || 'es';

    const version = t(idioma, 'version', true);

    const embed = new EmbedBuilder()
      .setTitle(version.title)
      .setColor(0x4b5320)
      .addFields(
        { name: version.bot_version, value: '1.5', inline: true },
        { name: version.game_version, value: ' 2.3.0.1.', inline: true },
        { name: version.latest_changes, value: `
          • ${version.changelog.added_version_command}
          • ${version.changelog.equip_limit_support}
          • ${version.changelog.bugfixes_cleanup}
          • ${version.changelog.added_help_command}
        ` }
      )
      .addFields(
        { name: '👥 Créditos', value: `
          **DEV**: [SoyCBITA](https://steamcommunity.com/id/soycbita/)
          **Collaborators**: [Sr_Chupapanza](https://www.twitch.tv/sr_chupapanza), [Darckuru](https://www.twitch.tv/darckuru_)
          **Portugues**: Pascuala
        ` }
      )
      .addFields(
        { name: '🔗 Únete a nuestro Discord', value: '[RandomHunter Discord](https://discord.gg/BUk4vjArH9)' }
      )
      .setFooter({ text: 'RandomHunter – Mantente actualizado' });

    await interaction.reply({ embeds: [embed], flags: 64 }); // ✅ Fix aplicado
  }
};
