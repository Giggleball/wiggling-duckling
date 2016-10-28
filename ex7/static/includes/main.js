$( document ).ready( function(){
    $( '#search-box' ).keyup( function(){
        var inAr = $('#search-box').val()
        $.post('/dex', {input: inAr}, ( data, status ) => {
            // loop though data
            for (var i = 0; i < data.length; i++) {   
                // option.value = data[i]
                $('#json-datalist').append('<option>'+ data[i].firstname + data[i].lastname + '</option>');

                console.log( data [i])
            }
        })
    })
})







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
