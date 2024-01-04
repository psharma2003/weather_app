const apiKey="f4082298a39d5944a84ae73419599259"
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox=document.querySelector(".search input")
const searchbtn=document.querySelector(".search button")
const weathericon=document.querySelector(".weather-icon")

async function checkweather(city){
const response=await fetch(apiUrl + city + `&appid=${apiKey}`);

if(response.status==404){
    document.querySelector(".error").style.display="block";//display error msg
    document.querySelector(".weather").style.display="none";//hide weather info

}


else{
    
    let data=await response.json();

console.log(data);

document.querySelector(".city").innerHTML=data.name   //to display the city 
document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C"  // to display temp on page
//document.querySelector(".temp").innerHTML=data.main.temp+"°C"

document.querySelector(".humidity").innerHTML=data.main.humidity+"%"
document.querySelector(".wind").innerHTML=data.wind.speed+"km/h"

if(data.weather[0].main=="Clouds"){
weathericon.src="images/clouds.png"
}

else if(data.weather[0].main=="Clear"){
    weathericon.src="images/clear.png"
    }



  else if(data.weather[0].main=="Rain"){
     weathericon.src="images/rain.png"
       }
       else if(data.weather[0].main=="Drizzle"){
        weathericon.src="images/drizzle.png"
        }

        else if(data.weather[0].main=="Mist"){
            weathericon.src="images/mist.png"
            }

            else if(data.weather[0].main=="Snow"){
              weathericon.src="images/snow.png"
              }


    document.querySelector(".weather").style.display="block"

    document.querySelector(".error").style.display="none"
}



}



searchbtn.addEventListener("click",function(){
    checkweather(searchbox.value);

})

//checkweather();


//The function calls the checkweather function, passing the value of the searchbox (the city name) as an argument.
//it uses the fetch function to send a GET request to the OpenWeatherMap API using 
//the constructed URL (including the city and API key).

//data.weather[0].main: This accesses the weather array within the data object, which is 
//returned by the API response. Weather information is often provided as an array because there
 //can be multiple weather
 //conditions associated with a location. [0]
  //accesses the first element of this array. Inside this first element, there's an object 
  //that contains various weather-related properties,
   //including main.

   /*

async function checkweather(city){
      const response=await fetch(url)

      if(response.status==404){
        document.querySelector(".error").style.display="block";
      }

      else{
        await response.json()
      }
     }

     searchbutton.addEventListener("click",function (){
      checkweather(searchbox.value)
     })

     if(DataTransfer.weather[0].main=="clouds"){
      weathericon.src=images/clouds.png
     }



   */