const fs = require("fs")
const Discord = require("discord.js")
module.exports.run = (bot,msg,args)=>{
    if (!msg.member.hasPermission("ADMINISTRATOR")) return 
    fs.readFile('./store/channellog.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
        var obj = JSON.parse(data);
        var who = new Discord.RichEmbed()
        .setTitle("User "+obj.log[0].DisplayName+" "+ obj.log[0].State +" Channel: "+obj.log[0].Channel)
        .setFooter('SkellyBOT', 'https://cdn.discordapp.com/attachments/680885958312460393/680896907824201790/black.png');
        msg.channel.send(who)
    }});


}


module.exports.help={
    name:"vcheck"
}
