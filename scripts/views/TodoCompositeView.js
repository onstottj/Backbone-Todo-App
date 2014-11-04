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

         bindings: {
            "select#sortOrderSelector": {
               observe: "sortOrder",
               selectOptions: {
                  collection: function () {
                     return [
                        {label: 'Name', value: 'description'},
                        {label: 'Priority', value: 'priority'}
                     ];
                  }
               }
            }
         },

         events: {
            "click #addLink": "_addItem"
         },

         modelEvents: {
            "change:sortOrder": "_updateSortOrder"
         },

         initialize: function () {
            this.model = new TodoCompositeViewModel();

            this.collection = new Backbone.Collection( {
               comparator: 'name'
            } );

            // Add a single to-do item to start with
            this._addItem();
         },

         onRender: function () {
            this.stickit();
         },

         /**
          * Creates a new, blank to-do item.
          *
          * @private
          */
         _addItem: function () {
            this.collection.add( new TodoModel() );
         },

         /**
          * @private
          */
         _updateSortOrder: function () {
            this.collection.comparator = this.model.get( "sortOrder" );
         }

      } );

      return TodoCompositeView;
   } );
