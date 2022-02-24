const mongoose = require("mongoose")
const {Schema} = mongoose;

const eventSchema = new Schema({
    eventTitle:{
        type:String,
        require:true
    },
    eventDate:{
        type:Date,
        require:true,
    },
    eventDesc:{
        type:String,
        require:true
    },
    eventImage:{
        type:String,
        require:true,
    },
    speakerImage:{
        type:String,
        require:true,
    },
    speakerName:{
        type:String,
        require:true,
    },
    speakerPosition:{
        type:String,
        require:true,
    },
    SpeakerBio:{
        type:String,
        require:true,
    },
});

const Event = mongoose.model("event", eventSchema );

module.exports = {Event}