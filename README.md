# README
-----
This is the jCole BornSinner Gallery

## stack
-----

Backbone/Underscore/jQuery
Templates: Jade & Handlebars
css: Less
JS: Coffeescript

* Leveraging grunt for concat/min
* to get up and running type the following commands from terminal

## Getting Started
-----
Ensure you have installed [Node](nodejs.org) & [NPM](https://npmjs.org/), otherwise you won't be able to compile anything. Ensure you have [grunt](https://github.com/gruntjs/grunt/) installed as well. It makes your life much easier with the precompilers. Also, as of this writing, we depend on the 0.4.0 version of Grunt, so some grunt plugins won't work because they changed a ton of things. 

_On first install:_

  `cd js/build && (sudo) npm install`
 
_You may need to install grunt@devel if you get an error "Unable to expand file"_
  
  `npm install grunt@devel`

Once you're ready done with the initial setup, you will be able to do the following:
  
  `grunt watch`
  
That's it! It will compile the Coffeescript, Handlebars, Less, and generated JS from Coffee, plus it concat's, uglifies, and gzips!

When we're ready for release, we do two things:

  `docco js/coffee/*.coffee`
  
  `cd js/build && grunt deploy`

*Javascript -> [coffeescript](js/coffeescript)
*Templates -> [jade](templates/jade) (compiles to /static (handlebars))
*CSS -> [less](css/less)
*Annotated Documentation -> [Docs](docs/)
*Fixture Data -> [fixtures](js/fixtures)

###TODO:
-----
* Add Unit Testing