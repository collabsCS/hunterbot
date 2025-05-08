const { SlashCommandBuilder, PermissionsBitField } = require('discord.js');
const fs = require('fs');
const path = require('path');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('lenguage')
    .setDescription('English | Español | Portugues')
    .addStringOption(option =>
      option
        .setName('idioma')
        .setDescription('Selecciona un idioma (es, en, pt)')
        .setRequired(true)
        .addChoices(
          { name: 'Español', value: 'es' },
          { name: 'English', value: 'en' },
          { name: 'Portugués', value: 'pt' },
        )
    ),

  async execute(interaction) {
    // Verificar si el usuario tiene el permiso de administrador
    if (!interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) {
      return interaction.reply({
        content: '¡Solo los administradores pueden usar este comando!',
        ephemeral: true
      });
    }

    const idiomaSeleccionado = interaction.options.getString('idioma');
    
    // Cargar el archivo de traducción correspondiente
    const translationFilePath = path.join(__dirname, `../locales/${idiomaSeleccionado}.json`);
    
    if (!fs.existsSync(translationFilePath)) {
      return interaction.reply({
        content: 'No se encontró el archivo de traducción para el idioma seleccionado.',
        ephemeral: true
      });
    }
    
    const translations = JSON.parse(fs.readFileSync(translationFilePath, 'utf8'));
    
    // Responder con el mensaje traducido
    await interaction.reply({
      content: translations.idioma.configurado,
      ephemeral: true
    });
  }
};
