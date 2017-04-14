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
    less:{
      dist:{
        files:{
          'css/style.min.css':['less/style.less','less/mixins.less']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('default',[
    'jshint',
    'concat',
    'less'
  ]);
};
