/**
 * @author Jon Onstott
 * @since 10/5/2014
 */

require.config( {
   paths: {
      jquery: "http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min",
      underscore: "http://cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash.compat.min", /* A nice implementation of underscore */
      handlebars: "http://cdnjs.cloudflare.com/ajax/libs/handlebars.js/2.0.0/handlebars.min",
      backbone: "http://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min",
      marionette: "http://cdnjs.cloudflare.com/ajax/libs/backbone.marionette/2.2.2/backbone.marionette.min"
   }
} );

// Load the initial Backbone into the page, which is a Marionette CompositeView
require( [ "views/TodoCompositeView"], function ( TodoCompositeView ) {

   new TodoCompositeView().render();

} );