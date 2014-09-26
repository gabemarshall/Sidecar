/**
 * Document
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    attributes: {
        name: 'string',
        client: {
            model: 'client',
            defaultsTo: 'None'
        },
        template: {
            model: 'documentTemplate',
            defaultsTo: 'None'
        },
        team: {
            model: 'team'
        },
        user: {
            model: 'user'
        }
    }
};
