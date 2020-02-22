


 var url = args.splice(1,2,3,4,5,6,7).join(" ")
 console.log(url)
 request.open("GET", "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q="+url+"&type=video&key=AIzaSyAiCtfVteixGsmSOVJ9yfOXYtsWDX6Xin4")
 request.send()
 request.onload = function(){
 var json = request.responseText
 var data = JSON.parse(json)
 var vidid = data.items[0].id.videoId
 var final = "https://www.youtube.com/watch?v="+vidid
 console.log(final)
 
 }