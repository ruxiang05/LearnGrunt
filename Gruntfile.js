module.exports = function(grunt){
  grunt.initConfig({
    jshint:{
      all:['js/scripts.js']
    },
    concat:{
      dist:{
        files:{
          'js/all.js' : ['js/scripts.js','js/plugins.js']
        }
      }
    },
    csslint:{
      all:['css/reset.css','css/styles.css']
    },
    cssmin:{
      dist:{
        files:{
          'css/styles.min.css':['css/reset.css','css/styles.css']
        }
      }
    },
    autoprefixer:{
      all:{
        src: 'css/styles.min.css'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default',[
    'jshint',
    'concat',
    'csslint',
    'cssmin',
    'autoprefixer'
  ]);
};
