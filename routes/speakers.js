const express = require('express');
const router = express.Router();

module.exports = (params)=>{
 
  const {speakerService} = params;

  router.get('/',async (req,res) => {
    const speakers = await speakerService.getList();
    const artwork = await speakerService.getAllArtwork();
    res.render('layout',{pageTitle: 'Speakers',template: 'speakers',speakers,artwork})
    
  });
  
  router.get('/:shortName',async (req,res) => {
    const speaker = await speakerService.getSpeaker(req.params.shortName);
    const artwork = await speakerService.getArtworkForSpeaker(req.params.shortName)
    res.render('layout',{pageTitle: 'Speaker-detail',template: 'speakers-detail',speaker,artwork})
  });
  return router;
  };
  