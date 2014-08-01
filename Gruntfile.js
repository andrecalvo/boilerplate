module.exports = function(grunt) {
 
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
 
  grunt.initConfig({
 
    // Reference package.json
    pkg: grunt.file.readJSON('package.json'),
 
    // SASS
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'sass',
          src: ['*.scss'],
          dest: 'css-ugly',          
          ext: '.css'
        }]
      }
    },
 
    // Auto Prefixer
    autoprefixer: {
      dist: {
        options: {
          browsers: ['last 1 version', '> 1%', 'ie 8']
        },
        files: {
          'css/styles.css': ['css-ugly/styles.css'],          
          'css/styles-ie.css': ['css-ugly/styles-ie.css'],
        }
      }
    },
 
    // Minify the prefixed CSS
    cssmin: {
      combine: {
        files: {
          'css/styles.css': ['css-ugly/styles.css'],
          'css/styles-ie.css': ['css-ugly/styles-ie.css']
        },
      },
    },
 
    // Minify JS
    uglify: {
      my_target: {
        files: {
          'js/main.min.js': ['js/main.js']
        },
      },
    },
 
    // Watch
    watch: {
      sass: {
        files: ['*/*.scss', '*/*/*.scss'],
        tasks: ['sass'],
      },
 
      csspostprocess: {
        files: 'css-ugly/styles.css',
        tasks: ['autoprefixer', 'cssmin'],
      },
 
      jsminify: {
        files: 'js/*.js',
        tasks: ['uglify'],
      },
 
      livereload: {
        options: {livereload: true},
        files: ['css/*.css', 'js/*.js', '*.html', 'img/*'],
      },
    },
 
  });
 
  grunt.registerTask('default', ['watch']);
};