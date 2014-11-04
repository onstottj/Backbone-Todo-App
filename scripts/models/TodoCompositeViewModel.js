/**
 * @author Jon Onstott
 * @since 11/4/2014
 */
define( ['backbone'], function ( Backbone ) {
   /**
    * @class TodoCompositeViewModel
    * @augments Backbone.Model
    */
   var TodoCompositeViewModel = Backbone.Model.extend( {

      // Mostly for documentation, list each field that this model has
      defaults: {
         /** @type string */
         sortOrder: ''
      }

   } );

   return TodoCompositeViewModel;
} );
