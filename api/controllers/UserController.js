module.exports = {


    create: function(req, res, next) {

        var params = req.params.all();

        User.create(params, function(err, user) {

            if (err) return next(err);

            res.status(201);

            res.json(user);

        });

    },

    find: function(req, res, next) {
        
        var id = req.param('id');

        var idShortCut = isShortcut(id);

        if (idShortCut === true) {
            return next();
        }

        if (id) {

            User.findOne(id, function(err, user) {

                if (user === undefined) return res.notFound();

                if (err) return next(err);

                res.json(user);

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

            User.find(options, function(err, user) {

                if (user === undefined) return res.notFound();

                if (err) return next(err);

                res.json(user);

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

        User.update(id, criteria, function(err, user) {

            if (user.length === 0) return res.notFound();

            if (err) return next(err);

            res.json(user);

        });
    },

    delete: function(req, res, next) {

        var id = req.param('id');

        if (!id) {
            return res.badRequest('No id found.');
        }

        User.findOne(id).exec(function(err, result) {
            if (err) return res.serverError(err);

            if (!result) return res.notFound();

            User.destroy(id, function(err) {

                if (err) return next(err);

                return res.json(result);
            });

        });
    },

    login: function (req, res) {
        var bcrypt = require('bcrypt');

        User.findOneByEmail(req.body.email).exec(function (err, user) {
          if (err) res.json({ error: 'DB error' }, 500);

          if (user) {
            bcrypt.compare(req.body.password, user.password, function (err, match) {
              if (err) res.json({ error: 'Something is wrong..' }, 500);

              if (match) {
                // password match
                req.session.user = user.id;
                req.session.team = user.team;
                
                res.json(user);
              } else {
                // invalid password
                if (req.session.user) req.session.user = null;
                res.json({ error: 'Invalid username or password' }, 400);
              }
            });
          } else {
            res.json({ error: 'User not found' }, 404);
          }
        });
      },

    /**
     * Overrides for the settings in `config/controllers.js`
     * (specific to UserController)
     */
    _config: {}


};
