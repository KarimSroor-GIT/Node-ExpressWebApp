const express = require ('express');
const app = express();
const path = require('path');
const port = 3000;

app.set('view engine','ejs');
app.set ('views',path.join(__dirname,'./views'))

app.listen(port, ()=> {
  console.log (`Express server running & listening to Port : ${port}`);
})

app.get('/',(req,res) => {
      // res.sendfile(path.join(__dirname,'./static/index.html'))
      res.render('pages/index',{pageTitle: 'welcome'})
});

app.get('/speakers',(req,res) => {
  res.sendfile(path.join(__dirname,'./static/speakers.html'))
});