"use strict";

describe( "beautifyNameFilter", function () {
    var $nameBeautifier;

    beforeEach( module( "syonet.nameBeautifier" ) );
    beforeEach( inject(function ( _$nameBeautifier_, $filter ) {
        $nameBeautifier = _$nameBeautifier_;
        this.filter = $filter( "beautifyName" );
    }));

    it( "should use the $nameBeautifier service", function () {
        var str = "FoO bar";
        var spy = sinon.spy( $nameBeautifier, "beautify" );

        this.filter( str );
        expect( spy ).to.have.been.calledWith( str );
    });
});