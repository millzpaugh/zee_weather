var allWeatherInfo; 

var winterPhotos = ["images/winter/1.jpg", "images/winter/2.jpg", "images/winter/3.jpg", "images/winter/4.jpg","images/winter/5.jpg", "images/winter/6.jpg", "images/winter/7.jpg", "images/winter/8.jpg", "images/winter/9.jpg", "images/winter/10.jpg", "images/winter/11.jpg"]

var winterPhoto = randomFrom(winterPhotos); 

var summerPhotos = ["images/summer/12.jpg", "images/summer/13.jpg", "images/summer/14.jpg", "images/summer/15.jpg","images/summer/16.jpg", "images/summer/17.jpg", "images/summer/18.jpg", "images/summer/19.jpg", "images/summer/20.jpg", "images/summer/21.jpg", "images/summer/22.jpg", "images/summer/23.jpg"]

var summerPhoto = randomFrom(winterPhotos); 

function randomFrom(arr){
    var randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
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
        hipster =  $("<li class='hipster-pic'>" + "<h2>But here's a hipster scarf..." + "</h2></li>");  
        $("#list").append(hipster); 
        hipsterImg = $("<img class='scarf' src=" + randomFrom(summerPhotos) + ">")
        $("li.hipster-pic").append(hipsterImg); 
      } 
      else{
        temp =  $("<li class='temp'>" + "<span class='response'>Yes!</span><br> You're in " + "<span class='city'>" + allWeatherInfo.name + "</span>" + "<br>It's " + degreesF + "°F / " + degreesC + "°C." + "</li>");
        $("#list").append(temp); 
        hipster =  $("<li class='hipster-pic'>" + "<h2>But here's a hipster scarf..." + "</h2></li>");  
        $("#list").append(hipster); 
        hipsterImg = $("<img class='scarf' src=" + randomFrom(winterPhotos) + ">")
        $("li.hipster-pic").append(hipsterImg); 
      }  
     }
    // }












