!function () {
    "use strict";

    angular.module( "syonet.namebeautifier", [] ).provider( "$nameBeautifier", function () {
        var provider = this;

        provider.skippedWords = [
            "de",
            /^d(o|a)s?$/
        ];

        provider.uppercaseWords = [
            /^s(\/|\.)?a\.?$/
        ];

        provider.$get = function () {
            var api = {};
            api.beautify = function ( input ) {
                if ( typeof input !== "string" ) {
                    return input;
                }

                input = input.trim().split( /\s+/ ).map(function ( part ) {
                    if ( !part ) {
                        return part;
                    }

                    part = part.toLowerCase();

                    if ( provider.uppercaseWords.some( testWord, part ) ) {
                        part = part.toUpperCase();
                    } else if ( !provider.skippedWords.some( testWord, part ) ) {
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

        function testWord ( word ) {
            var str = this.toString();
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