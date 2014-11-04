/**
 * @author Jon Onstott
 * @since 11/4/2014
 */

// Load and run Jasmine tests
define( [
      "models/TodoModel",
      "views/TodoCompositeView"],
   function ( TodoModel,
              TodoCompositeView ) {

      describe( "A TodoModel", function () {
         it( "has the correct default values", function () {
            var model = new TodoModel();

            expect( model.get( "priority" ) ).toBe( 2 );

            expect( model.get( "description" ) ).toBe( "" );

            expect( model.get( "isCompleted" ) ).toBe( false );
         } );
      } );

      describe( "A TodoCompositeView", function () {
         var view = new TodoCompositeView();

         it( "starts off with a single, blank task", function () {
            expect( view.collection.length, 1 );
         } );

         it( "can have more tasks added", function () {
            view.addItem.apply( view );
            view.addItem.apply( view );
            expect( view.collection.length, 3 );
         } );
      } );

   } );
