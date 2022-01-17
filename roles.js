const Discord = require('discord.js');
const { Client, Intents, MessageEmbed } = require('discord.js');
const config = require("./config.json");

module.exports = (client) => {
    const { ReactionRole } = require("reaction-role");
    const system = new ReactionRole(config.BOT_TOKEN);
    
    // create simple option
    const option1 = system.createOption("Emoji", ["roleid", "roleid"]);
    const option2 = system.createOption("Emoji", ["roleid", "roleid"]);
    //Repeat the above for as many roles as you need
    // create message
    system.createMessage(
        "ChannelID",
        "MessageID",
        1, // reaction limit
        option1,
        option2,
    //Add options as needed, seperate for seperate messages
    );

    

    
    system.init();
};