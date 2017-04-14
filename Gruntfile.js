module.exports = function(grunt){
  grunt.initConfig({
    jshint:{
      all:['js/scripts.js']
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
    }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default',[
    'jshint',
    'csslint',
    'cssmin'
  ]);
};
