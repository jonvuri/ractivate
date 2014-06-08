'use strict'

var compilify = require( 'compilify' )
var Ractive = require( 'ractive' )

var defaultExtensions = [ '.html' ]

function compile( file ) {

	return Ractive.parse( file )

}

module.exports = compilify( compile, { extensions: defaultExtensions } )
