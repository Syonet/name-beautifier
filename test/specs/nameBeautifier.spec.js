"use strict";

describe( "beautifyNameFilter", function () {
    var $nameBeautifier;

    beforeEach( module( "syonet.namebeautifier" ) );
    beforeEach( inject(function ( _$nameBeautifier_ ) {
        $nameBeautifier = _$nameBeautifier_;
    }));

    describe( ".beautify()", function () {
        it( "should turn name into title-case", function () {
            var str = "FoO bar";
            expect( $nameBeautifier.beautify( str ) ).to.equal( "Foo Bar" );
        });

        it( "should not title-case skipped words", function () {
            var str = "FoO DE bar";
            expect( $nameBeautifier.beautify( str ) ).to.equal( "Foo de Bar" );

            str = "FOO dos baRBaZ";
            expect( $nameBeautifier.beautify( str ) ).to.equal( "Foo dos Barbaz" );

            str = "FooDoBar baz";
            expect( $nameBeautifier.beautify( str ) ).to.equal( "Foodobar Baz" );
        });

        it( "should trim the name", function () {
            var str = "   FoO bar ";
            expect( $nameBeautifier.beautify( str ) ).to.equal( "Foo Bar" );
        });

        it( "should turn uppercase words into uppercase", function () {
            var str = "foo s/a";
            expect( $nameBeautifier.beautify( str ) ).to.equal( "Foo S/A" );
        });
    });
});