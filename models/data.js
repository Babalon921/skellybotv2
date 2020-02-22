const mongoose = require("mongoose")

const dataSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: String,
    userID: {type:String,unique : true},
    steamID:{type:String,unique : true},
    url: String,
    time: String,
})

module.exports = mongoose.model("Data",dataSchema)