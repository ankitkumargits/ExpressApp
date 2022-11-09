const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectToMongo = require("./db/conn");

dotenv.config({ path: "./config.env" });
connectToMongo();
const PORT = process.env.PORT;

app.use(express.json());
app.use("/api", require("./routers/api"));

app.listen(PORT, () => {
    console.log(`Your Express Server is running on port ${PORT}`);
}); 
