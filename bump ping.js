const Discord = require('discord.js');
const { Client, Intents, MessageEmbed } = require('discord.js');
const config = require('./config.json');

module.exports = async (client) => {
    let timer;

    client.on('messageCreate', async interaction => {
        if (interaction.guildId == config.GUILD && interaction.content.trim().toLowerCase() == '!d bump') {
            await interaction.reply('Thanks for bumping, we\'ll remind you in two hours!');
            if (timer != null) return;
            timer = setTimeout(async function () {
                await interaction.reply(`Remember to bump! <@&${config.BUMP_PING_ROLE}>`);
                timer = null;
            }, 1000 * 15 * 120);
        }
    });
};