const Discord = require('discord.js');
const { Client, Intents, MessageEmbed } = require('discord.js');
const config = require('./config.json');

module.exports = async (client) => {
    client.on('messageCreate', async interaction => {
        if (
            interaction.channel.type === 'DM' &&
            interaction.content.trim().startsWith('!c ')
        ) {
            const message = interaction.content.substring(2).trim();
            const member = await client.guilds.cache.get(config.GUILD).members.fetch(interaction.author.id);
            const embed = new MessageEmbed()
                .setAuthor({ name: member.displayName, iconURL: member.displayAvatarURL() })
                .setColor(member.displayHexColor)
                .setDescription(`||${message}||`);
            await client.channels.cache
                .get(config.CONFESSION_RECEIVE)
                .send({ embeds: [embed] });
        } else if (
            interaction.guildId == config.GUILD &&
            interaction.content.trim().startsWith('!s ')
        ) {
            const message = interaction.content.substring(2).trim();
            const embed = new MessageEmbed()
                .setAuthor({ name: interaction.member.displayName, iconURL: interaction.member.displayAvatarURL() })
                .setColor(interaction.member.displayHexColor)
                .setDescription(`||${message}||`);
            await interaction.channel.send({ embeds: [embed] });
            await interaction.delete();
        } else if (
            interaction.channel.type === 'DM' &&
            interaction.content.trim().startsWith('!ac ')
        ) {
            const message = interaction.content.substring(3).trim();
            const member = await client.guilds.cache.get(config.GUILD).members.fetch(interaction.author.id);
            const embed = new MessageEmbed()
                .setColor(member.displayHexColor)
                .setDescription(`||${message}||`);
            await client.channels.cache
                .get(config.CONFESSION_RECEIVE)
                .send({ embeds: [embed] });
        } else if (
            interaction.guildId == config.GUILD &&
            interaction.content.trim().startsWith('!s','!s ' )
        ) {
            const message = interaction.content.substring(2).trim();
            const files = [];
            interaction.attachments.forEach(a => {
                files.push({
                    attachment: a.url,
                    name: `SPOILER_${a.name}`
                })
            });
            const embed = new MessageEmbed()
                .setAuthor({ name: interaction.member.displayName, iconURL: interaction.member.displayAvatarURL() })
                .setColor(interaction.member.displayHexColor)
                .setDescription((message===''||message===undefined)? '' : `||${message}||`);
            await interaction.channel.send({ embeds: [embed], files });
            await interaction.delete();
        } else if (
            interaction.channel.type === 'DM' &&
            interaction.content.trim().startsWith('!nsfwc ')
        ) {
            const message = interaction.content.substring(3).trim();
            const member = await client.guilds.cache.get(config.GUILD).members.fetch(interaction.author.id);
            const embed = new MessageEmbed()
                .setColor(member.displayHexColor)
                .setDescription(`||${message}||`);
            await client.channels.cache
                .get(config.CONFESSION_RECEIVE_NSFW)
                .send({ embeds: [embed] });
        };
    });
};