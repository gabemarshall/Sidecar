/**
 * Note
 *
 * @module      :: Model
 * @description :: A note is a short to medium length comment that can be associated with a client..?
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
  	
  	title: 'string',
    description: 'text',
    client: {
      model: 'client',
      defaultsTo: 'None'
    }

    
  }

};
