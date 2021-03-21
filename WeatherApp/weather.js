var citySelect = document.getElementById("cities");
const API_KEY = "447fc32635c26a635a9d3a7717940e21";
var temp;
var humidity;
var skyType;

citySelect.addEventListener("change", function(){
    console.log(citySelect.value + " has been clicked");
    let city = citySelect.value;
    var urlString = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=imperial&appid="+API_KEY;
                     // http://api.openweathermap.org/data/2.5/weather?q=San%20Francisco,Ca,USA&appid=447fc32635c26a635a9d3a7717940e21
    getApiData(urlString);

    //Make call to the API immediately.
    //Put the temp and humidity valuess

    //Then add the svg animation somewhere

})

var map = new Map();
map.set("clear sky", "Icons/animated/day.svg");
map.set("few clouds", "Icons/animated/cloudy-day-3.svg");
map.set("scattered clouds", "Icons/animated/cloudy-day-3.svg");
map.set("broken clouds", "Icons/animated/cloudy-day-3.svg");
map.set("shower rain", "Icons/animated/rainy-7.svg");
map.set("rain", "Icons/animated/rainy-7.svg");
map.set("thunderstorm", "Icons/animated/thunder.svg");
map.set("snow", "Icons/animated/snowy-6.svg");


async function getApiData(urlString) {

  var response = await fetch(urlString);
  var myJson = await response.json();
  humidity = myJson.main.humidity;
  temp = myJson.main.temp;
  skyType = myJson.weather[0].description
  console.log(humidity);
  console.log(skyType);
  console.log(temp);
  update(temp, humidity, skyType);
}

function update(temp, humidity, skyType){
    document.getElementById("Temperature").textContent = "Temperature: " + temp;
    document.getElementById("Humidity").textContent = "Humidity: " + humidity;
    document.getElementById("icon").src = map.get(skyType);
}

// const response = await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
//     );
//
//     const data = await response.json();
//
//     console.log(data);
