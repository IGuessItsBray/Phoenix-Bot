const Discord = require('discord.js');

const { Client, Intents, MessageEmbed } = require('discord.js');
const bumpPing = require('./bump ping');
//DO A BARREL ROLL - LEO (Shell System)
const client = new Client({ partials: ['CHANNEL'], intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILDS, Intents.FLAGS.DIRECT_MESSAGES] });

const config = require("./config.json");

//Audit Logs
const colors = require("colors")
client.config = require("./config.json");

client.login(client.config.token);

client.on("ready", ()=>{
  console.log(`${client.user.tag} is now Online! Prefix: ${client.config.prefix}`.bgGreen);
  //client.user.setActivity("Hello world", {type: "STREAMING", url: "https://twitch.tv/#"})
})

require("./logger")(client);
//const logger = require("./logger");
//logger(client)
client.login(config.BOT_TOKEN);

client.once('ready', c => {
    console.log(`Ready! Logged in as ${c.user.tag}`);

    const password = require("./password");
    password(client);
    const bumpPing = require("./bump ping");
    bumpPing(client);
    const spoiler = require("./spoiler");
    spoiler(client);
    const numberCounting = require("./number counting");
    numberCounting(client);
    const abcCounting = require("./abc Counting");
    abcCounting(client);
    const SWRB = require("./SWRB");
    SWRB(client);
    const roles = require("./roles");
    roles(client);
    const joinleave = require("./joinleave");
    joinleave(client);

});




