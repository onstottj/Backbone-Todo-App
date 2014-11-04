/**
 * @author Jon Onstott
 * @since 11/4/2014
 */
define( ['backbone'], function ( Backbone ) {
   /**
    * @class SortModeModel
    * @augments Backbone.Model
    */
   var SortModeModel = Backbone.Model.extend( {

      // Mostly for documentation, list each field that this model has
      defaults: {
         /** @type string */
         title: '',

         /**
          * @type string
          */
         correspondingFieldInModel: null
      }

   } );

   return SortModeModel;
} );
