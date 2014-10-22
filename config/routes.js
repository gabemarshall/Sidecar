/**
 * Routes
 *
 * Sails uses a number of different strategies to route requests.
 * Here they are top-to-bottom, in order of precedence.
 *
 * For more information on routes, check out:
 * http://sailsjs.org/#documentation
 */



/**
 * (1) Core middleware
 *
 * Middleware included with `app.use` is run first, before the router
 */


/**
 * (2) Static routes
 *
 * This object routes static URLs to handler functions--
 * In most cases, these functions are actions inside of your controllers.
 * For convenience, you can also connect routes directly to views or external URLs.
 *
 */

module.exports.routes = {

  // By default, your root route (aka home page) points to a view
  // located at `views/home/index.ejs`
  //
  // (This would also work if you had a file at: `/views/home.ejs`)
  '/': {
    view: 'public/index'
  },

  '/about': {
  	view: 'public/about'
  },

  '/features': {
  	view: 'public/features'
  },

  '/pricing': {
  	view: 'public/pricing'
  },

  '/login': {
  	view: 'public/login'
  },

  '/register': {
  	view: 'public/register'
  },

  '/app': {
    controller: 'route',
    action: 'index'
  },

// ############ Custom Routes for Projects ############

// ##### Create #####
  'post /projects/create': 'ProjectController.create',

// ##### Read #####
  'get /projects/:title?': 'ProjectController.find',

// ##### Update #####
  'post /projects/update/:id?': 'ProjectController.update',
  'put /projects/:id?': 'ProjectController.update',

// ##### Delete #####
  
  'post /projects/delete/:id?': 'ProjectController.delete',
  'delete /projects/:id?': 'ProjectController.delete',



// ############ Custom Routes for Tasks ############

// ##### Create #####
  'post /tasks/create': 'TaskController.create',

// ##### Read #####
  'get /tasks/:id?': 'TaskController.find',

// ##### Update #####
  'post /tasks/update/:id?': 'TaskController.update',
  'put /tasks/:id?': 'TaskController.update',

// ##### Delete #####
  
  'post /tasks/delete/:id?': 'TaskController.delete',
  'delete /tasks/:id?': 'TaskController.delete',


// ############ Custom Routes for Clients ############

// ##### Create #####
  'post /clients/create': 'ClientController.create',

// ##### Read #####
  'get /clients/:name?': 'ClientController.find',
  'get /clientsById/:id?': 'ClientController.find',

// ##### Update #####
  'post /clients/update/:id?': 'ClientController.update',
  'put /clients/:id?': 'ClientController.update',

// ##### Delete #####
  
  'post /clients/delete/:id?': 'ClientController.delete',
  'delete /clients/:id?': 'ClientController.delete',

// ##### Activity #####

  'get /clients/activity/:id?': 'ClientController.activity',

  // ############ Custom Routes for Documents ############

// ##### Create #####
  'post /documents/create': 'DocumentController.create',

// ##### Read #####
  'get /documents/:name?': 'DocumentController.find',
  'get /documentsById/:id?': 'DocumentController.find',

// ##### Update #####
  'post /documents/update/:id?': 'DocumentController.update',
  'put /documents/:id?': 'DocumentController.update',

// ##### Delete #####
  
  'post /documents/delete/:id?': 'DocumentController.delete',
  'delete /documents/:id?': 'DocumentController.delete',


  // ############ Custom Routes for Document Templates ############

// ##### Create #####
  'post /documentTemplates/create': 'DocumentTemplateController.create',

// ##### Read #####
  'get /documentTemplates/:name?': 'DocumentTemplateController.find',
  'get /documentTemplatesById/:id?': 'DocumentTemplateController.find',

// ##### Update #####
  'post /documentTemplates/update/:id?': 'DocumentTemplateController.update',
  'put /documentTemplates/:id?': 'DocumentTemplateController.update',

// ##### Delete #####
  
  'post /documentTemplates/delete/:id?': 'DocumentTemplateController.delete',
  'delete /documentTemplates/:id?': 'DocumentTemplateController.delete',

// ##### Activity #####

  'get /documentTemplates/activity/:id?': 'DocumentTemplateController.activity',




// ############ Custom Routes for Teams ############

// ##### Create #####
  'post /teams/create': 'TeamController.create',

// ##### Read #####
  'get /teams/:id?': 'TeamController.find',

// ##### Update #####
  'post /teams/update/:id?': 'TeamController.update',
  'put /teams/:id?': 'TeamController.update',

// ##### Delete #####
  
  'post /teams/delete/:id?': 'TeamController.delete',
  'delete /teams/:id?': 'TeamController.delete',


// ############ Custom Routes for Users ############

// ##### Create #####
  'post /users/create': 'UserController.create',
  'get /users/create': 'UserController.create',

// ##### Read #####
  'get /users/:id?': 'UserController.find',

// ##### Update #####
  'post /users/update/:id?': 'UserController.update',
  'put /users/:id?': 'UserController.update',

// ##### Delete #####
  
  'post /users/delete/:id?': 'UserController.delete',
  'delete /users/:id?': 'UserController.delete',

// ##### Login #####
  'post /users/login/:email?': 'UserController.login',


// ############ Custom Routes for Notes ############

// ##### Create #####
  'post /notes/create': 'NoteController.create',

// ##### Read #####
  'get /notes/:id?': 'NoteController.find',

// ##### Update #####
  'post /notes/update/:id?': 'NoteController.update',
  'put /notes/:id?': 'NoteController.update',

// ##### Delete #####
  
  'post /notes/delete/:id?': 'NoteController.delete',
  'delete /notes/:id?': 'NoteController.delete',
  /*
  // But what if you want your home page to display
  // a signup form located at `views/user/signup.ejs`?
  '/': {
    view: 'user/signup'
  }


  // Let's say you're building an email client, like Gmail
  // You might want your home route to serve an interface using custom logic.
  // In this scenario, you have a custom controller `MessageController`
  // with an `inbox` action.
  '/': 'MessageController.inbox'


  // Alternatively, you can use the more verbose syntax:
  '/': {
    controller: 'MessageController',
    action: 'inbox'
  }


  // If you decided to call your action `index` instead of `inbox`,
  // since the `index` action is the default, you can shortcut even further to:
  '/': 'MessageController'


  // Up until now, we haven't specified a specific HTTP method/verb
  // The routes above will apply to ALL verbs!
  // If you want to set up a route only for one in particular
  // (GET, POST, PUT, DELETE, etc.), just specify the verb before the path.
  // For example, if you have a `UserController` with a `signup` action,
  // and somewhere else, you're serving a signup form looks like:
  //
  //		<form action="/signup">
  //			<input name="username" type="text"/>
  //			<input name="password" type="password"/>
  //			<input type="submit"/>
  //		</form>

  // You would want to define the following route to handle your form:
  'post /signup': 'UserController.signup'


  // What about the ever-popular "vanity URLs" aka URL slugs?
  // (you might remember doing this with `mod_rewrite` in Apache)
  //
  // This is where you want to set up root-relative dynamic routes like:
  // http://yourwebsite.com/twinkletoez
  //
  // NOTE:
  // You'll still want to allow requests through to the static assets,
  // so we need to set up this route to ignore URLs that have a trailing ".":
  // (e.g. your javascript, CSS, and image files)
  'get /*(^.*)': 'UserController.profile'

  */
};



