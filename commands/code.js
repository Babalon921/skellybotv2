
const Discord = require('discord.js');

module.exports.run = (bot,msg,args)=>{
    if (!msg.member.hasPermission("ADMINISTRATOR")) return 
    if(!args[0]){return;}
    var mention = msg.mentions.users.first().id
    bot.users.get(mention).send("Code: 5196");
    var fetch = new Discord.RichEmbed()
    .setTitle("Sent Code To "+args[0])
    .setColor("#ff0000")
    .setTimestamp()
    .setFooter('SkellyBOT', 'https://cdn.discordapp.com/attachments/680885958312460393/680896907824201790/black.png');

    msg.channel.send(fetch)
    
}

module.exports.help ={
    name:"code"
}