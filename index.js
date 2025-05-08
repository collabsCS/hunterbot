require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { Client, Collection, GatewayIntentBits, REST, Routes } = require('discord.js');

const token = process.env.DISCORD_TOKEN;
const clientId = process.env.CLIENT_ID;

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection();

// Usar un objeto en memoria para almacenar los idiomas
client.settings = {};
const settingsFilePath = path.join(__dirname, 'settings.json');

// Rutas y estructura por defecto de estadísticas
const statsFilePath = path.join(__dirname, 'stats.json');
const defaultStats = {
  languages: { es: 0, en: 0, pt: 0 },
  commands: { loadout: 0, challenge: 0, version: 0, donate: 0 }
};

// Crear stats.json si no existe
if (!fs.existsSync(statsFilePath)) {
  fs.writeFileSync(statsFilePath, JSON.stringify(defaultStats, null, 2));
}
let stats = JSON.parse(fs.readFileSync(statsFilePath));

// Si existe settings.json, lo cargamos al iniciar
if (fs.existsSync(settingsFilePath)) {
  const savedSettings = fs.readFileSync(settingsFilePath);
  client.settings = JSON.parse(savedSettings);
}

// Cargar comandos desde /commands
const commands = [];
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);
  client.commands.set(command.data.name, command);
  commands.push(command.data.toJSON());
}

// Registrar comandos
const rest = new REST({ version: '10' }).setToken(token);

(async () => {
  try {
    console.log('🔄 Registrando comandos...');
    await rest.put(Routes.applicationCommands(clientId), { body: commands });
    console.log('✅ Comandos registrados correctamente.');
  } catch (error) {
    console.error(error);
  }
})();

// Manejar interacciones
client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  const command = client.commands.get(interaction.commandName);
  if (!command) return;

  // Guardar idioma si el comando tiene esa opción
  const idiomaSeleccionado = interaction.options.getString('idioma');
  const serverId = interaction.guild?.id;

  if (idiomaSeleccionado && serverId) {
    client.settings[serverId] = idiomaSeleccionado;

    if (!stats.languages[idiomaSeleccionado]) {
      stats.languages[idiomaSeleccionado] = 0;
    }

    stats.languages[idiomaSeleccionado] += 1;
    fs.writeFileSync(settingsFilePath, JSON.stringify(client.settings, null, 2));
  }

  // Actualizar estadísticas de comandos
  if (stats.commands[interaction.commandName] !== undefined) {
    stats.commands[interaction.commandName] += 1;
  }

  fs.writeFileSync(statsFilePath, JSON.stringify(stats, null, 2));

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({
      content: 'Hubo un error al ejecutar el comando.',
      ephemeral: true
    });
  }
});

client.login(token);
