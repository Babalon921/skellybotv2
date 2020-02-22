const mongoose = require('mongoose');
const DataRQ = require("../models/data.js")
const Discord = require('discord.js');
const SteamAPI = require("steamapi")
const steam = new SteamAPI('4C627F0CCC1E62F8BCC8B682CFCE7AA3');
mongoose.connect('mongodb+srv://app:app921@discord-dkpzz.mongodb.net/ClanUsers?retryWrites=true&w=majority');
var Saymsg = new Discord.RichEmbed()
.setTitle("Please Specify A Steam CustomeUserName or ID (id/{thisbit})")
.setDescription("If You Need Help DM @ModMail#5460 or Contact Staff")
.setColor("#ff0000")
.setTimestamp()
.setFooter('SkellyBOT', 'https://cdn.discordapp.com/attachments/680885958312460393/680896907824201790/black.png');
var takenmsg = new Discord.RichEmbed()
.setTitle("User All Ready Exists!")
.setDescription("If You Need Help DM @ModMail#5460 or Contact Staff")
.setColor("#00ff00")
.setTimestamp()
.setFooter('SkellyBOT', 'https://cdn.discordapp.com/attachments/680885958312460393/680896907824201790/black.png');
var donemsg = new Discord.RichEmbed()
.setTitle("User Valid!")
.setDescription("If You Need Help DM @ModMail#5460 or Contact Staff")
.setColor("#00ff00")
.setTimestamp()
.setFooter('SkellyBOT', 'https://cdn.discordapp.com/attachments/680885958312460393/680896907824201790/black.png');


//
module.exports.run = async(bot,msg,args)=>{
   
    await msg.delete();
    const filter = m => m.author.id === msg.author.id;
    msg.channel.send(Saymsg)
    msg.channel.awaitMessages(filter,{max: 1, time: 10000}).then(collected =>{
    let username = collected.first().content
    
    var Fail = new Discord.RichEmbed()
    .setTitle("No Steam User Found: "+username)
    .setDescription("If You Need Help DM @ModMail#5460 or Contact Staff")
    .setColor("#ff0000")
    .setTimestamp()
    .setFooter('SkellyBOT', 'https://cdn.discordapp.com/attachments/680885958312460393/680896907824201790/black.png');

    
    steam.resolve("https://steamcommunity.com/id/"+username).then(id =>{
    steam.getUserSummary(id).then(summary => {
    const Data = new DataRQ({
        _id: mongoose.Types.ObjectId(),
        username: msg.author.username,
        userID: msg.author.id,
        steamID: summary.nickname,
        url: summary.url,
        time: msg.createdAt
    });
    const error = false
    Data.save(function(err,user) {
    if (err) {
    console.log(err)
    msg.channel.send(takenmsg)    
    }
    else{
    msg.channel.send(donemsg)
    }
   
    

}); 
});
}).catch(E => msg.channel.send(Fail));
});






}
 
module.exports.help={
    name:"reg"
}
