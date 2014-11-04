/**
 * RequireJS configuration.  Once that is set up, our TodoCompositeView is rendered in the page.
 *
 * @author Jon Onstott
 * @since 10/5/2014
 */

require.config( {
   paths: {
      jquery: "//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min",
      underscore: "//cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash.compat.min", /* A nice implementation of underscore */
      handlebars: "//cdnjs.cloudflare.com/ajax/libs/handlebars.js/2.0.0/handlebars.min",
      backbone: "//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min",
      marionette: "//cdnjs.cloudflare.com/ajax/libs/backbone.marionette/2.2.2/backbone.marionette.min",
      stickit: "//cdnjs.cloudflare.com/ajax/libs/backbone.stickit/0.8.0/backbone.stickit.min"
   }
} );

// Load the initial Backbone into the page, which is a Marionette CompositeView
require( [ "views/TodoCompositeView" ],
   function ( TodoCompositeView ) {

      new TodoCompositeView().render();

   } );
