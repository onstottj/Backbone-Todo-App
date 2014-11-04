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

         modelEvents: {
            "change isCompleted": "render"
         },

         bindings: {
            "#isCompleted": "isCompleted",
            "#description": "description",
            "#prioritySelector": {
               observe: "priority",
               selectOptions: {
                  collection: function () {
                     return [
                        {label: '1 - High', value: 1},
                        {label: '2 - Medium', value: 2},
                        {label: '3 - Low', value: 3}
                     ];
                  }
               }
            }
         },

         onRender: function () {
            this.stickit();
         }

      } );

      return TodoItemView;

   } );