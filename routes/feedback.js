const express = require('express');
const router = express.Router();

module.exports = ()=>{
 
  router.get('/',(req,res) => {
    res.send('feedback page');
  });
  
  router.post('/:shortName',(req,res) => {
    res.send('Feedback form Posted');
  });
  return router;
  };