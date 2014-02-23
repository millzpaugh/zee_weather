var allWeatherInfo; 

var summerPhotos = ["images/summer/12.jpg", "images/summer/13.jpg", "images/summer/14.jpg", "images/summer/15.jpg","images/summer/16.jpg", "images/summer/17.jpg", "images/summer/18.jpg", "images/summer/19.jpg", "images/summer/20.jpg", "images/summer/21.jpg", "images/summer/22.jpg", "images/summer/23.jpg", "images/fring/24.jpg", "images/fring/25.jpg", "images/fring/26.jpg", "images/fring/27.jpg","images/fring/28.jpg", "images/fring/29.jpg", "images/fring/30.jpg", "images/fring/31.jpg", "images/fring/32.jpg", "images/fring/33.jpg"] 

// Grabs Random Photo 
function randomFrom(arr){
    var randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

// Pings open weather API 
  function getWeather(location) {
    $.ajax({
      url: "http://api.openweathermap.org/data/2.5/weather?q=" + location, 
      type: "GET",
      dataType: "json",
      success: function(response){
        allWeatherInfo = response;  
        appendWeather(response);  
      },
    }); 
  } 

// Logs weather info 
  function appendWeather() {
    console.log(allWeatherInfo.main.temp)
      degreesF = Math.round((allWeatherInfo.main.temp- 273) * 9/5 + 32);
      degreesC =  Math.round((allWeatherInfo.main.temp- 273)); 
      if(degreesF > 60){
        changeBackground();        
        temp =  $("<li class='temp'>" + "<span class='response'>No!</span><br> You're in " + "<span class='city'>" + allWeatherInfo.name + "." + "</span>" + "<br>It's " + degreesF + "°F / " + degreesC + "°C. " + "<br><span id='phrase'>But here's a hipster scarf...</span>" + "</li>");
        $("#list").append(temp); 
        $('body').css('background-image', 'url(../' + randomFrom(summerPhotos) + ")'");} 
      else{
        temp =  $("<li class='temp'>" + "<span class='response'>Yes!</span><br> You're in " + "<span class='city'>" + allWeatherInfo.name + "</span>" + "<br>It's " + degreesF + "°F / " + degreesC + "°C." + "</li>");
        $("#list").append(temp); 
      }  
     }

//Changes background if weather is too hot for a scarf 
function changeBackground(){
  $('body').css('background-image', "url('" + randomFrom(summerPhotos) + "')" );
}

// Window onload events 
$(function(){   

  $("form").on("submit",function(e){
    e.preventDefault();
    getWeather($("input").val());
    $("input").val(); 
  }); 

  $('button#add').click(function(){
    $("#list").empty(); 
    appendWeather(); 
    $("#list").empty(); 
  });

}); 







