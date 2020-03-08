const express = require('express');
const router = express.Router();

module.exports = ()=>{
 
  router.get('/',(req,res) => {
    res.send('speakers List');
  });
  
  router.get('/:shortName',(req,res) => {
    res.send(`Detail page of ${req.params.shortName}`);
  });
  return router;
  };