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
  	location: 'string',
  	email: 'string',
  	avatar: 'string',
    projects: {
      collection: 'project',
      via: 'client',
      dominant: true
    }
    
  }

};
