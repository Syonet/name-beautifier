var gulp = require( "gulp" );
var concat = require( "gulp-concat" );
var ngAnnotate = require( "gulp-ng-annotate" );
var karma = require( "karma" );

gulp.task( "test", function ( cb ) {
    karma.server.start({
        configFile: __dirname + "/test/karma.conf.js",
        singleRun: true
    }, cb );
});

gulp.task( "package", function () {
    return gulp.src( "src/**/*.js" )
               .pipe( ngAnnotate() )
               .pipe( concat( "syonet.namebeautifier.js" ) )
               .pipe( gulp.dest( "dist/" ) );
});

gulp.task( "watch", function () {
    gulp.watch( "src/**/*.js", [ "package", "test" ] );
});

gulp.task( "dev", [ "package", "test", "watch" ] );
gulp.task( "default", [ "package", "test" ] );
