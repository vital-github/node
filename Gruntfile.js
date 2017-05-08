module.exports = function(grunt) {
    //загрузка плагинов
    [
        'grunt-cafe-mocha',
        'grunt-contrib-jshint',
        'grunt-exec',
    ].forEach(function(task) {
        grunt.loadNpmTasks(task);
    });

    //настройка плагинов
    grunt.initConfig({
        
        cafemocha: { all: {src: 'qa/tests-*.js', option: {ui: 'tdd'}, } },

        jshint: {
            app: ['index.js', 'public/js/**/*.js', 'lib/**/*.js'],
            qa: ['Gruntfile.js', 'public/qa/**/*.js', 'qa/**/*.js']
        },

        exec: {linkchecker: {cmd: 'linkchecker http://localhost:3000'} }

    });

    grunt.registerTask('default', ['cafemocha', 'jshint', 'exec']);

};