const express = require('express');
const router = express.Router();
const {check,validationResult} = require('express-validator');

module.exports = (params)=>{
 
  const {feedbackService} = params;

  router.get('/', async (req,res,next) => {
    try {
      console.log('get method ');
      const feedback = await feedbackService.getList();
      const errors =   req.session.feedback ? req.session.feedback.errors: false;
      req.session.feedback = {};

      return res.render('layout',{pageTitle: 'Feedback',template: 'feedback',feedback,errors}) ;

    } catch (error) {
      return next(error)
    }

    
  });
  
  router.post('/',
  [
    check('name').trim().isLength({min:3}).escape().withMessage('name is required , min length accepted is 3 chars'),
    check('email').trim().isEmail().normalizeEmail().withMessage('valid Email is required'),
    check('title').trim().isLength({min:3}).escape().withMessage('title is required , min length accepted is 3 chars'),
    check('message').trim().isLength({min:10}).escape().withMessage('name is required , min length accepted 10 chars')
 ],
  (req,res) => {

    const errors = validationResult(req);

     if(!errors.isEmpty())
    {
    req.session.feedback =  {
      errors: errors.array(),
    };
    return res.redirect('/feedback');
    }
    return res.send('feedback form successfully posted');
});

  return router;
  };