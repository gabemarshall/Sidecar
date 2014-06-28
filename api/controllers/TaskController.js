module.exports = {


    create: function(req, res, next) {

        var params = req.params.all();
        params.user = req.session.user

        Task.create(params, function(err, task) {

            if (err) return next(err);

            res.status(201);

            res.json(task);
            console.log(task)

        });

    },

    find: function(req, res, next) {

        var id = req.param('id');

        var idShortCut = isShortcut(id);

        if (idShortCut === true) {
            return next();
        }

        if (id) {

            Task.findOne(id, function(err, task) {

                if (task === undefined) return res.notFound();

                if (err) return next(err);

                res.json(task);

            });

        } else {
            console.log("hey")

            var options = {
                where: { user: req.session.user }
            };
            
            Task.find(options, function(err, task) {

                if (task === undefined) return res.notFound();

                if (err) return next(err);

                res.json(task);

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

        Task.update(id, criteria, function(err, task) {

            if (task.length === 0) return res.notFound();

            if (err) return next(err);

            res.json(task);

        });
    },

    delete: function(req, res, next) {

        var id = req.param('id');

        if (!id) {
            return res.badRequest('No id found.');
        }

        Task.findOne(id).exec(function(err, result) {
            if (err) return res.serverError(err);

            if (!result) return res.notFound();

            Task.destroy(id, function(err) {

                if (err) return next(err);

                return res.json(result);
            });

        });
    },

    /**
     * Overrides for the settings in `config/controllers.js`
     * (specific to TaskController)
     */
    _config: {}


};
