$( document ).ready( function (){
  
    $( '#search-box' ).keyup( function (){
        var inAr = $('#search-box').val()
        var delay = 300
        var search_timer = null
        $( '#search-box' ).keyup( function (e) {
          if(search_timer) {
            clearTimeout(search_timer)
          }
          search_timer = setTimeout(inAr, delay)
                    $.post('/dex', {input: inAr}, ( data, status ) => {
                    
                    // loop though data
                    for (var i = 0; i < data.length; i++) {   
                    // option.value = data[i]
                    $('#json-datalist').append('<option>'+ data[i].firstname + '' + data[i].lastname + '</option>');
                    console.log( data [i] )
                        }
                    })
                   });
            })
          })  




