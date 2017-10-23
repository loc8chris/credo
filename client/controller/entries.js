angular.module('credoApp', [])
.controller('EntriesListController', function($scope){
    var entriesList = this;
    entriesList.entries = []
    entriesList.feelings = []
    entriesList.selectedFeeling = null
    entriesList.email = ''
    entriesList.score = ''
    entriesList.charactertrait = ''
    entriesList.thought = ''


    entriesList.get = function(authorId){
      $.ajax("/api/entries")
      .done( function(data){
          entriesList.entries = data;    
      })
      .fail(function(error){
          console.log(error);
      })
    }

    /*

        entriesList.email
        entriesList.feelingName
        entriesList.characterTrait
        entriesList.score
        entriesList.thought
    */
    entriesList.add = function(){
        console.log("calling ajax for entries POST")
        entriesList.email = $('#email').val();
        entriesList.feelingName = $('#feeling').val();
        entriesList.charactertrait = $('#charactertrait').val();
        entriesList.score = $('#score').val();
        entriesList.thought = $('#thought').val();

        var tempData = {
            email: entriesList.email,
            name: entriesList.feelingName,
            charactertrait: entriesList.charactertrait,
            score: entriesList.score,
            thought: entriesList.thought
        }

        console.log(tempData);
        
        $.ajax({
            type: "POST",
            url: "/api/entries",
            data: tempData
        })
        .done(function(entry){
            entriesList.entries.push(entry);
            alert("Entry was made")
        })
        .fail(function(error){
            console.log(error);
        })
    }

    entriesList.getFeelings = function(done){
        $.ajax({
            type: "GET",
            url: "/api/feelings"
          
        })
        .done(function(data){
            entriesList.feelings=data;

            if(done)
                done(entriesList.feelings);
        })
        .fail(function(error){
            console.log(error);
        })
    }

    $scope.getFeeling = function(feelingName, done){

        let feeling = null;        
        
        entriesList.getFeelings(function(feelings){

            console.log("Feelings")
            console.log(feelings)
            entriesList.selectedFeeling = feelings.find( x => x.name.toLowerCase() == feelingName.toLowerCase());
            console.log("Selected feeling...")
            console.log(entriesList.selectedFeeling)
            if(done){
            
                done(entriesList.selectedFeeling);
            }
        })
    }
})