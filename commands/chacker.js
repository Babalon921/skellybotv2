
var Discrod = require("discord.js")
var Twitter = require('twitter');
module.exports.run = (bot,msg,args)=>{
var twclient = new Twitter({
        consumer_key: 'X0U5qYsbSxGCncbMD5HTqCy4P',
        consumer_secret: 'mpxZbKMQenaViNoLwvvXoGWv2RajDXoIYr8jH6O8iV0bwoOjky',
        access_token_key: '899633985327857664-0gu2jjGyLav6iCqK0Z0Fxkx9qCId55T',
        access_token_secret: 'LiBMq0bnvzUWVKoML5xEDXMkFdYLL6ir8EOXxuF4AVyrQ'
});
var params = {
    screen_name: 'rusthackreport',
    count: 1,
    result_type: 'recent',
    lang: 'en'
  }
twclient.get('statuses/user_timeline', params, function(error, tweets, response) {
    var rusttext = tweets[0].text;
    var rustdate = tweets[0].created_at;
    var rusturl = tweets[0].user.profile_image_url;
    var twmsg = new Discrod.RichEmbed()
    .setDescription("Recent Rust Hacker Banned: \n"+rusttext+"\n"+rustdate+"\n")
    .setThumbnail(rusturl)
    msg.channel.send(twmsg)
 });




}
module.exports.help ={
    name:"chacker"
}