/**
 * @since 11/1/2014
 */
define( ['backbone'], function ( Backbone ) {
   /**
    * @class TodoModel
    * @augments Backbone.Model
    */
   var TodoModel = Backbone.Model.extend( {

      // Mostly for documentation, list each field that this model has
      defaults: {
         /** @type ?number */
         priority: 3,

         /** @type string */
         description: "",

         /** @type boolean */
         isCompleted: false
      }

   } );

   return TodoModel;
} );
