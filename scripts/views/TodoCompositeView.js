/**
 * TODO
 *
 * @author Jon Onstott
 * @since 11/1/2014
 */

define(['marionette'], function(Marionette){
   /**
    * @class TodoCompositeView
    * @augments Marionette.CompositeView
    */
   var TodoCompositeView = Marionette.CompositeView.extend( {
      template: "#leaf-branch-template"
   } );

   return TodoCompositeView;
});
