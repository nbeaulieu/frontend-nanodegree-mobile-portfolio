module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        mangle: false, // Do not mangle the file (don't change variables, etc.).
      },
      my_target: {
        files: {
          'views/js/main.min.js': ['views/js/main.js'],
        }
      }
    },
    cssmin: {
      my_target: {
        files: {
          'views/css/bootstrap-grid.min.css': ['views/css/bootstrap-grid.css'],
        }
      }
    },
    htmlmin: {
      dev: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'views/pizza.min.html': ['views/pizza.html'],
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-css');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  
  // Default task(s).
  grunt.registerTask('default', ['uglify', 'cssmin', 'htmlmin']);
};
