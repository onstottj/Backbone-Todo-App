/**
 * @author Jon Onstott
 * @since 11/3/2014
 */
define( [
      'marionette',
      'handlebars',
      'stickit',
      'text!views/templates/todoItemView.hbs'],
   function ( Marionette,
              Handlebars,
              Stickit,
              templateText ) {

      /**
       * @class TodoItemView
       * @augments Marionette.ItemView
       */
      var TodoItemView = Marionette.ItemView.extend( {

         template: Handlebars.compile( templateText ),

         tagName: "tr",

         bindings: {
            "#isCompleted": "isCompleted",
            "#description": "description",
            "#prioritySelector": "priority"
         },

         onRender: function () {
            this.stickit();
         }

      } );

      return TodoItemView;

   } );