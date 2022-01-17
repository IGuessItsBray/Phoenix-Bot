const Discord = require('discord.js');
const { Client, Intents, MessageEmbed } = require('discord.js');
const config = require('./config.json');
//DO THE ROAR -Pho
module.exports = async (client) => {
    client.on('messageCreate', async interaction => {
        if (interaction.content.trim().toLowerCase().includes(config.SAFEWORD)) {
            await interaction.reply(`<@&${config.MOD_PING_ROLE}>`);
        }
    });
};