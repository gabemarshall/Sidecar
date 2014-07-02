module.exports = {


    create: function(req, res, next) {

        var params = req.params.all();

        // Make sure the client is assigned to the logged in user
        params.user = req.session.user

        Client.create(params, function(err, client) {

            if (err) return next(err);

            res.status(201);

            res.json(client);

        });

    },

    find: function(req, res, next) {

        var id = req.param('id');
        var name = req.param('name')

        var idShortCut = isShortcut(id);

        if (idShortCut === true) {
            return next();
        }

        if (name) {
            
            Client.findOne({where: {name: name, user: req.session.user }}).populate('projects').exec(function(err, client){
                if (client === undefined) return res.notFound();

                if (err) return next(err);
                res.json(client)
            })

        
        } else {

            var options = {
                where: { user: req.session.user }
            };

            Client.find(options, function(err, client) {

                if (client === undefined) return res.notFound();

                if (err) return next(err);

                res.json(client);

            });

        }

        function isShortcut(id) {
            if (id === 'find' || id === 'update' || id === 'create' || id === 'destroy') {
                return true;
            }
        }

    },

    update: function(req, res, next) {
        
        var criteria = {};

        criteria = _.merge({}, req.params.all(), req.body);

        var id = req.param('id');

        if (!id) {
            return res.badRequest('No id found.');
        }

        Client.update(id, criteria, function(err, client) {

            if (client.length === 0) return res.notFound();

            if (err) return next(err);

            res.json(client);

        });
    },

    delete: function(req, res, next) {

        var id = req.param('id');

        if (!id) {
            return res.badRequest('No id found.');
        }

        Client.findOne(id).exec(function(err, result) {
            if (err) return res.serverError(err);

            if (!result) return res.notFound();

            Client.destroy(id, function(err) {

                if (err) return next(err);

                return res.json(result);
            });

        });
    },

    /**
     * Overrides for the settings in `config/controllers.js`
     * (specific to ClientController)
     */
    _config: {}


};