/**
 * (3) Action blueprints
 * These routes can be disabled by setting (in `config/controllers.js`):
 * `module.exports.controllers.blueprints.actions = false`
 *
 * All of your controllers ' actions are automatically bound to a route.  For example:
 *   + If you have a controller, `FooController`:
 *     + its action `bar` is accessible at `/foo/bar`
 *     + its action `index` is accessible at `/foo/index`, and also `/foo`
 */


/**
 * (4) Shortcut CRUD blueprints
 *
 * These routes can be disabled by setting (in config/controllers.js)
 *			`module.exports.controllers.blueprints.shortcuts = false`
 *
 * If you have a model, `Foo`, and a controller, `FooController`,
 * you can access CRUD operations for that model at:
 *		/foo/find/:id?	->	search lampshades using specified criteria or with id=:id
 *
 *		/foo/create		->	create a lampshade using specified values
 *
 *		/foo/update/:id	->	update the lampshade with id=:id
 *
 *		/foo/destroy/:id	->	delete lampshade with id=:id
 *
 */

/**
 * (5) REST blueprints
 *
 * These routes can be disabled by setting (in config/controllers.js)
 *		`module.exports.controllers.blueprints.rest = false`
 *
 * If you have a model, `Foo`, and a controller, `FooController`,
 * you can access CRUD operations for that model at:
 *
 *		get /foo/:id?	->	search lampshades using specified criteria or with id=:id
 *
 *		post /foo		-> create a lampshade using specified values
 *
 *		put /foo/:id	->	update the lampshade with id=:id
 *
 *		delete /foo/:id	->	delete lampshade with id=:id
 *
 */

/**
 * (6) Static assets
 *
 * Flat files in your `assets` directory- (these are sometimes referred to as 'public')
 * If you have an image file at `/assets/images/foo.jpg`, it will be made available
 * automatically via the route:  `/images/foo.jpg`
 *
 */



/**
 * (7) 404 (not found) handler
 *
 * Finally, if nothing else matched, the default 404 handler is triggered.
 * See `config/404.js` to adjust your app's 404 logic.
 */

