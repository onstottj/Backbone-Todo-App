/**
 * @author Jon Onstott
 * @since 11/1/2014
 */

define( [
      'backbone',
      'marionette',
      'handlebars',
      'stickit',
      '../models/TodoModel',
      'views/TodoItemView',
      'text!views/templates/todoCompositeView.hbs'],
   function ( Backbone,
              Marionette,
              Handlebars,
              Stickit,
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

         events: {
            "click #addLink": "addItem",

            "click #sortByName": function () {
               this._sortByColumn( "description" );
            },

            "click #sortByPriority": function () {
               this._sortByColumn( "priority" );
            }
         },

         initialize: function () {
            this.collection = new Backbone.Collection();

            // Add a single to-do item to start with
            this.addItem();
         },

         /** Creates a new, blank to-do item */
         addItem: function () {
            this.collection.add( new TodoModel() );
         },

         _sortByColumn: function ( column ) {
            this.collection.comparator = column;
            this.collection.sort();
            // Cause the list of to-do items to be re-rendered by the Marionette CompositeView
            this.collection.trigger( "reset" );
         }

      } );

      return TodoCompositeView;
   } );
