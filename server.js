var express = require('express');
var app = express();
var pug = require("pug");
var axios = require("axios");
var PORT = 3040;
var path = require('path');



//Middleware
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static(__dirname));


app.get('/', function(req,res){
  res.send("Hello home")
})
app.get('/profile/wallet', function(req,res){
  axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC,XRP&tsyms=USD')
  .then(function (response) {
    console.log(response.data);
    res.render("wallet.pug",{COIN:response.data})
  })
  .catch(function (error) {
    console.log(error);
  });
})
app.get('/profile/mining', function(req,res){
  var miningAdress = "0xd171c8869e991c51cfe2d1e1ab0aa9744c70a9d3";
  axios.get('https://api.nanopool.org/v1/eth/user/'+ miningAdress)
  .then(function (response) {
    console.log(response.data.data);
    res.render("mining.pug",{nanoResponse:response})
  })
  .catch(function (error) {
    console.log(error);
  });
})
app.get('/login', function(req,res){
    res.render("login.pug")
})


app.listen(process.env.PORT || PORT, function() {
   console.log("Listening at " +PORT);
 });
