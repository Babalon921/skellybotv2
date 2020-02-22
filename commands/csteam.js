const Discord = require("discord.js")
const SteamAPI = require("steamapi")
const steam = new SteamAPI('4C627F0CCC1E62F8BCC8B682CFCE7AA3');



module.exports.run = (bot,msg,args)=>{
    if (!msg.member.hasPermission("ADMINISTRATOR")) return 
    var steamraw = args[0]
    var fetch = new Discord.RichEmbed()
    .setTitle("Fetching Data (Please Wait 15s)")
    .setColor("#ff0000")
    .setTimestamp()
    .setFooter('SkellyBOT', 'https://cdn.discordapp.com/attachments/680885958312460393/680896907824201790/black.png');
        
    if(isNaN(steamraw)){
        try{
        msg.channel.send(fetch)
        //Steamgetresloveid
        steam.resolve("https://steamcommunity.com/id/"+steamraw).then(id =>{
        //steamgetsummary
        steam.getUserSummary(id).then(summary => {
            console.log(summary)
        //steamgetvac
        steam.getUserBans(id).then(PlayerBans =>{
        console.log(PlayerBans)
        steam.getUserLevel(id).then(PlayerLvl =>{
        console.log(PlayerLvl)
        var plygame = summary.gameExtraInfo;
        if(summary.gameExtraInfo == undefined){
            var plygame = "None"
        }
        var STEAMMSG = new Discord.RichEmbed()
            .setAuthor("S͟T͟E͟A͟M͟I͟N͟F͟O͟")
            .setThumbnail(summary.avatar.medium)
            .setDescription(summary.nickname)
            .addField("Profile LVL: ",PlayerLvl)
            .addField("STEAMID: ",summary.steamID)
            .addField("URL: ",summary.url)
            .addField("PrimaryGroupID: ",summary.primaryGroupID)
            .addBlankField()
            .addField("VAC Bans:",PlayerBans.vacBans,true)
            .addField("Game Ban:" ,PlayerBans.gameBans,true)
            .addField("Economy Ban:" ,PlayerBans.economyBan,true)
            .addField("Current Game: " ,plygame)
            .addField("Visibility State: " ,summary.visibilityState)
            
            .setFooter("1-Private Account,3-Public Account")
            .setColor("#d3d3d3")
            msg.channel.send(STEAMMSG).then(newMessage => newMessage.delete(120000));;
        });
        });
        });  
    
    
        }
    )}catch(e){console.log(e),msg.channel.send("*ERROR IN FETCHING DATA*:Check ID (For NUM do clannum")}
    ;
}
else{
    try{
        msg.channel.send(fetch)
        var id = steamraw;
        steam.getUserSummary(id).then(summary => {
            console.log(summary)
        //steamgetvac
        steam.getUserBans(id).then(PlayerBans =>{
        console.log(PlayerBans)
        steam.getUserLevel(id).then(PlayerLvl =>{
        console.log(PlayerLvl)
        var plygame = summary.gameExtraInfo;
        if(summary.gameExtraInfo == undefined){
            var plygame = "None"
        }
        var STEAMMSG = new Discord.RichEmbed()
            .setAuthor("S͟T͟E͟A͟M͟I͟N͟F͟O͟")
            .setThumbnail(summary.avatar.medium)
            .setDescription(summary.nickname)
            .addField("Profile LVL: ",PlayerLvl)
            .addField("STEAMID: ",summary.steamID)
            .addField("URL: ",summary.url)
            .addField("PrimaryGroupID: ",summary.primaryGroupID)
            .addBlankField()
            .addField("VAC Bans: ",PlayerBans.vacBans,true)
            .addField("Game Ban" ,PlayerBans.gameBans,true)
            .addField("Economy Ban" ,PlayerBans.economyBan,true)
            .addField("Current Game: " ,plygame)
            .addField("Visibility State" ,summary.visibilityState)
            .setFooter("1-Private Account,3-Public Account")
            .setColor("#d3d3d3")
            msg.channel.send(STEAMMSG);
        });
        });
        
    
        }
    )}catch(e){console.log(e),msg.channel.send("*ERROR IN FETCHING DATA*:Check ID (For NUM do clannum")}
    ;
}


};

module.exports.help ={
    name:"csteam"
}
