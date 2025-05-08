const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { t } = require('../utils/translator');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('challenge')
    .setDescription('Start a new challenge | Inicia un nuevo reto | Inicie um novo desafio'),

  async execute(interaction) {
    const serverId = interaction.guild?.id || interaction.user.id;
    const idioma = interaction.client.settings?.[serverId] || 'es';

    const retos = t(idioma, 'retos', true);
    const claves = Object.keys(retos);
    const claveAleatoria = claves[Math.floor(Math.random() * claves.length)];
    const retoTraducido = retos[claveAleatoria];

    const embed = new EmbedBuilder()
      .setColor('#222222')
      .setTitle('**☠️ Desafío del Cazador ☠️**')
      .setDescription(`
        🩸 **${retoTraducido}**

        ${t(idioma, 'ui.buena_suerte')}
        
        🔗 [Bugs?](https://discord.gg/BUk4vjArH9) | ☕ [Support proyect](https://ko-fi.com/randomhunterbot)          
      `)

    await interaction.reply({
      embeds: [embed],
      ephemeral: false
    });
  }
};
