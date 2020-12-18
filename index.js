const Discord = require("discord.js")
const client = new Discord.Client();
const prefix = "v!";
client.on("ready", message => {
    console.log("I am ready to Go");
    
});


client.on("message", message => {
    if(message.content === `${prefix}ping`) {
        message.channel.send(`🏓 Pong - ${client.ws.ping}`)
    }
})

client.login("Nzg5NDc2NTY5MTU5OTU4NTgw.X9ynWQ.UTtrxORy67x77AukFa4e5Fuj3v4")