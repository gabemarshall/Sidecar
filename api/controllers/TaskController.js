module.exports = {


    create: function(req, res, next) {

        var params = req.params.all();

        console.log(params)

        Task.create(params, function(err, task) {

            if (err) return next(err);

            res.status(201);

            res.json(task);
            console.log(task)

        });


        // console.log(params)
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
        console.log("hmm")

        var criteria = {};

        criteria = _.merge({}, req.params.all(), req.body);

        var id = req.param('id');

        if (!id) {
            return res.badRequest('No id provided.');
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
            return res.badRequest('No id provided.');
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
