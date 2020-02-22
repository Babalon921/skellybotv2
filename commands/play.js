const Discord = require("discord.js");
const ytdl = require("ytdl-core")
var servers = {};
const search = require('youtube-search');
 

var msglink = new Discord.RichEmbed()
.setTitle("You Need To Provide A Link!")
.setColor("#ff0000")
.setTimestamp()
.setFooter('CB BOT', 'https://cdn.discordapp.com/attachments/618037893373493250/647838953952509952/severf.png');
var msgchannel = new Discord.RichEmbed()
.setTitle("You Need To Be In A Channel!")
.setColor("#ff0000")
.setTimestamp()
.setFooter('CB BOT', 'https://cdn.discordapp.com/attachments/618037893373493250/647838953952509952/severf.png');
var msgskip = new Discord.RichEmbed()
.setTitle("Skipping Song!")
.setColor("#ff0000")
.setTimestamp()
.setFooter('CB BOT', 'https://cdn.discordapp.com/attachments/618037893373493250/647838953952509952/severf.png');
var msgstop = new Discord.RichEmbed()
.setTitle("Stoping Song!")
.setColor("#ff0000")
.setTimestamp()
.setFooter('RM BOT', 'https://cdn.discordapp.com/attachments/618037893373493250/647838953952509952/severf.png');

module.exports.run = (bot,msg,args)=>{
    if (!msg.member.hasPermission("ADMINISTRATOR")) return 
var url = args.splice(1,2,3,4,5,6,7).join(" ")
    var opts = {
        maxResults: 1,
        q:"",
        key: 'AIzaSyAiCtfVteixGsmSOVJ9yfOXYtsWDX6Xin4'
    };
           
    search(url,opts, function(err, results) {
    if(err) return console.log(err);
           
   var link = (results[0].link);
   var title =(results[0].title)

   var msgplay = new Discord.RichEmbed()
   .setTitle("Playing: "+title)
   .setColor("#ff0000")
   .setTimestamp()
   .setFooter('RM BOT', 'https://cdn.discordapp.com/attachments/618037893373493250/647838953952509952/severf.png');
    

    switch(args[0]){
        case "play":
            function play(connection,msg){
                var server = servers[msg.guild.id];
                server.dispatcher = connection.playStream(ytdl(server.queue[0],{filter: "audioonly"}));
                server.queue.shift();
                msg.channel.send(msgplay).then(newMessage => newMessage.delete(5000));
                server.dispatcher.on("end",function(){
                    if(server.queue[1]){
                        play(connection,msg);
                    }
                    else{
                        connection.disconnect();
                    }
                });
                
            }
        
           
        
              
            
    
            
        console.log(link)
           
        if(!args[0]){
            msg.channel.send(msglink)
            return;
        }
        if(!msg.member.voiceChannel){
            msg.channel.send(msgchannel)
        }
        if(!servers[msg.guild.id])servers[msg.guild.id] ={
            queue:[]
        }
       
        var server = servers[msg.guild.id];
        
        server.queue.push(link);
        
        if(!msg.guild.voiceConnection)msg.member.voiceChannel.join().then(function(connection){
           play(connection,msg);
        
        })
        
   
        break;
        case "skip":
            var server = servers[msg.guild.id];
            if(server.dispatcher)server.dispatcher.end()
            msg.channel.send(msgskip).then(newMessage => newMessage.delete(5000));
        break;
        case "stop":
            var server = servers[msg.guild.id];
            if(msg.guild.voiceConnection){
                for(var i = server.queue.length -1; i >=0;i--){
                    server.queue.splice(i,1);
                }
            server.dispatcher.end();
            msg.channel.send(msgstop).then(newMessage => newMessage.delete(5000));
            }
        break;
    }

});  
}



module.exports.help={
    name:"m"
}
