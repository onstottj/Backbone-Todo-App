/**
 * @author Jon Onstott
 * @since 11/1/2014
 */

define( [
      'backbone',
      'marionette',
      'handlebars',
      'stickit',
      '../models/TodoCompositeViewModel',
      '../models/SortModeModel',
      '../models/TodoModel',
      'views/TodoItemView',
      'text!views/templates/todoCompositeView.hbs'],
   function ( Backbone,
              Marionette,
              Handlebars,
              Stickit,
              TodoCompositeViewModel,
              SortModeModel,
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
            "click #addLink": "_addItem",

            "click #sortByName": function () {
               this._sortByColumn( "description" );
            },

            "click #sortByPriority": function () {
               this._sortByColumn( "priority" );
            }
         },

         initialize: function () {
            this.model = new TodoCompositeViewModel();

            this.collection = new Backbone.Collection();

            // Add a single to-do item to start with
            this._addItem();
         },

         /**
          * Creates a new, blank to-do item.
          *
          * @private
          */
         _addItem: function () {
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
