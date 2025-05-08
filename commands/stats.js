// commands/stats.js
const { SlashCommandBuilder } = require('discord.js');
const { statsFilePath } = require('../stats'); // Ruta del archivo de estadísticas

module.exports = {
  data: new SlashCommandBuilder()
    .setName('botstats')
    .setDescription('Ver las estadísticas del bot.'),
  
  async execute(interaction) {
    // Aquí pones tu ID de usuario
    const myUserId = '357318638165950466'; 

    // Verificar si la persona que ejecuta el comando es tú
    if (interaction.user.id !== myUserId) {
      return interaction.reply({
        content: 'No tienes permiso para usar este comando.',
        ephemeral: true
      });
    }

    // Cargar y mostrar estadísticas
    const stats = require(statsFilePath);
    await interaction.reply({
      content: `Estadísticas:\n\nComandos más usados: ${stats.commandsUsed}\nIdiomas más usados: ${JSON.stringify(stats.languagesUsed)}`
    });
  }
};
