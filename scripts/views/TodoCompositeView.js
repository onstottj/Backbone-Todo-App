/**
 * TODO
 *
 * @author Jon Onstott
 * @since 11/1/2014
 */

define( ['marionette',
   'handlebars',
   'text!views/templates/todoCompositeView.hbs'], function ( Marionette,
                                                             Handlebars,
                                                             templateText ) {
   /**
    * @class TodoCompositeView
    * @augments Marionette.CompositeView
    */
   var TodoCompositeView = Marionette.CompositeView.extend( {
      template: Handlebars.compile( templateText ),

      el: "#container"
   } );

   return TodoCompositeView;
} );
