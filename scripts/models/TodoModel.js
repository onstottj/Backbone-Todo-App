/**
 * TODO
 *
 * @author Jon Onstott
 * @since 11/1/2014
 */
define(["backbone"],function(Backbone){
   /**
    * @class TodoModel
    * @augments Backbone.Model
    */
   var TodoModel = Backbone.Model.extend( {

      // Mostly for documentation, list each field that this model has
      defaults: {
         /**
          * @type ?number
          */
         priority: null,

         /**
          * @type string
          */
         description: ""
      }

   } );

   return TodoModel;
});
