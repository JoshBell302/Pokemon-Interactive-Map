//  ========================== SETUP ==========================
const express = require('express');
const app = express();
const port = 2486;

const handlebars = require('express-handlebars');
app.set('view engine', 'handlebars');
app.engine('handlebars', handlebars({layoutsDir: __dirname + '/views/layouts',}));
app.use(express.static(__dirname));

// ========================= LOADING ==========================
// ------------------ Homepage ------------------
app.get('/', (req, res) => {
  console.log("The website has requested " + req.url);
  res.render('homepage', {});
});

// ---------------- Red and Blue ----------------
app.get('/redandblue', (req, res) => {
  console.log("The website has requested " + req.url);
  res.render('redandblue/main', {});
});

// ------------------- Yellow -------------------
app.get('/yellow', (req, res) => {
  console.log("The website has requested " + req.url);
  res.render('yellow/main', {});
});

// --------------- Gold and Silver ---------------
app.get('/goldandsilver', (req, res) => {
  console.log("The website has requested " + req.url);
  res.render('goldandsilver/main', {});
});

// ------------------ Crystal -------------------
app.get('/crystal', (req, res) => {
  console.log("The website has requested " + req.url);
  res.render('crystal/main', {});
});

// -------------- Ruby and Sapphire -------------
app.get('/rubyandsapphire', (req, res) => {
  console.log("The website has requested " + req.url);
  res.render('rubyandsapphire/main', {});
});

// ------------------- Emerald ------------------
app.get('/emerald', (req, res) => {
  console.log("The website has requested " + req.url);
  res.render('emerald/main', {});
});
// ========================== LISTEN ==========================
app.listen(port, () => console.log(`Website is listening to port ${port}`));
