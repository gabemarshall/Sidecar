/**
 * isAuthenticated
 *
 * @module      :: Policy
 * @description :: Simple policy to allow any authenticated user
 *                 Assumes that your login action in one of your controllers sets `req.session.authenticated = true;`
 * @docs        :: http://sailsjs.org/#!documentation/policies
 *
 */

module.exports = function(req, res, next) {

  // Debug method to disable auth by simulating a specific user id
  if (!sails.argv.userid){
	   if (req.session.user) {
	    return next();
	  }
  }
  else {
  	req.session.user = sails.argv.userid
  	console.log("Debug: Pretending to be user #"+sails.argv.userid);
  	return next();
  }

  return res.forbidden('Access Denied!');
};
