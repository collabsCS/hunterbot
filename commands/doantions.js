const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const { t } = require('../utils/translator'); // Usamos el mismo sistema de traducción que en el comando /reto

module.exports = {
  data: new SlashCommandBuilder()
    .setName('donate')
    .setDescription('Boton de donacion | donation button | Mostra um botão para apoiar o bot no Ko-fi'),

  async execute(interaction) {
    const serverId = interaction.guild?.id || interaction.user.id; // Usamos user.id si es en DMs
    const idioma = interaction.client.settings?.[serverId] || 'es'; // Obtenemos el idioma del servidor (o 'es' por defecto)

    const mensaje = t(idioma, 'donar.texto');
    const textoBotonDonacion = t(idioma, 'donar.boton');
    const textoBotonDiscord = t(idioma, 'donar.discord_button'); // Texto para el botón de Discord

    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setLabel(textoBotonDonacion)
        .setStyle(ButtonStyle.Link)
        .setURL('https://ko-fi.com/randomhunterbot'),
      new ButtonBuilder()
        .setLabel(textoBotonDiscord || 'Unirse al Discord') // Texto predeterminado si no hay traducción
        .setStyle(ButtonStyle.Link)
        .setURL('https://discord.gg/BUk4vjArH9') // URL del servidor de Discord
    );

    await interaction.reply({
      content: mensaje,
      components: [row],
      ephemeral: true // Opcional: solo lo ve el usuario que lo ejecuta
    });
  }
};
