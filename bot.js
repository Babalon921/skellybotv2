const Discord = require("discord.js");
const config = require("./config.json");
const token = config.token;
const prefix = config.prefix;
const bot = new Discord.Client();
const fs = require("fs");
var mongoose = require('mongoose');

bot.commands = new Discord.Collection();


mongoose.connect('mongodb+srv://app:app921@discord-dkpzz.mongodb.net/ClanUsers?retryWrites=true&w=majority',{ useUnifiedTopology:true },function (err) {
    if (err) throw err;
  
    console.log('Successfully connected To MongoDB');
  
 });


fs.readdir("./commands/", (er, files)=>{
    if(er) console.log(er);
    //Pops the js off the filename spliting where the . is
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.legth <= 0){
        console.log("Error In finding Commands")
        return;
    }
    // each file say that it has loaded successfully!
    jsfile.forEach((f, i) =>{
        let props = require(`./commands/${f}`);
        console.log(`${f} loaded successfully`);
        bot.commands.set(props.help.name, props);
    })
});

bot.on("ready", member => {
console.log("Bot Made by Babalon921 @𝔹𝕒𝕓𝕒𝕝𝕠𝕟⁹ ² ¹#0050");
    bot.user.setStatus('available')
    bot.user.setPresence({
        game: {
            name: 'This Shit WACK',
            type: "STREAMING",
            url: "https://www.twitch.tv/directory/game/Rust"
        }
    });

});
bot.on('guildMemberAdd', (guildMember) => {
    var ServerID = guildMember.guild;
    if(ServerID.id = "510858112627113995" || "617841696407027726"){

    guildMember.addRole(guildMember.guild.roles.find(role => role.name === "Cadets"));
}})

bot.on("message", msg =>{
    if(msg.author.bot) return;
    if(msg.channel.type === "dm") return;
    if(!msg.content.startsWith(prefix))return;
    
    let msgarray = msg.content.split(/ +/);
    let cmd = msgarray[0];
    let args = msgarray.slice(1);

    let commandsfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandsfile) commandsfile.run(bot,msg,args);

    

});
bot.on('voiceStateUpdate', (oldMember, newMember) => {
    let newUserChannel = newMember.voiceChannel
    let oldUserChannel = oldMember.voiceChannel
    const channel = bot.channels.find(x => x.name == "⚔incident⚔")
    
    
    
  
    if(oldUserChannel === undefined && newUserChannel !== undefined) {
        var joindata = '{"log":[{"Channel":"'+newMember.voiceChannelID+'","UserID":"'+newMember.id+'","State":"Joined","DisplayName":"'+oldMember.displayName+'"}]}';
        var joinobj = JSON.parse(joindata);
        var joinContent = JSON.stringify(joinobj);
        fs.writeFile("./store/channellog.json", joinContent, 'utf8', function (err) {
            if (err) {
                console.log("Cant Write ERROR 1");
        }
        });
    } else if(newUserChannel === undefined){
        var leavedata = '{"log":[{"Channel":"'+oldMember.voiceChannelID+'","UserID":"'+oldMember.id+'","State":"Left","DisplayName":"'+oldMember.displayName+'"}]}';
        var leaveobj = JSON.parse(leavedata);
        var leaveContent = JSON.stringify(leaveobj);
        fs.writeFile("./store/channellog.json", leaveContent, 'utf8', function (err) {
            if (err) {
                console.log("Cant Write ERROR 2");
        }
        });
  
    }
  })


bot.login(token)