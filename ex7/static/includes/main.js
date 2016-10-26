$( document ).ready( function(){
    $( "input" ).keyup( function(){
        var inAr = {}
        inAr = $('#searchCriteria').val()
        $("input").css("background-color", "blue");
        $.post('/dex', {input: inAr}, ( data, status ) => {
            console.log( data )
        })
    });
});






/* isExist method two arguements
   arr - array of values.
   pos - string to be search.
*/
// Part 0

// function aha( ar, pos ) {
//   for (var i = 0; i < ar.length; i++) {
//      if (ar[i] === 'kamal') {
        
//          // Return index
//          return i;         
//      } else {        
//          /* If value is not found return -1. */         
//          return -1;
//     }  
//   }    
// }

// var power = [
// 'sw', 'ww', 'bm'];

// aha( power,'kamal' );

// function getAll(arr, val) {
//     var indexes = [], i;
//     for(i = 0; i < arr.length; i++)
//         if (arr[i] === val)
//             indexes.push(i);
//     return indexes;
// }

// var power = [
// 'sw', 'ww', 'bm', 'ww'];

// getAll( power, 'ww' )
