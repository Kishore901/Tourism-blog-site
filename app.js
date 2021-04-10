const express = require('express');
// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');
const path = require("path")
// listen to request
app.listen(3000);

// static files
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('home');
});
