module.exports = function (grunt) {

    // Get path to core grunt dependencies from Sails
    var depsPath = grunt.option('gdsrc') || 'node_modules/sails/node_modules';
    grunt.loadTasks(depsPath + '/grunt-contrib-watch/tasks');
    grunt.loadNpmTasks('grunt-contrib-compass');

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        compass: {
            main: {
                options: {
                    sassDir: "assets/sass",
                    cssDir: "assets/stylesheets",
                    outputStyle: "compressed"
                }
            }
        },

        watch: {
            css: {
                files: [
                    'assets/sass/**/*',
                ],
                tasks: ['compass:main'],
                options: { nospawn: true }
            }
        }
    });

    // Register Tasks
    grunt.registerTask('default', [ 'compass' ]);
};
