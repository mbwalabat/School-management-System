require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const Routes = require("./routes/route.js");

const PORT = process.env.PORT || 5000;

app.use(express.json({ limit: "10mb" }));
app.use(cors());

console.log("MONGODB_URI:", process.env.MONGODB_URI); // Debug

mongoose
    .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("NOT CONNECTED TO NETWORK", err));

app.use("/", Routes);

app.listen(PORT, () => {
    console.log(`Server started at port no. ${PORT}`);
});
