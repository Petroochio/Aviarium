var mongoose = require('mongoose');
var _ = require('underscore');

var BirdModel;

var setName = function(name) {
    return _.escape(name).trim();
};

var setBeak = function(beak) {
    return _.escape(beak).trim();
};

var setWing = function(wing) {
    return _.escape(wing).trim();
};

var setBody = function(body) {
    return _.escape(body).trim();
};

var BirdSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        set: setName
    },
    
    body: {
        type: String,
        required: true,
        trim: true,
        set: setBody
    },

    wing: {
        type: String,
        required: true,
        trim: true,
        set: setWing
    },

    beak: {
        type: String,
        required: true,
        trim: true,
        set: setBeak
    },

    owner: 	{
		type: mongoose.Schema.ObjectId,
		required: true,
		ref: 'Account'
	},
    
    createdData: {
        type: Date,
        default: Date.now
    }

});

BirdSchema.methods.toAPI = function() {
    return {
        name: this.name
    };
};

BirdSchema.statics.findByOwner = function(ownerId, callback) {

    var search = {
        owner: mongoose.Types.ObjectId(ownerId)
    };

    return BirdModel.find(search).select("name age").exec(callback);
};


BirdModel = mongoose.model('Bird', BirdSchema);


module.exports.BirdModel = BirdModel;
module.exports.BirdSchema = BirdSchema;