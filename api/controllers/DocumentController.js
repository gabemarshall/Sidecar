module.exports = {

    create: function (req, res, next) {
        var params = req.params.all();

        // Make sure the document is assigned to the logged in user
        params.user = req.session.user
        
        Document.create(params, function (err, document) {
            if (err) return next(err);

            res.status(201);

            res.json(document);
        });
    },

    find: function (req, res, next) {
        var id = req.param('id'),
            idShortCut = isShortcut(id);

        if (idShortCut === true) {
            return next();
        }

        if (id) {
            Document.findOne(id, function (err, document) {
                if (document === undefined) return res.notFound();

                if (err) return next(err);

                res.json(document);

            });

        } else {
            var options = {
                where: { user: req.session.user }
            };
            
            Document.find(options, function (err, document) {
                if (document === undefined) return res.notFound();
                if (err) return next(err);
                res.json(document);
            });

        }

        function isShortcut (id) {
            if (id === 'find' || id === 'update' || id === 'create' || id === 'destroy') {
                return true;
            }
        }
    },

    update: function (req, res, next) {
        var criteria = {};

        criteria = _.merge({}, req.params.all(), req.body);

        var id = req.param('id');

        if (!id) {
            return res.badRequest('No id found.');
        }

        Document.update(id, criteria, function (err, document) {
            if (document.length === 0) return res.notFound();
            if (err) return next(err);
            res.json(document);
        });
    },

    delete: function (req, res, next) {
        var id = req.param('id');

        if (!id) {
            return res.badRequest('No id found.');
        }

        Document.findOne(id).exec(function (err, result) {
            if (err) return res.serverError(err);

            if (!result) return res.notFound();

            Document.destroy(id, function(err) {
                if (err) return next(err);
                return res.json(result);
            });
        });
    },

    /**
     * Overrides for the settings in `config/controllers.js`
     * (specific to DocumentController)
     */
    _config: {}

};
