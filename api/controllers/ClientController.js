module.exports = {


    create: function(req, res, next) {

        var params = req.params.all();

        Client.create(params, function(err, sleep) {

            if (err) return next(err);

            res.status(201);

            res.json(sleep);

        });

        if (params.client) {
            console.log(params.client)
        }
        // console.log(params)
    },

    find: function(req, res, next) {

        var id = req.param('id');

        var idShortCut = isShortcut(id);

        if (idShortCut === true) {
            return next();
        }

        if (id) {
            
            Client.findOne(id).populate('projects').exec(function(err, client){
                if (client === undefined) return res.notFound();

                if (err) return next(err);
                res.json(client)
            })

        
        } else {

            var where = req.param('where');

            if (_.isString(where)) {
                where = JSON.parse(where);
            }

            var options = {
                limit: req.param('limit') || undefined,
                skip: req.param('skip') || undefined,
                sort: req.param('sort') || undefined,
                where: where || undefined
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
