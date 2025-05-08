const { SlashCommandBuilder } = require('discord.js');
const { armas, herramientas, consumibles } = require('../data/equipamiento.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('info')
    .setDescription('Weapons, tools, consumables | Armas, herramientas, consumibles | Armas, ferramentas, consumíveis'),

  async execute(interaction) {
    const formatearLista = (lista) => lista.map(item => `• ${item.nombre}`).join('\n');

    const mensaje = `🧾 **Lista de objetos disponibles**:

🔫 **Armas Primarias**
${formatearLista(armas)}

🛠️ **Herramientas**
${formatearLista(herramientas)}

🧪 **Consumibles**
${formatearLista(consumibles)}`;

    await interaction.reply({ content: mensaje, ephemeral: true }); // ephemeral = solo lo ve el usuario
  }
};
