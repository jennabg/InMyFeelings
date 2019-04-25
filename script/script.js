$(document).ready(function(){
  //Function to use the input value to make the API calls
  function feelingSearch(){
    var search = document.getElementById('feeling').value;
    if(search==""){
      //validation if the field is blank
      document.getElementById('results').innerHTML="<p>Please enter a value</p>";
    }else{
      document.getElementById('emotionresult').innerHTML = "";
      document.getElementById('bookresult').innerHTML = "";
      document.getElementById('movieresult').innerHTML = "";
      //console.log(search)

      $.post({
        url:"requesticon.php",
        data: {search:search},
        dataType: "JSON",
        success: function(data){
          console.log(data);
          var array_length = data.icons.length;
          // if(array_length == ""){
          //   // validation if the search didn't return any results
          //   emotionresult.innerHTML += "Sorry, we didn't find an icon to match that feeling";
          // }else{
            i = Math.floor(Math.random() * array_length);
            console.log(i);
            if(data.icons[i].icon_url) {
              emotionresult.innerHTML += '<p> <img src="' + data.icons[i].icon_url + '"/>' +
              "Because you said you're feeling " + search + " we recommend the following:";
            }
            else {
              emotionresult.innerHTML +=
              '<p> <img src="' + data.icons[i].attribution_preview_url + '"/>' +
              " Because you said you're feeling " + search + " we recommend the following: ";
              }
          }

      });

      $.ajax({
        // first ajax call to search through google books api
        url: "https:/www.googleapis.com/books/v1/volumes?q=" + search,
        dataType: "json",
        success: function(data){
          console.log(data);
          var array_length = data.items.length;
          if(array_length == ""){
            // validation if the search didn't return any results
            bookresult.innerHTML += "Sorry, we didn't find a book to match that feeling";
          }else{
            console.log(data);
            // gets a different value from the array so the results aren't the same every time the same feeling is searched
            i = Math.floor(Math.random() * array_length);
            // inputs the results of the api call into the book results div
              bookresult.innerHTML += "<h2> Book: " + data.items[i].volumeInfo.title + "</h2> <br />"+
              '<img src="' + data.items[i].volumeInfo.imageLinks.thumbnail + '"/>' +
              "<p> Author: " + data.items[i].volumeInfo.authors + "</p>" +
              "<p>" + data.items[i].volumeInfo.description + "</p>"
          }
        },
        type: 'GET'
      });
      $("#bookresult").css("padding", "15px");
      $.ajax({
        // second ajax call using the movie db api, very similar to the first ajax call, just returning different data from the JSON file
        url:     "https://api.themoviedb.org/3/search/movie?api_key=15e63d81f035f5e1664271a5ef337779&language=en-US&query=" + search + "&page=1&include_adult=false",
        dataType: "json",
        success: function(data){
          var array_length = data.results.length
          if(array_length == ""){
            movieresult.innerHTML += "Sorry, we didn't find a movie to match that feeling";
          }else{
            i = Math.floor(Math.random() * array_length);
            movieresult.innerHTML += "<h2> Movie: " + data.results[i].title+ "</h2> <br />"
            + '<img src="https://image.tmdb.org/t/p/w500/' + data.results[i].poster_path + '"/>'
            + "<p>" + data.results[i].overview + "</p>"
          }
        },
        type: 'GET'
      });
        $("#movieresult").css("padding", "15px");
      }
  }
  // event listerner to run the above function when the form is submitted
  document.getElementById('submit').addEventListener('click', feelingSearch, false);
  });

  //return false;
