'use strict'

var compilify = require( 'compilify' )

try {
	var Ractive = require( 'ractive' )
} catch ( e ) {
	if ( e.code === 'MODULE_NOT_FOUND' ) {
		throw new Error( 'Module "ractive" required by "ractivate" is not found. Please run: npm install ractive --save' )
	}

	throw e;
}

var defaultExtensions = [ '.html' ]

function compile( file ) {

	return Ractive.parse( file )

}

module.exports = compilify( compile, { extensions: defaultExtensions } )
