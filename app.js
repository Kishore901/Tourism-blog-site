const express = require('express');
// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');
const path = require('path');
// listen to request
app.listen(3001);

// static files
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/section/:id', (req, res) => {
  console.log(req.params.id);
  if(req.params.id == "festivals" || req.params.id == "wildlife" || req.params.id == "destinations" || req.params.id == "lakes" || req.params.id == "waterfalls" || req.params.id == "museums" || req.params.id == "food" || req.params.id == "temples" || req.params.id == "adventure" || req.params.id == "heritage" || req.params.id == "caves"){
    res.render('route');
  }
  else{
    //render 404 page here
    res.send("link not found")
  }

})
// FESTIVALS
// WILDLIFE
// DESTINATI
// LAKES
// WATERFALL
// MUSEUMS
// FOOD
// TEMPLES
// ADVENTURE
// HERITAGE
// CAVES