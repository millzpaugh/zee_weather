var allWeatherInfo; 

$(function(){ 
  $('.what').addClass('animated FadeInRight');
  $('.weather-header').addClass('animated slideInLeft')

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

// Backgrounds 
// var winter = [#39131C,#4D192F,#501B26], 
// var springfall = [#3E6B24, #5EBB3E, #1C541E, #31822B], 
// var summer = [#4D2060,#8A66CC,#8F47C2,#4E2B82],  

  function appendWeather() {
    console.log(allWeatherInfo.main.temp)
      degreesF = Math.round((allWeatherInfo.main.temp- 273) * 9/5 + 32);
      degreesC =  Math.round((allWeatherInfo.main.temp- 273)); 
      if(degreesF > 60){
        temp =  $("<li class='temp'>" + "<span class='response'>No!</span><br> You're in " + "<span class='city'>" + allWeatherInfo.name + "." + "</span>" + "<br>It's " + degreesF + "°F / " + degreesC + "°C. " + "</li>");
        $("#list").append(temp); 
      } else{
        temp =  $("<li class='temp'>" + "<span class='response'>Yes!</span><br> You're in " + "<span class='city'>" + allWeatherInfo.name + "</span>" + " and it's " + degreesF + "°F / " + degreesC + "°C " + "</li>");
        $("#list").append(temp); 
      }  
     }
    // }












