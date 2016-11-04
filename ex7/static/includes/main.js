
// indicates that the jquery has been fully loaded to the document
$( document ).ready( function (){

	//lasttime has to be defined and for the first call will have a startingpoint of 0
	var lasttime = 0

	// If there will be typed in the searchbox with that # the key.up function will be triggered
	$( '#search-box' ).keyup( function (){
    
    // this var returns the value attribute of the selected element
    var inAr = $('#search-box').val()

    //current time is declared
    var currenttime = Date.now()


    // if at least 300ms have passed make a connection 
    // post is going to the index url
    // looping over the data stored in inAr = input in the input form
    // append the data matching with the input from the json file to give suggestions
    if(currenttime > lasttime + 300) { 
    	$.post('/index', {input: inAr}, ( data, status ) => {
	        // loop though data
	        for (var i = 0; i < data.length; i++) {   
		        // option.value = data[i]
		        $('#json-datalist').append('<option>'+ data[i].firstname + '' + data[i].lastname + '</option>');
		        console.log( data [i] )
        	}
        	// run lasttime now outside the loop so the lasttime will be updated
        	lasttime = Date.now()               
    	})   
    	} 
  	})

})  



/* isExist method two arguements
   arr - array of values.
   pos - string to be search.
   */
// Part 0

function aha( ar, pos ) {
  for (var i = 0; i < ar.length; i++) {
     if (ar[i] === 'kamal') {

         // Return index
         return i;         
     } else {        
         /* If value is not found return -1. */         
         return -1;
    }  
  }    
}

var power = [
'sw', 'ww', 'bm'];

aha( power,'kamal' );

function getAll(arr, val) {
    var indexes = [], i;
    for(i = 0; i < arr.length; i++)
        if (arr[i] === val)
            indexes.push(i);
    return indexes;
}

var power = [
'sw', 'ww', 'bm', 'ww'];

getAll( power, 'ww' )
