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
app.get('/profile', function(req,res){
  axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC,XRP&tsyms=USD')
  .then(function (response) {
    console.log(response.data);
    res.render("profile.pug",{COIN:response.data})
  })
  .catch(function (error) {
    console.log(error);
  });

})



app.listen(process.env.PORT || PORT, function() {
   console.log("Listening at " +PORT);
 });
