require('dotenv').config();
let express = require('express');
let app = express();

// console.log("Hello World");

// app.get('/', function (req, res) {
//   res.send('Hello Express');
// });

app.use("/public", express.static(__dirname + "/public"));

app.get('/', (req, res) => {
  res.sendFile('views/index.html', { root: __dirname });
});

app.get('/json', (req, res) => {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    res.json({ "message": "HELLO JSON" });
  } else {
    res.json({ "message": "Hello json" });
  }
});






































module.exports = app;
