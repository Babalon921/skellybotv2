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
        
    if(!isNaN(steamraw)){
        try{
        msg.channel.send(fetch)
        //Steamgetresloveid
        var id = steamraw;
        //steamgetsummary
        steam.getUserSummary(id).then(summary => {
            console.log(summary)
        try{
        steam.getUserStats(id,252490).then(rust =>{
            
            var rust_death = (rust.stats.deaths)
            var rust_kills = (rust.stats.kill_player)
            var rust_headshot = (rust.stats.headshot)
            var rust_map = (rust.stats.MAP_OPENED)
            var rust_lowgrade = (rust.stats.acquired_lowgradefuel)
            var rust_melee = (rust.stats.melee_strikes)
            var rust_inv = (rust.stats.INVENTORY_OPENED)
            var rust_hit = (rust.stats.bullet_hit_player)
            var rust_harvests = (rust.stats.harvested_stones)
            var rust_harvestw = (rust.stats.harvested_wood)
            
            var rust_must1 = (rust.achievements.IM_THE_CAPTAIN_NOW)
            var rust_must2 = (rust.achievements.UPGRADE_BASE)

            if(rust_must1 = 1 & rust_must2 == 1){
                var VALIDPLY = true;
            }
            if(summary.gameServerIP == undefined){
                var serverip = "No Current Server";
            }
            else{
                var serverip = summary.gameServerIP
            }
            var RUSTINFO = new Discord.RichEmbed()
            .setAuthor("R͟U͟S͟T͟I͟N͟F͟O͟")
            .setThumbnail("https://steamuserimages-a.akamaihd.net/ugc/687094810512264399/04BA8A55B390D1ED0389E561E95775BCF33A9857/")
            .setDescription(summary.nickname)
            .addField("STEAMID: ",summary.steamID)
            .addField("URL: ",summary.url)
            .addBlankField()
            .addField("Deaths: ",rust_death,true)
            .addField("Kills: " ,rust_kills,true)
            .addField("Headshots: ",rust_headshot,true)
            .addField("Opened Map:  ",rust_map,true)
            .addField("Gatherd Lowgrade:  ",rust_lowgrade,true)
            .addField("Melee Attacks:  ",rust_melee,true)
            .addField("Inventory Opened:  ",rust_inv,true)
            .addField("Bullets Hit Player:  ",rust_hit,true)
            .addField("Stone's Harvested:  ",rust_harvests,true)
            .addField("Wood Harvested:  ",rust_harvestw,true)
            .setFooter("1-Private Account,3-Public Account")
            .setColor("#d3d3d3")
            msg.channel.send(RUSTINFO).then(newMessage => newMessage.delete(120000));;
        })}catch(e){console.log(e),msg.channel.send("No Rust Info!")
        };
    
        }
    )}catch(e){console.log(e),msg.channel.send("*ERROR IN FETCHING DATA*:Check ID (For NUM do clannum")}
    ;
}
else{
    try{
        msg.channel.send(fetch)
        //Steamgetresloveid
        steam.resolve("https://steamcommunity.com/id/"+steamraw).then(id =>{
        //steamgetsummary
        steam.getUserSummary(id).then(summary => {
            console.log(summary)
        //steamgetvac
        steam.getUserStats(id,252490).then(rust =>{
            
            var rust_death = (rust.stats.deaths)
            var rust_kills = (rust.stats.kill_player)
            var rust_headshot = (rust.stats.headshot)
            var rust_map = (rust.stats.MAP_OPENED)
            var rust_lowgrade = (rust.stats.acquired_lowgradefuel)
            var rust_melee = (rust.stats.melee_strikes)
            var rust_inv = (rust.stats.INVENTORY_OPENED)
            var rust_hit = (rust.stats.bullet_hit_player)
            var rust_harvests = (rust.stats.harvested_stones)
            var rust_harvestw = (rust.stats.harvested_wood)
            
            var rust_must1 = (rust.achievements.IM_THE_CAPTAIN_NOW)
            var rust_must2 = (rust.achievements.UPGRADE_BASE)

            var RUSTINFO = new Discord.RichEmbed()
            .setAuthor("R͟U͟S͟T͟I͟N͟F͟O͟")
            .setThumbnail("https://steamuserimages-a.akamaihd.net/ugc/687094810512264399/04BA8A55B390D1ED0389E561E95775BCF33A9857/")
            .setDescription(summary.nickname)
            .addField("STEAMID: ",summary.steamID)
            .addField("URL: ",summary.url)
            .addBlankField()
            .addField("Deaths: ",rust_death,true)
            .addField("Kills: " ,rust_kills,true)
            .addField("Headshots: ",rust_headshot,true)
            .addField("Opened Map:  ",rust_map,true)
            .addField("Gatherd Lowgrade:  ",rust_lowgrade,true)
            .addField("Melee Attacks:  ",rust_melee,true)
            .addField("Inventory Opened:  ",rust_inv,true)
            .addField("Bullets Hit Player:  ",rust_hit,true)
            .addField("Stone's Harvested:  ",rust_harvests,true)
            .addField("Wood Harvested:  ",rust_harvestw,true)
            .setFooter("1-Private Account,3-Public Account")
            .setColor("#d3d3d3")
            msg.channel.send(RUSTINFO);   
        });
        });  
    
    
        }
    )}catch(e){console.log(e),msg.channel.send("*ERROR IN FETCHING DATA*:Check ID (For NUM do clannum")}
    ;
}






};
module.exports.help ={
    name:"crust"
}