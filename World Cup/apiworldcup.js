var ready = 0;
$(".submit").click(function() {
    var ready = 1;
    var city = $(".city").val()
    var uri = "https://api.openweathermap.org/data/2.5/weather?zip=" + city + ",us&units=imperial&appid=11ea12a822a12cbc1722c219d2adb648";
    $.get(uri, onRes);
});

function onRes(response) {
    $(".country").html(response.sys.country);
    $(".temp").html(response.main.temp);
    $(".city-name").html(response.name);
    $(".weather").html(response.weather[0].description);
    console.log(response.main.temp);
}   
function tempCheck(ready = 1) {
if(response.main.temp > 105) {
    alert("Over 105 degrees fahrenheit.");
}
if(response.main.temp > 80 && response.main.temp <= 105) {
    alert("It is warm, between 80 and 105 degrees fahrenheit.")
}
if(response.main.temp > 40 || response.main.temp <= 80){
    alert("Weather is nice, between 40 and 80 degrees fahrenheit.");
    }
}
if(response.main.temp >= 20 || response.main.temp <= 40){
    alert("It is chilly, between 20 and 40 degrees farenheit.")
}
if(response.main.temp < 20){
    alert("It is cold, below 20 degrees farenhiet.")
}