/**
 * @author Jon Onstott
 * @since 11/1/2014
 */

define( [
      'backbone',
      'marionette',
      'handlebars',
      '../models/TodoModel',
      'TodoItemView',
      'text!views/templates/todoCompositeView.hbs'],
   function ( Backbone,
              Marionette,
              Handlebars,
              TodoModel,
              TodoItemView,
              templateText ) {
      /**
       * @class TodoCompositeView
       * @augments Marionette.CompositeView
       */
      var TodoCompositeView = Marionette.CompositeView.extend( {

         template: Handlebars.compile( templateText ),

         el: "#container",

         childView: TodoItemView,

         childViewContainer: "table",

         initialize: function () {
            this.collection = new Backbone.Collection();

            // Add a single to-do item to start with
            this.collection.add( new TodoModel() );
         }

      } );

      return TodoCompositeView;
   } );
