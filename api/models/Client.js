/**
 * Client
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
  	
  	name: 'string',
  	city: 'string',
    state: 'string',
    contact: 'string',
    phone: 'string',
  	email: 'string',
  	avatar: 'string',
    website: 'string',
    address: 'string',
    team: {
      model: 'team'
    },
    projects: {
      collection: 'project',
      via: 'client',
      dominant: true
    },
    user: {
      model: 'user'
    }
    
  }

};
