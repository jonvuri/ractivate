/* global document */
/* eslint no-console: 0 */

var Ractive = require( 'ractive' )

var result = require( '../fixtures/template.html' )

var main = document.createElement( 'div' )

main.id = 'main'

document.body.appendChild( main )

var ractive = new Ractive( {
	el: '#main',
	template: result,
	data: {
		x: 'orange'
	}
} )

console.log( document.getElementById( 'main' ).innerHTML )
