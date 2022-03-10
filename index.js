require('dotenv').config();
const passport = require("passport");
const express = reequire("express");
const cors = require("cors");

const {connection} = require("./db");
const port = process.env.PORT || 5000;

const user = require("./models/user");
const test = require("./model/test");


const app = express();
app.use(express.json());

app.use(cors()); // {origin: process.env.origin}


app.use((req, res, next) => {
    res.header('Access-control-allow-origin', '*');
    next();
});

passport.use("register", registerStrategy);
passport.use("login", loginStrategy);
passport.use(verifyStrategy, console.log("verify on index.js"));

app.use("/", indexRouter);
app.use("/test", testRouter);
app.use("/user", userRouter);
app.use("*", errorRouter);

app.listen(port, async () => {
    console.log("app is listening");
    connection.authenticate();
    await User.sync({alter: true});
    await Test.sync({ alter: true }); // This creates/updates tables
    console.log("HTTP Server Started");
  });