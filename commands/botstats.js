const fs = require('fs');
const path = require('path');
const { SlashCommandBuilder } = require('discord.js');
const { statsFilePath } = require('../stats');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('botstats')
    .setDescription('View bot statistics.'),
    
  async execute(interaction) {
    try {
      const data = fs.readFileSync(statsFilePath, 'utf8');
      const stats = JSON.parse(data);

      const commands = Object.entries(stats.commands)
        .map(([cmd, count]) => `• /${cmd}: ${count}`)
        .join('\n');

      const languages = Object.entries(stats.languages)
        .map(([lang, count]) => `• ${lang}: ${count}`)
        .join('\n');

      await interaction.reply({
        content: `📊 **Bot Statistics:**\n\n🧩 **Most used commands:**\n${commands}\n\n🌍 **Most used languages:**\n${languages}`
      });
    } catch (error) {
      console.error('❌ Error al cargar las estadísticas:', error);
      await interaction.reply({
        content: '❌ Ocurrió un error al obtener las estadísticas.',
        ephemeral: true
      });
    }
  }
};
