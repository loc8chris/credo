let entries = {};

$(document).ready(function(){
    $('#entries').click(function(){
        $.ajax("/entries")
        .done( function(data){
            entries = data;    
        })
        .fail(function(error){
            console.log(error);
        })
    })
});

