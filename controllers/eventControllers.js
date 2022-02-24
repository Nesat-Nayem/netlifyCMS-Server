const mongoose = require("mongoose");
const { Event } = require("../models/eventModel");

// post a new event

const postEvent = async (req, res) => {
  try {
    const event = new Event(req.body);
    const result = await event.save();
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// get all post
const getEvents = async (req, res) => {
    try{
        const events = await Event.find();
        res.json(events);
    }catch (err){
        res.status(500).json({message:err.message});
    }
};

// get single post details by id

const getEventById = async (req, res) => {
  try{
    const id = req.params.id;
    const query = { _id : mongoose.Types.ObjectId(id) };
    const result = await Event.findOne(query)
    res.json(result);
  }catch (err) {
    res.status(500).json({error : err.message})
  }
}

// const getEventById = async (req, res) => {
//   try {
//     const id = req.params.id;
//     const query = { _id : id };
//     const result = await Event.findOne({ query: query });
//     res.json(result);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };


module.exports = {
  postEvent,
  getEvents,
  getEventById,
};
