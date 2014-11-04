/**
 * @author Jon Onstott
 * @since 11/4/2014
 */
define( [
      "jasmine",
      "jasmineHtml",
      "jasmineBoot"],
   function ( Jasmine,
              JasmineHtml,
              JasmineBoot ) {

      describe( "A suite", function () {
         it( "contains spec with an expectation", function () {
            expect( true ).toBe( true );
         } );
      } );

   } );
