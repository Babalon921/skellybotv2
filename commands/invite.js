const Discord = require("discord.js");
// Say command
module.exports.run = (bot,msg,args)=>{
    var invite = new Discord.RichEmbed()
    .setTitle("https://discord.gg/y3Ax3eD")
    .setColor("#ff0000")
    .setTimestamp()
    .setFooter('SkellyBOT', 'https://cdn.discordapp.com/attachments/680885958312460393/680896907824201790/black.png');
    msg.channel.send(invite)
}
module.exports.help={
    name:"invite"
}
