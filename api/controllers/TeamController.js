module.exports = {


    create: function(req, res, next) {

        var params = req.params.all();

        Team.create(params, function(err, team) {

            if (err) return next(err);

            res.status(201);

            res.json(team);

        });

    },

    find: function(req, res, next) {

        var id = req.param('id');

        var idShortCut = isShortcut(id);

        if (idShortCut === true) {
            return next();
        }

        if (id) {
            
            Team.findOne(id).populate('users').populate('users').exec(function(err, team){
                if (team === undefined) return res.notFound();

                if (err) return next(err);
                res.json(team)
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

            Team.find(options, function(err, team) {

                if (team === undefined) return res.notFound();

                if (err) return next(err);

                res.json(team);

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

        Team.update(id, criteria, function(err, team) {

            if (team.length === 0) return res.notFound();

            if (err) return next(err);

            res.json(team);

        });
    },

    delete: function(req, res, next) {

        var id = req.param('id');

        if (!id) {
            return res.badRequest('No id found.');
        }

        Team.findOne(id).exec(function(err, result) {
            if (err) return res.serverError(err);

            if (!result) return res.notFound();

            Team.destroy(id, function(err) {

                if (err) return next(err);

                return res.json(result);
            });

        });
    },

    /**
     * Overrides for the settings in `config/controllers.js`
     * (specific to TeamController)
     */
    _config: {}


};
