angular.module('credoApp', [])
.controller('EntriesListController', function(){
    var entriesList = this;
    entriesList.entries = []

    entriesList.get = function(authorId){
      $.ajax("/api/entries")
      .done( function(data){
          entriesList.entries = data;    
      })
      .fail(function(error){
          console.log(error);
      })
    }

    entriesList.add = function(){
        $.ajax({
            type: "POST",
            url: "/api/entries",
            data:{
                AuthorId: entriesList.AuthorId,
                text: entriesList.text,
                imageName: entriesList.imageName
            }
        })
        .done(function(entry){
            entriesList.entries.push(entry);
        })
        .fail(function(error){
            console.log(error);
        })
    }
})