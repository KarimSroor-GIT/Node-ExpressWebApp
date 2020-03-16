const express = require('express');
const router = express.Router();

module.exports = (params)=>{
 
  const {speakerService} = params;

  router.get('/',async (req,res) => {
    const speakers = await speakerService.getList();
    return res.json(speakers);
  });
  
  router.get('/:shortName',(req,res) => {
    res.send(`Detail page of ${req.params.shortName}`);
  });
  return router;
  };