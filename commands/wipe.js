var Discord = require("discord.js")


module.exports.run = (bot,msg,args)=>{
    if (!msg.member.hasPermission("ADMINISTRATOR")) return 
    msg.delete()
    var wipemsg = new Discord.RichEmbed()
    .setTitle("💥Wipe Day💥(_NEWWIPE_)")
    .addField("GET YOU AK SPRAY ON!: ","🔥🔥🔥🔥🔥")
    .addField("GET MAFIA LEADERSHIP FOR INFO ","🔥🔥🔥🔥🔥")
    .addField("GOTO #announcements ","🔥🔥🔥🔥🔥")
    .setTimestamp()
    .setFooter('SkellyBOT', 'https://cdn.discordapp.com/attachments/680885958312460393/680896907824201790/black.png');
    
    const role1 = msg.guild.roles.get("680893971328794772")
    try {
        msg.guild.members.filter(member => member.bannable).forEach(member => {member.removeRole(role1)});
        msg.delete(1000);
    } catch(e) {
        console.log(e.stack);
    }
    msg.channel.send(wipemsg).then(msg.channel.send("@everyone"))
    

} 
module.exports.help ={
    name:"wipe"
}
