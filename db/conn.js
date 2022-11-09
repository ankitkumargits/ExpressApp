const mongoose = require("mongoose");


const connectToMongo = ()=>{
    const dbUrl = process.env.DATABASE;
    mongoose.connect(dbUrl, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    },()=>{
        console.log("Your database connection is successfully established");
    })
}

module.exports = connectToMongo;