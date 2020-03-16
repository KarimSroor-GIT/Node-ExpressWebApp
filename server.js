const express = require ('express');
const path = require('path');
const routes = require('./routes');
const cookieSession = require ('cookie-session');
const Feedbackservice = require('./services/FeedbackService');
const SpeakerService = require ('./services/SpeakerService');

const feedbackService = new Feedbackservice ('./data/feedback.json');
const speakerService  = new SpeakerService ('./data/speakers.json');

const app = express();
const port = 3000;

app.set ('trust proxy',true);
app.use(
  cookieSession({
  name :'session',
  keys : ['Gh788ursdsdsd','kSrOr0033klk']
    })
);

app.set('view engine','ejs');
app.set ('views',path.join(__dirname,'./views'));

app.use(express.static(path.join(__dirname,'./static')));
app.use('/',routes({
  feedbackService,
  speakerService
}));

app.listen(port, ()=> {
  console.log (`Express server running & listening to Port : ${port}`);
})

