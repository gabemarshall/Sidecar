/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    attributes: {
        email: { 
        	type: 'string',
        	unique: true,
        	required: true
        },
        password: 'string',
        team: {
            model: 'team'
        },
        projects: {
            collection: 'project',
            via: 'user',
            dominant: true
        },
        clients: {
            collection: 'client',
            via: 'user',
            dominant: true
        }
    },
    beforeCreate: function(attrs, next) {
        var bcrypt = require('bcrypt');

        bcrypt.genSalt(10, function(err, salt) {
            if (err) return next(err);

            bcrypt.hash(attrs.password, salt, function(err, hash) {
                if (err) return next(err);

                attrs.password = hash;
                next();
            });
        });
    }
};
