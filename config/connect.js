const mongoose = require("mongoose")
const dotenv = require("dotenv")


dotenv.config()


const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Database connect successfully");
    } catch(err) {
        console.log(err.message);
    }
};

module.exports = {connectDB};