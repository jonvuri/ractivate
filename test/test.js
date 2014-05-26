
/* global describe it */

'use strict'

var path = require( 'path' )

var expect = require( 'chai' ).expect
var through = require( 'through' )
var browserify = require( 'browserify' )
var browser = require( 'browser-run' )
var Ractive = require( 'ractive' )

var ractify = require( '../index' )


describe( 'Ractify', function ( ) {

	it( 'should compile input files', function ( done ) {

		this.timeout( 5000 )

		var b = browserify( )
		var br = browser( { browser: 'chrome' } )
		b.add( path.join( __dirname, 'fixtures/script.js' ) )
		b.transform( ractify )
		b.bundle( ).pipe( br ).pipe( through(

			function write( data ) {
				expect( data ).to.contain( '<div>orange</div>' )
				br.stop( )
				done( )
			}

		) )

	} )

} )
