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
  res.json({ message: 'Hello json' });
});

app.get('/now', (req, res, next) => {
  req.time = new Date().toString();
  next();
}, (req, res) => {
  res.json({ time: req.time });
});





































module.exports = app;
