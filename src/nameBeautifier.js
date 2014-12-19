!function () {
    "use strict";

    angular.module( "syonet.namebeautifier", [] ).provider( "$nameBeautifier", function () {
        var provider = this;

        /**
         * Words that should be skipped when formatting
         * @type    {String[]}
         */
        provider.skippedWords = [
            "de",
            /^d(o|a)s?$/
        ];

        /**
         * Words that should be uppercased when formatting
         * @type    {String[]}
         */
        provider.uppercaseWords = [
            /^s(\/|\.)?a\.?$/
        ];

        provider.$get = function () {
            var api = {};
            api.beautify = function ( input ) {
                // Quick fail for non string inputs
                if ( typeof input !== "string" ) {
                    return input;
                }

                input = input.trim().split( /\s+/ ).map(function ( part ) {
                    // If this part is empty, we'll skip it, it won't make a difference if
                    // we format it or not
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

        /**
         * Test a word expression against the function context.
         * This function is proper for usage as an array method callback (like .some()/.all())
         *
         * @param   {String|RegExp} word
         * @returns {Boolean}
         */
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