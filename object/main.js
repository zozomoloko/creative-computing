$("document").ready(function(){
  $.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather?q=Tampa&units=imperial&appid=ef3e268cbe387a39c451c064de7ff0c1",
    success: function(data) {
      console.log(data);
      console.log(data,name);
      console.log(data.main.temp);
      console.log(data.main.humidity)
      handleData(data)

        $("#tempText").html (data.main.temp)
        $("#cloudsText").html (data.main.humidity)

    }

  });

  var weatherText = $("#weather")
  let temp, humidity

  function handleData(data){
    temp = data.main.temp;
    // console.log("the temperature is: "+temp)
    humidity= data.main.humidity;

    if (temp < 50) {
    $("#temp").css("color","lightskyblue");
} else {
    $("#temp").css("color","tomato");
}

if (humidity < 50) {
$("#humidity").css("color","sandybrown");
} else {
$("#humidity").css("color","forestgreen");
}

    $("#temp").html("THE CURRENT TEMPERATURE IS " + temp + "°")
    $("#humidity").html("THE CURRENT HUMIDITY IS " + humidity + " % ")

    $("#temp").css("font-size", temp*2);
    // $("#temp").css("color","tomato");

    $("#humidity").css("font-size", humidity*2);
    // $("#humidity").css("color"," MediumAquamarine");


  }
})
