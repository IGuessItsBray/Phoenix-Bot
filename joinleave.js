const Discord = require('discord.js');
const { Client, Intents, MessageEmbed } = require('discord.js');
const config = require("./config.json");

module.exports = (client) => {
    client.on('guildMemberAdd', guildMember =>{
        
        guildMember.guild.channels.cache.get('joinchannelid').send(`Hey <@${guildMember.user.id}>, welcome`)
    });
    client.on('guildMemberRemove', guildMember =>{
        
        guildMember.guild.channels.cache.get('leavechannelid').send(`<@${guildMember.user.id}> has left the server`)
    });
};