/// <binding AfterBuild='bundle' />
var gulp = require('gulp');


gulp.task('bundle', function() {
    var SystemBuilder = require('systemjs-builder');
    var builder = new SystemBuilder();
    builder.loadConfig('./system.config.js')
        .then(function(){
            var outputFile = './wwwroot/bundle.js';
            return builder.buildStatic('app', outputFile, {
                minify: true,
                mangle: true,
                rollup: true
            });
        })
        .then(function(){
            console.log('bundle built successfully!');
        });
});

