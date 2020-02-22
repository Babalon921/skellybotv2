const Discord = require("discord.js");
//Help Command
module.exports.run = (bot,msg,args)=>{
    
    var adminhelp = new Discord.RichEmbed()
    .setAuthor("~~~~~~~~~~~~~HELP~~~~~~~~~~~~~")
    .setThumbnail("https://cdn.discordapp.com/attachments/680885958312460393/680896907824201790/black.png")
    .setDescription("^ = permisson's needed!")
    .addField("Prefix:","$")
    .addField("Say:","Bot Says What You Want")
    .addField("Crust:","Search User's Rust Game Data.")
    .addField("Csteam:","Search User's Steam Data.")
    .addField("Crustcheck:","Display Server info!")
    .addField("Chacker:","Recent Hacker Banned!")
    .addField("Wipe:","Remove's All Players From The Role '-Playing-' Ready For Wipe!")
    .addField("Setup:","Prints Rules")
    .addField("Appsetup:","Prints Application Info")
    .addField("Register:","N/A")

    .setColor("#ff0000")
    msg.channel.send(adminhelp).then(newMessage => newMessage.delete(120000));
   
}

module.exports.help ={
    name:"help"
}