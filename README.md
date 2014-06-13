# Ractivate

This [Browserify](https://github.com/substack/node-browserify) transform will pre-parse any [Ractive.js](https://github.com/ractivejs/ractive) templates that you `require()` in your script files.

Note that if you use this, you probably won't need `Ractive.parse()` anymore, so you should change `require( 'ractive' )` to be `require( 'ractive/build/ractive.runtime' )` to cut down Ractive's size. You can do this automatically with a transform like [aliasify](https://github.com/benbria/aliasify).

## Example

```javascript
var Ractive = require( 'ractive' )

var ractive = new Ractive( {

    el: '#main',
     // This will resolve to the parsed template when you bundle up with Browserify.
     // No parsing client-side!
    template: require( './template.html' ),
    data: {
        foo: 'bar'
    }

} )
```

## Options

You can pass two options to configure the behavior of the transform:

```
{
    extensions: [ Array of strings ],
    excludeExtensions: [ Array of strings ]
}
```

#### extensions

An array of file extensions that the transform will be restricted to. If this option is not an array (e.g. `null` or `undefined`), the transform will operate on all of the files it receives.

By default, this option is set to `[ '.html' ]`.

#### excludeExtensions

An array of file extensions that the transform will ignore. Individual extensions set here will override those set in **extensions**.

By default, this option is not set.

## Usage

#### On the command line 

```shell
$ browserify -t ractivate main.js
```

#### With the Browserify API

```javascript
var ractivate = require( 'ractivate' )

var b = browserify( )
b.add( 'main.js' )
b.transform( ractivate )
b.bundle( ).pipe( process.stdout )
```

#### Passing options

```javascript
var ractivate = require( 'ractivate' )

var b = browserify( )
b.add( 'main.js' )
b.transform( { extensions: [ '.ract' ] }, ractivate )
b.bundle( ).pipe( process.stdout )
```

Note: Browserify's command line interface is very limited for passing array options. I recommend you use the API if you need to configure Ractivate.
