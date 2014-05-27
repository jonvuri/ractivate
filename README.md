# ractify

This [Browserify](https://github.com/substack/node-browserify) transform will pre-parse any [Ractive.js](https://github.com/ractivejs/ractive) templates that you `require()` in your script files.

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

```javascript
{
    extensions: [ Array of strings ],
    excludeExtensions: [ Array of strings ]
}
```

#### extensions

An array of file extensions that the transform will operate on. If this option is not an array (e.g. `null` or `undefined`), the transform will operate on all of the files it receives. Use this if you want to restrict the set of files prior to this transform.

By default, this option is set to `[ '.html' ]`.

#### excludeExtensions

An array of file extensions that the transform will ignore. Individual extensions set here will override those set in **extensions**.

By default, this option is not set.

## Usage

#### On the command line 

```shell
$ browserify -t ractify main.js
```

#### With the Browserify API

```javascript
var ractify = require( 'ractify' )

var b = browserify( )
b.add( 'main.js' )
b.transform( ractify )
b.bundle( ).pipe( process.stdout )
```

#### Passing options

```shell
$ browserify -t [ ractify --extensions "[ '.ract' ]" ] main.js
```

```javascript
var foobarify = require( 'foobarify' )

var b = browserify( )
b.add( 'main.js' )
b.transform( { extensions: [ 'baz' ] }, foobarify )
b.bundle( ).pipe( process.stdout )
```
