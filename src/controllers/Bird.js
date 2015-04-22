var _ = require('underscore');
var models = require('../models');

var Bird = models.Bird;

var cataloguePage = function(req, res) {
    Bird.BirdModel.findByOwner(req.session.account._id, function(err, docs) {

        if(err) {
            console.log(err);
            return res.status(400).json({error:'An error occurred'}); 
        }
        
        res.render('catalogue', {birds: docs});
    });
}

var makerPage = function(req, res) {

    Bird.BirdModel.findByOwner(req.session.account._id, function(err, docs) {

        if(err) {
            console.log(err);
            return res.status(400).json({error:'An error occurred'}); 
        }
        
        res.render('bird', {birds: docs});
    });
};

var makeBird = function(req, res) {

    if(!req.body.name ) {
        return res.status(400).json({error: "Form Incomplete"});
    }
    
    var birdData = {
        name: req.body.name,
        wing: req.body.wing,
        body: req.body.body,
        beak: req.body.beak,
        owner: req.session.account._id
    };
    
    var newBird = new Bird.BirdModel(birdData);
    
    newBird.save(function(err) {
        if(err) {
            console.log(err);
            return res.status(400).json({error:'An error occurred'}); 
        }

        res.json({redirect: '/catalogue'});
    });
    
};

module.exports.makerPage = makerPage;
module.exports.cataloguePage = cataloguePage;
module.exports.make = makeBird;