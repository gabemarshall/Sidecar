module.exports = {


    create: function(req, res, next) {

        var params = req.params.all();

        Project.create(params, function(err, project) {

            if (err) return next(err);

            res.status(201);

            res.json(project);

        });
    },

    find: function(req, res, next) {

        var id = req.param('id');

        var idShortCut = isShortcut(id);

        if (idShortCut === true) {
            return next();
        }

        if (id) {
            
            Project.findOne(id).populate('tasks').exec(function(err, project){
                if (project === undefined) return res.notFound();

                if (err) return next(err);
                res.json(project)
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

            Project.find(options, function(err, project) {

                if (project === undefined) return res.notFound();

                if (err) return next(err);

                res.json(project);

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

        Project.update(id, criteria, function(err, project) {

            if (project.length === 0) return res.notFound();

            if (err) return next(err);

            res.json(project);

        });
    },

    delete: function(req, res, next) {

        var id = req.param('id');

        if (!id) {
            return res.badRequest('No id found.');
        }

        Project.findOne(id).exec(function(err, result) {
            if (err) return res.serverError(err);

            if (!result) return res.notFound();

            Project.destroy(id, function(err) {

                if (err) return next(err);

                return res.json(result);
            });

        });
    },

    /**
     * Overrides for the settings in `config/controllers.js`
     * (specific to ProjectController)
     */
    _config: {}


};
