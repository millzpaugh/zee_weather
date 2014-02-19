var allWeatherInfo; 

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

  function appendWeather(allWeatherInfo) {
    console.log(allWeatherInfo.main.temp)
    if(allWeatherInfo.message = "Error: Not found city"){
        alert("Please trying re-entering your city."); 
    }
    else{
      degrees = Math.round((allWeatherInfo.main.temp- 273) * 9/5 + 32); 
      temp =  $("<li>" + "The temperature in " + allWeatherInfo.name + " is " + degrees + " degrees Fahrenheit" + "</li>");
      $("#list").append(temp);
    }
  }


$(function(){ 

  $("form").on("submit",function(e){
    e.preventDefault();
    getWeather($("input").val());
    $("input").val(); 
  }); 

  $('button#add').click(function(){
    $("#list").empty(); 
    appendWeather(); 
  });


}); 

