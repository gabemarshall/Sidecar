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
            idShortCut = isShortcut(id),
            name = req.param('name');

        if (idShortCut === true) {
            return next();
        }

        // If the name parameter exists then return all info from a document
        if (name) {
            
            Document.findOne({where: {name: name, user: req.session.user }}).exec(function(err, document){
                if (document === undefined) return res.notFound();

                if (err) return next(err);
                res.json(document)
            })

        } 
        // If only the id parameter exists then just return basic Document info
        else if (id){
            Document.findOne({where: {id: id, user: req.session.user }}, function(err, document){
            if (document === undefined) return res.notFound();

                if (err) return next(err);
                res.json(document)
            })
        }
        // If no parameters exist, return all Documents associated with the active session
        else {

            var options = {
                where: { user: req.session.user }
            };

            Document.find(options, function(err, document) {

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
