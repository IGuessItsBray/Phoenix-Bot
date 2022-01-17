const Discord = require('discord.js');
const { Client, Intents, MessageEmbed } = require('discord.js');
const config = require("./config.json");

module.exports = async (client) => {
    client.on('messageCreate', async interaction => {
        if (interaction.guildId == config.GUILD && interaction.channelId == config.PASSWORD_CHANNEL) {
            console.log(interaction.member.displayName);
            console.log(interaction.content);
            if (interaction.content.trim() == config.PASSWORD) {
                console.log('correct!');
                await interaction.member.roles.add(config.PASSWORD_ROLE, 'said the correct password!');
                await interaction.member.roles.add(config.PASSWORD_ROLE2);
                await interaction.member.roles.remove(config.PASSWORD_ROLE_REMOVE);
                const now = Math.floor(new Date().getTime() / 1000.0);
                const embed = new MessageEmbed()
                    .setColor('#42d9f1')
                    .setDescription(`<t:${now}:R> <@${interaction.member.id}> has entered the password and been given the <@&${config.PASSWORD_ROLE}> role.`);
                await interaction.guild.channels.cache
                    .get(config.PASSWORD_LOGS)
                    .send({ embeds: [embed] });
                //await interaction.delete();
            }
        }
    });
};