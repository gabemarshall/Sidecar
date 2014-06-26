/**
 * Project
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
  	
  	/* e.g.
  	nickname: 'string'
  	*/
  	title: 'string',
  	due: 'datetime',
  	progress: 'integer',
  	tasks : {
      collection: 'task',
      via : 'project',
      dominant : true
    },
    client: {
      model: 'client'
    },
    team: {
      model: 'team'
    }

    
  }

};
