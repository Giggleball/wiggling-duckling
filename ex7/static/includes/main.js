$( document ).ready( function(){
    $( "#search-box" ).keyup( function(){
       var inAr = $('#search-box').val()
       $.post('/dex', {input: inAr}, ( data, status ) => {
            // loop though data
            // Create a new XMLHttpRequest.
        var request = new XMLHttpRequest();

        // Handle state changes for the request.
        request.onreadystatechange = function(response) {
          if (request.readyState === 4) {
            if (request.status === 200) {
              // Parse the JSON
              var jsonOptions = JSON.parse(request.responseText);

              // Loop over the JSON array.
              jsonOptions.forEach(function(item) {
                // Create a new <option> element.
                var option = document.createElement('option');
                // Set the value using the item in the JSON array.
                option.value = item;
                // Add the <option> element to the <datalist>.
                dataList.appendChild(option);
            });

          }
            // show each firstname and lastname in html
            
            // look into jquery .append()
            console.log( data )

        }
        }
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
