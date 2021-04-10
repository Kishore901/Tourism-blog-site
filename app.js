const express = require('express');
// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

// listen to request
app.listen(3000);

// static files
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home');
});
