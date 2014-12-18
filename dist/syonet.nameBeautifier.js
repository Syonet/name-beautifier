!function () {
    "use strict";

    angular.module( "syonet.nameBeautifier", [] ).provider( "$nameBeautifier", function () {
        var provider = this;

        provider.skippedWords = [
            "de",
            /d(o|a)s?/,
            "ltda"
        ];

        provider.$get = function () {
            var api = {};
            api.beautify = function ( input ) {
                if ( typeof input !== "string" ) {
                    return input;
                }

                input = input.split( /\s+/ ).map(function ( part ) {
                    part = part.toLowerCase();

                    if ( !provider.skippedWords.some( testSkippedWord, part ) ) {
                        part = part[ 0 ].toUpperCase() + part.substr( 1 );
                    }

                    return part;
                }).join( " " );

                return input;
            };

            return api;
        };

        return provider;

        // -----------------------------------------------------------------------------------------

        function testSkippedWord ( word ) {
            var str =  this.toString();
            if ( typeof word === "string" ) {
                return str === word;
            }

            return word.test( str );
        }
    }).filter( "beautifyName", function ( $nameBeautifier ) {
        return function ( input ) {
            return $nameBeautifier.beautify( input );
        };
    });
}();