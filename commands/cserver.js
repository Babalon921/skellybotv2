const Discord = require("discord.js")
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const request = new XMLHttpRequest();
const request2 = new XMLHttpRequest();
const request3 = new XMLHttpRequest();
const request4 = new XMLHttpRequest();
const request5 = new XMLHttpRequest();
const request6 = new XMLHttpRequest();
module.exports.run = (bot,msg,args)=>{
    if (!msg.member.hasPermission("ADMINISTRATOR")) return 
    request.open("GET","https://api.battlemetrics.com/servers/433754")
    request.send();
    request.onload = function(){
        var json = request.responseText
        var data = JSON.parse(json)
        console.log(data)
        request2.open("GET","https://api.battlemetrics.com/servers/2036399")
        request2.send();
        request2.onload = function(){
        var json2 = request2.responseText
        var data2 = JSON.parse(json2)
        console.log(data2)
        
        request3.open("GET","https://api.battlemetrics.com/servers/433793")
        request3.send();
        request3.onload = function(){
        var json3 = request3.responseText
        var data3 = JSON.parse(json3)
        console.log(data3)
        request4.open("GET","https://api.battlemetrics.com/servers/1002256")
        request4.send();
        request4.onload = function(){
        var json4 = request4.responseText
        var data4 = JSON.parse(json4)
        console.log(data4)
        request5.open("GET","https://api.battlemetrics.com/servers/3461363")
        request5.send();
        request5.onload = function(){
        var json5 = request5.responseText
        var data5 = JSON.parse(json5)
        console.log(data5)
        console.log()
        
        var Rustserver = new Discord.RichEmbed()
        .setTitle("ServerList:") 
        .addField(data.data.attributes.name,data.data.attributes.status,true)
        .addField("IP: ",data.data.attributes.ip+":"+data.data.attributes.port,true)
        .addField("Players: ",data.data.attributes.players+"/"+data.data.attributes.maxPlayers,true)
        .addField("Player Queue: ",data.data.attributes.details.rust_queued_players,true)
        .addBlankField()
        .addField(data2.data.attributes.name,data2.data.attributes.status,true)
        .addField("IP: ",data2.data.attributes.ip+":"+data2.data.attributes.port,true)
        .addField("Players: ",data2.data.attributes.players+"/"+data2.data.attributes.maxPlayers,true)
        .addField("Player Queue: ",data2.data.attributes.details.rust_queued_players,true)
        .addBlankField()
        .addField(data3.data.attributes.name,data3.data.attributes.status,true)
        .addField("IP: ",data3.data.attributes.ip+":"+data3.data.attributes.port,true)
        .addField("Players: ",data3.data.attributes.players+"/"+data3.data.attributes.maxPlayers,true)
        .addField("Player Queue: ",data3.data.attributes.details.rust_queued_players,true)
        .addBlankField()
        .addField(data4.data.attributes.name,data4.data.attributes.status,true)
        .addField("IP: ",data4.data.attributes.ip+":"+data4.data.attributes.port,true)
        .addField("Players: ",data4.data.attributes.players+"/"+data4.data.attributes.maxPlayers,true)
        .addField("Player Queue: ",data4.data.attributes.details.rust_queued_players,true)
        .addBlankField()
        .addField(data5.data.attributes.name,data5.data.attributes.status,true)
        .addField("IP: ",data5.data.attributes.ip+":"+data5.data.attributes.port,true)
        .addField("Players: ",data5.data.attributes.players+"/"+data5.data.attributes.maxPlayers,true)
        .addField("Player Queue: ",data5.data.attributes.details.rust_queued_players,true)

        .setColor("#00ff00")
        .setTimestamp()
        .setFooter('SkellyBOT', 'https://cdn.discordapp.com/attachments/680885958312460393/680896907824201790/black.png');
        msg.channel.send(Rustserver)
    };
    };
    };
    };
    };
    
}

module.exports.help ={
    name:"cserver"
}