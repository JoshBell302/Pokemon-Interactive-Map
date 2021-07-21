//  ========================== SETUP ==========================
const express = require('express');
const app = express();
const port = 2486;

const handlebars = require('express-handlebars');
app.set('view engine', 'handlebars');
app.engine('handlebars', handlebars({layoutsDir: __dirname + '/views/layouts',}));
app.use(express.static(__dirname));

// ========================= LOADING ==========================
app.get('/', (req, res) => {
  console.log("The website has requested " + req.url);
  res.render('homepage', {});
});

// ========================== LISTEN ==========================
app.listen(port, () => console.log(`Website is listening to port ${port}`));
