const Discord = require("discord.js");
// Say command
module.exports.run = (bot,msg,args)=>{
    
    if (!msg.member.hasPermission("ADMINISTRATOR")) return 
    var nocando = new Discord.RichEmbed()
    .setTitle("Insufficient Permissions")
    .setColor("#ff0000")
    .setTimestamp()
    .setFooter('SkellyBOT', 'https://cdn.discordapp.com/attachments/680885958312460393/680896907824201790/black.png');
    if(!msg.member.hasPermission("ADMINISTRATOR")) return msg.channel.send(nocando);
    var what_to_say = args.join(" ");
    msg.channel.send(what_to_say)
   
}
module.exports.help={
    name:"say"
}
