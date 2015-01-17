module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        mangle: false, // Do not mangle the file (don't change variables, etc.).
        //banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      my_target: {
        files: {
          'views/js/main.min.js': ['views/js/main.js']
        }      //build: {
      //  src: 'src/<%= pkg.name %>.js',
      //  dest: 'build/<%= pkg.name %>.min.js'
      //}
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};
