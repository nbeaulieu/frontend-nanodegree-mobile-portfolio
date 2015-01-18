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
          // Minimizes the pizza javascript.
          'views/js/main.min.js': ['views/js/main.js'],
        }
      }
    },
    // Remove unused CSS across multiple files, compressing the final output
    uncss: {
      dist: {
        files: {
          //'css/compiled.css': ['*.html']
          // Compiles the pizza html and removes unused CSS. This doesn't work on the style.css since the javascript
          // inserts some of the styles.  The utility doesn't detect this and changes to the html file would be ideal
          // to completely automate this.
          'views/css/compiled.uncss.css': ['views/*.html'] 
        }
      },
      options: {
        compress:true
      }
    },
    cssmin: {
      my_target: {
        files: {
          //'css/compiled.min.css': ['css/compiled.css']

          // Minimizes the pizza css.  Currently only used for bootstrap files.  See uncss above.
          'views/css/compiled.uncss.min.css': ['views/css/compiled.uncss.css'],
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
          // Minimizes the pizza html.
          'views/pizza.min.html': ['views/pizza.html'],
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-css');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-uncss');
  
  // Default task(s).
  //grunt.registerTask('default', ['uglify', 'cssmin', 'htmlmin']);
  //grunt.registerTask('default', ['uglify', 'uncss', 'cssmin']);
  //grunt.registerTask('default', ['uncss', 'cssmin']);
  //grunt.registerTask('default', ['uglify']);
  grunt.registerTask('default', ['htmlmin']);
};
