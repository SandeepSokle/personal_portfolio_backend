const express = require("express");
const argv = require("yargs").argv;
const { mongoConnection } = require("./mongo/config");
const usersController = require("./src/controller/usersController");
const profileRouter = require("./src/routers/profileRouter.js");
const resumeRouter = require("./src/routers/resumeRouter");
const cors = require("cors");
const secretRouter = require("./src/routers/secretRouters");
const userRouter = require("./src/routers/userRouter");
const receviedRouter = require("./src/routers/receivedMessageRouter");
const app = express();
const fs = require("fs");
const https = require("https");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use(express.json());
app.use(cors());
app.use("/profile", profileRouter);
app.use("/portfolio", resumeRouter);
app.use("/secretKey", secretRouter);
app.use("/user", userRouter);
app.use("/message", receviedRouter);

mongoConnection();
// const base = "/etc/letsencrypt/live/portfolio.webtechbharat.com/";
// const CERT = `${base}/fullchain.pem`;
// const PEM = `${base}/privkey.pem`;
// const CHAIN = `${base}/chain.pem`;

// const options = {
//   key: fs.readFileSync(PEM),
//   cert: fs.readFileSync(CERT),
//   ca: fs.readFileSync(CHAIN),
// };

// var server = https.createServer(options, app);
// var server = https.createServer( app);
const port = process.env.PORT || 3000
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
})

// const host = process.env.PORT || 8080;
// app.listen(host, () => {
//   console.log(`Server run on local host : ${host}`);
// });
