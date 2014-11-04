/**
 * @author Jon Onstott
 * @since 11/3/2014
 */
define( [
      'marionette',
      'handlebars',
      'text!views/templates/todoItemView.hbs'],
   function ( Marionette,
              Handlebars,
              templateText ) {

      /**
       * @class TodoItemView
       * @augments Marionette.ItemView
       */
      var TodoItemView = Marionette.ItemView.extend( {

         template: Handlebars.compile( templateText ),

         tagName: "tr"

      } );

      return TodoItemView;

   } );