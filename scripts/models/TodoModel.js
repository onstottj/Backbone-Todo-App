/**
 * This is a Backbone Model that represents a single todo item.
 *
 * @author Jon Onstott
 * @since 11/1/2014
 */
define( ['backbone'], function ( Backbone ) {
   /**
    * @class TodoModel
    * @augments Backbone.Model
    */
   var TodoModel = Backbone.Model.extend( {

      /**
       * The 'defaults' listed here set default values, but each field in the model should be listed here even
       * if it doesn't need a default value (for documentation).
       */
      defaults: {
         /**
          * By default, new tasks will have a priority of '2 - Medium'
          * @type ?number
          */
         priority: 2,

         /** @type string */
         description: "",

         /** @type boolean */
         isCompleted: false
      }

   } );

   return TodoModel;
} );
