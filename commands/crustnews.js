
var Discrod = require("discord.js")
var Twitter = require('twitter');
module.exports.run = (bot,msg,args)=>{
var twclient = new Twitter({
        consumer_key: 'X0U5qYsbSxGCncbMD5HTqCy4P',
        consumer_secret: 'mpxZbKMQenaViNoLwvvXoGWv2RajDXoIYr8jH6O8iV0bwoOjky',
        access_token_key: '899633985327857664-0gu2jjGyLav6iCqK0Z0Fxkx9qCId55T',
        access_token_secret: 'LiBMq0bnvzUWVKoML5xEDXMkFdYLL6ir8EOXxuF4AVyrQ'
});
var params1 = {
    screen_name: 'RustUpdates',
    count: 1,
    result_type: 'recent',
    lang: 'en'
  }
var params2 = {
    screen_name: 'playrust',
    count: 1,
    result_type: 'recent',
    lang: 'en'
  }
var params3 = {
    screen_name: 'garrynewman',
    count: 1,
    result_type: 'recent',
    lang: 'en'
  }
var params4 = {
    screen_name: 'Shadow_frax',
    count: 1,
    result_type: 'recent',
    lang: 'en'
}
twclient.get('statuses/user_timeline', params1, function(error1, tweets1, response1) {
  twclient.get('statuses/user_timeline', params2, function(error2, tweets2, response2) {
    twclient.get('statuses/user_timeline', params3, function(error3, tweets3, response3) {
      twclient.get('statuses/user_timeline', params4, function(error4, tweets4, response4) {
  
        console.log(tweets2[0].text)
        console.log(tweets3[0].text)
        console.log(tweets4[0].text)
        var twmsg = new Discrod.RichEmbed()
        .setTitle("Rust News: ")
        .addField("Rust Commits:",tweets1[0].text)
        .addField("Rust Offical:",tweets2[0].text)
        .addField("Garry:",tweets3[0].text)
        .addField("SHADOWFRAX",tweets4[0].text)
        .setTimestamp()
        .setColor("#ff0000")
        .setFooter('SkellyBOT', 'https://cdn.discordapp.com/attachments/680885958312460393/680896907824201790/black.png');
        msg.channel.send(twmsg)
      });
    });
  });
 });






}
module.exports.help ={
    name:"crustnews"
}