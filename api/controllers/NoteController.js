module.exports = {


    create: function(req, res, next) {

        var params = req.params.all();

        // Make sure the note is assigned to the logged in user
        params.user = req.session.user
        
        Note.create(params, function(err, note) {

            if (err) return next(err);

            res.status(201);

            res.json(note);

        });
    },

    find: function(req, res, next) {

        var id = req.param('id');
        var title = req.param('title');

        var idShortCut = isShortcut(id);

        if (idShortCut === true) {
            return next();
        }

        if (title) {
            
          // TODO 
          //  Note.findOne({where:{title: title, user: req.session.user}})

        
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

        Note.update(id, criteria, function(err, note) {

            if (note.length === 0) return res.notFound();

            if (err) return next(err);

            res.json(note);

        });
    },

    delete: function(req, res, next) {

        var id = req.param('id');

        if (!id) {
            return res.badRequest('No id found.');
        }

        Note.findOne(id).exec(function(err, result) {
            if (err) return res.serverError(err);

            if (!result) return res.notFound();

            Note.destroy(id, function(err) {

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
