/**
 * This is responsible for displaying a single todo item, and has a TodoModel as it's model.
 *
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
            /* Causes "Completed!" to show in the UI (for some visual feedback) */
            "change:isCompleted": "render"
         },

         /**
          * Add two-way data binding from the fields on the UI to the fields in the model.
          *
          * This uses Backbone.Stickit.
          *
          * It's nice to be able to use a declarative form of programming where possible, instead of having to
          * update the UI and model by hand.
          */
         bindings: {
            "#isCompleted": "isCompleted",
            "#description": "description",
            "#prioritySelector": {
               observe: "priority",
               selectOptions: {
                  collection: function () {
                     // The list of select items is configured here
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
         },

         onClose: function () {
            this.unstickit();
         }

      } );

      return TodoItemView;

   } );