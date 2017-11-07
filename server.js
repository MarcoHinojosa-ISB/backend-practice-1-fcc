// server.js
// where your node app starts

// init project
var express = require('express');
var moment = require('moment');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/:date", function (req, res) {
  console.log(req.params.date);
  let unix, regular;
  
  if(moment(req.params.date).isValid()){ 
    unix = new Date(req.params.date).getTime();
    
    res.send({
      unix: unix,
      regular: req.params.date.replace(/-/g,"/")
    });
  }
  else if(!isNaN(req.params.date)){
    regular = new Date(Number(req.params.date));
    
    res.send({
      unix: req.params.date,
      regular: (regular.getMonth()+1) + "/" + regular.getDate() + "/" + regular.getFullYear()
    });
  }
  else{
    res.send({
      unix: "N/A",
      regular: "N/A"
    })
  }
});

// listen for requests
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
