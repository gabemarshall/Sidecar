module.exports = {

    create: function (req, res, next) {
        var params = req.params.all();

        // Make sure the template is assigned to the logged in user
        params.user = req.session.user
        
        DocumentType.create(params, function (err, documentType) {
            if (err) return next(err);

            res.status(201);

            res.json(documentType);
        });
    },

    find: function (req, res, next) {
        var id = req.param('id'),
            idShortCut = isShortcut(id);

        if (idShortCut === true) {
            return next();
        }

        if (id) {
            DocumentType.findOne(id, function (err, documentType) {
                if (documentType === undefined) return res.notFound();

                if (err) return next(err);

                res.json(documentType);

            });

        } else {
            var options = {
                where: { user: req.session.user }
            };
            
            DocumentType.find(options, function (err, documentType) {
                if (documentType === undefined) return res.notFound();
                if (err) return next(err);
                res.json(documentType);
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

        DocumentType.update(id, criteria, function (err, documentType) {
            if (documentType.length === 0) return res.notFound();
            if (err) return next(err);
            res.json(documentType);
        });
    },

    delete: function (req, res, next) {
        var id = req.param('id');

        if (!id) {
            return res.badRequest('No id found.');
        }

        DocumentType.findOne(id).exec(function (err, result) {
            if (err) return res.serverError(err);

            if (!result) return res.notFound();

            DocumentType.destroy(id, function(err) {
                if (err) return next(err);
                return res.json(result);
            });
        });
    },

    /**
     * Overrides for the settings in `config/controllers.js`
     * (specific to DocumentTypeController)
     */
    _config: {}

};
