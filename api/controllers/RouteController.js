module.exports = {

	index: function (req, res) {
		res.view('app/index', { layout: 'layout-app' });
	},

	_config: {}
  
};