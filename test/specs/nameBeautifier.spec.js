"use strict";

describe( "beautifyNameFilter", function () {
    var $nameBeautifier;

    beforeEach( module( "syonet.nameBeautifier" ) );
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

            str = "FOO dos baRBaZ"
            expect( $nameBeautifier.beautify( str ) ).to.equal( "Foo dos Barbaz" );
        });
    });
});