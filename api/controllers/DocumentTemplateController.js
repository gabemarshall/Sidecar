module.exports = {

    create: function (req, res, next) {
        var params = req.params.all();

        // Make sure the template is assigned to the logged in user
        params.user = req.session.user
        
        DocumentTemplate.create(params, function (err, documentTemplate) {
            if (err) return next(err);

            res.status(201);

            res.json(documentTemplate);
        });
    },

    find: function (req, res, next) {
        var id = req.param('id'),
            idShortCut = isShortcut(id);

        if (idShortCut === true) {
            return next();
        }

        if (id) {
            DocumentTemplate.findOne(id, function (err, documentTemplate) {
                if (documentTemplate === undefined) return res.notFound();

                if (err) return next(err);

                res.json(documentTemplate);

            });

        } else {
            var options = {
                where: { user: req.session.user }
            };
            
            DocumentTemplate.find(options, function (err, documentTemplate) {
                if (documentTemplate === undefined) return res.notFound();
                if (err) return next(err);
                res.json(documentTemplate);
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

        DocumentTemplate.update(id, criteria, function (err, documentTemplate) {
            if (documentTemplate.length === 0) return res.notFound();
            if (err) return next(err);
            res.json(documentTemplate);
        });
    },

    delete: function (req, res, next) {
        var id = req.param('id');

        if (!id) {
            return res.badRequest('No id found.');
        }

        DocumentTemplate.findOne(id).exec(function (err, result) {
            if (err) return res.serverError(err);

            if (!result) return res.notFound();

            DocumentTemplate.destroy(id, function(err) {
                if (err) return next(err);
                return res.json(result);
            });
        });
    },

    /**
     * Overrides for the settings in `config/controllers.js`
     * (specific to DocumentTemplateController)
     */
    _config: {}

};
