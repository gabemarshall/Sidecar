/**
 * Task
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
  	
  	title: 'string',
  	completed: { 
      type: 'boolean', 
      defaultsTo: false
    },
  	project: {
  		model: 'project'
  	},
  	user: {
  		model: 'user'
  	}
    
  }

};
