module.exports = function ( config ) {
    "use strict";

    config.set({
        basePath: "..",
        frameworks: [ "mocha", "chai", "sinon-chai" ],
        files: [
            // Deps
            "libs/angular/angular.js",
            "libs/angular-mocks/angular-mocks.js",

            // Source
            "src/**/*.js",

            // Specs
            "test/specs/**/*.js"
        ],
        browsers: [ "PhantomJS" ],
        reporters: [ "dots" ]
    });
};