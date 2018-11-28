const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

let article = [];

// START: Get

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/article', (req, res) => {
  res.render('article', {article_data:article});
});

app.get('*', (req, res) => {
  res.send('404, page not found!');
});

// END: Get

// START: Post

app.post('/article/new', (req, res) => {
  let article_data = {"title":req.body.title, "content":req.body.content, "img":req.body.img};

  article[0] = article_data;
  res.redirect('/article');
});

// END: Post

app.listen(3000, () => {
  console.log('Server running on port 3000!');
});


