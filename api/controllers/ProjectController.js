module.exports = {


    create: function(req, res, next) {

        var params = req.params.all();

        // Make sure the project is assigned to the logged in user
        params.user = req.session.user
        
        Project.create(params, function(err, project) {

            if (err) return next(err);

            res.status(201);

            res.json(project);

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
            
            Project.findOne({where:{title: title, user: req.session.user}}).populate('tasks').exec(function(err, project){
                if (project === undefined) return res.notFound();

                if (err) return next(err);

                // Convert Client ID to an actual Client name so it can be displayed with the project.
                Client.findOne({where:{id:project.client}}, function(err, client){

                    try {
                        project.clientName = client.name  
                    }
                    catch (err){
                        project.clientName = 'None'
                    }
                    
                })

                res.json(project)
            })

        
        } else {

            var options = {
                where: { user: req.session.user }
            };
            
            Project.find(options, function(err, project) {

                if (project === undefined) return res.notFound();

                if (err) return next(err);
                for (i=0;i<project.length;i++){
                    Client.findOne({where:{id:project[i].client}}, function(err, client){
                        try {
                            project[i].clientName = client.name
                        }
                        catch (err){
                            project[i].clientName = "None"
                        }
                        
                    })                    
                }
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
