var _ = require('underscore');
var models = require('../models');

var Bird = models.Bird;

var makerPage = function(req, res) {

    Bird.BirdModel.findByOwner(req.session.account._id, function(err, docs) {

        if(err) {
            console.log(err);
            return res.status(400).json({error:'An error occurred'}); 
        }
        
        res.render('app', {birds: docs});
    });
};

var makeBird = function(req, res) {

    if(!req.body.name || !req.body.age) {
        return res.status(400).json({error: "Form Incomplete"});
    }
    
    var birdData = {
        name: req.body.name,
        owner: req.session.account._id
    };
    
    var newBird = new Bird.BirdModel(birdData);
    
    newBird.save(function(err) {
        if(err) {
            console.log(err);
            return res.status(400).json({error:'An error occurred'}); 
        }

        res.json({redirect: '/maker'});
    });
    
};

module.exports.makerPage = makerPage;
module.exports.make = makeBird;