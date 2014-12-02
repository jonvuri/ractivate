'use strict'

var compilify = require( 'compilify' )
var Ractive = require( 'ractive' )

var defaultExtensions = [ '.html', '.ractive', '.ract' ]

function compile( file ) {

	return Ractive.parse( file )

}

module.exports = compilify( compile, { extensions: defaultExtensions } )
