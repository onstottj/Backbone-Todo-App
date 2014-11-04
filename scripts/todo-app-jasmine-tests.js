/**
 * @author Jon Onstott
 * @since 11/4/2014
 */

// Load and run Jasmine tests
define( ["models/TodoModel"],
   function ( TodoModel ) {

      describe( "A TodoModel", function () {
         it( "has the correct default values", function () {
            var model = new TodoModel();

            expect( model.get( "priority" ) ).toBe( 2 );

            expect( model.get( "description" ) ).toBe( "" );

            expect( model.get( "isCompleted" ) ).toBe( false );
         } );
      } );

   } );
