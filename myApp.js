let bodyParser = require('body-parser');
require('dotenv').config();
let express = require('express');
let app = express();

// CH 1
// console.log("Hello World");

// CH 2
// app.get('/', function (req, res) {
//   res.send('Hello Express');
// });

// CH 7
app.use(function (req, res, next) {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});

// CH 3
app.get('/', (req, res) => {
  res.sendFile('views/index.html', { root: __dirname });
});

//  CH 4
app.use("/public", express.static(__dirname + "/public"));

// CH 5
app.get('/json', (req, res) => {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    response = "Hello json".toUpperCase();
  } else {
    response = "Hello json";
  }
  res.json({ "message": response });
});

// CH 8
app.get('/now', (req, res, next) => {
  req.time = new Date().toString();
  next();
}, (req, res) => {
  res.json({ "time": req.time });
});

// Testing CH 8
app.get('/ahora', (req, res) => {
  req.time = new Date().toString();
  res.json({ "time": req.time });
});

// CH 9
app.get('/:word/echo', (req, res) => {
  res.json({ "echo": req.params.word });
});

// CH 10
app.get('/name', (req, res) => {
  res.json({ "name": req.query.first + " " + req.query.last });
});

// CH 11
app.use(bodyParser.urlencoded({ extended: false }));

// CH 12
app.post('/name', (req, res) => {
  res.json({ "name": req.body.first + " " + req.body.last });
})







































module.exports = app;
