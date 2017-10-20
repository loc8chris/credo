angular.module('credoApp', [])
.controller('EntriesListController', function(){
    var entriesList = this;
    entriesList.entries = []
    entriesList.feelings = []

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

    entriesList.getFeelings = function(){
        $.ajax({
            type: "GET",
            url: "/api/feelings"
          
        })
        .done(function(data){
            entriesList.feelings=data;
        })
        .fail(function(error){
            console.log(error);
        })
    }
})