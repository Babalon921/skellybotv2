const mongoose = require('mongoose');
const DataRQ = require("../models/data.js")
const Discord = require('discord.js');
const SteamAPI = require("steamapi")
const steam = new SteamAPI('4C627F0CCC1E62F8BCC8B682CFCE7AA3');
mongoose.connect('mongodb+srv://app:app921@discord-dkpzz.mongodb.net/ClanUsers?retryWrites=true&w=majority');
module.exports.run = async(bot,msg,args)=>{
    if (!msg.member.hasPermission("ADMINISTRATOR")) return 
    var mention = msg.mentions.users.first().id;
    DataRQ.findOne({ 'userID': mention }, function (err, data) {
        var Fail = new Discord.RichEmbed()
        .setTitle("No Entry Found!")
        .setDescription("If You Need Help DM @ModMail#5460 or Contact Staff")
        .setColor("#ff0000")
        .setTimestamp()
        .setFooter('SkellyBOT', 'https://cdn.discordapp.com/attachments/680885958312460393/680896907824201790/black.png');

        var Datamsg = new Discord.RichEmbed()
        .setTitle("User Data: ")
        .setDescription("UserID: "+data.userID+"\n"+"SteamID: "+data.steamID+"\n"+"SteamURL: "+data.url)
        .setColor("#ff0000")
        .setTimestamp()
        .setFooter('SkellyBOT', 'https://cdn.discordapp.com/attachments/680885958312460393/680896907824201790/black.png');
        msg.channel.send(Datamsg)

      }).catch(e => msg.channel.send(Fail));

}
 
module.exports.help={
    name:"check"
}
