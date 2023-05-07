const apiKey = "8eccafe33ccb89d6f0e49bec42c4a099"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox=document.getElementById("cityname");
let as;
const searchbtn=document.getElementById("citybtn");
const c1=document.getElementById("ranchi");
const c2=document.getElementById("kolkata");
const c3=document.getElementById("bangalore");
const c4=document.getElementById("delhi");
const c5=document.getElementById("jaipur");
const weathercondn = document.querySelector(".img");

var element = document.getElementById("container");
function updateTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var day = now.getDate();
    var month = now.getMonth() + 1; // getMonth() returns 0-11, so add 1
    var year = now.getFullYear();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    var timeString = hours + ":" + minutes + ":" + seconds + " " + day + "/" + month + "/" + year;
    document.getElementById("time").innerHTML = timeString;
  }
  
  setInterval(updateTime, 1000);
  

async function checkweather (city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json ();
    
    document.getElementById("city").innerHTML=data.name;
    document.getElementById("country").innerHTML=data.sys.country;
    document.getElementById("temp").innerHTML=Math.round(data.main.temp);
    document.getElementById("humidity").innerHTML=data.main.humidity;
    // document.getElementById("visibility").innerHTML=data.main.visibility;
    document.getElementById("windspeed").innerHTML=data.wind.speed;
    document.getElementById("details").innerHTML=data.weather[0].main;
        if(data.weather[0].main=="Clear"){
            weathercondn.src="images/clear.png"
            if(ampm=='AM')
            element.style.backgroundImage = "url('./images/wall/day/cloud.jpg')";
            else
            element.style.backgroundImage = "url('./images/wall/night/cloud.jpg')";
            
        }
        else if(data.weather[0].main=="Clouds"){
            weathercondn.src="images/clouds.png"
            element.style.backgroundImage = "url('./images/wall/day/cloud.jpg')";

            if(ampm=='AM')
            element.style.backgroundImage = "url('./images/wall/day/cloud.jpg')";
            else
            element.style.backgroundImage = "url('./images/wall/night/cloud.jpg')";
        }
        else if(data.weather[0].main=="Dizzle"){
            weathercondn.src="images/dizzle.png"
            element.style.backgroundImage = "url('./images/wall/day/rain.jpg')";

            if(ampm=='AM')
            element.style.backgroundImage = "url('./images/wall/day/rain.jpg')";
            else
            element.style.backgroundImage = "url('./images/wall/night/rain.jpg')";
        }
        else if(data.weather[0].main=="Mist"){
            weathercondn.src="images/mist.png"
            element.style.backgroundImage = "url('./images/wall/day/cloud.jpg')";

            if(ampm=='AM')
            element.style.backgroundImage = "url('./images/wall/day/cloud.jpg')";
            else
            element.style.backgroundImage = "url('./images/wall/night/cloud.jpg')";
        }
        else if(data.weather[0].main=="Rain"){
            weathercondn.src="images/rain.png"
            element.style.backgroundImage = "url('./images/wall/day/rain.jpg')";

            if(ampm=='AM')
            element.style.backgroundImage = "url('./images/wall/day/rain.jpg')";
            else
            element.style.backgroundImage = "url('./images/wall/night/rain.jpg')";
        }
        else if(data.weather[0].main=="Snow"){
            weathercondn.src="images/snow.png"
            element.style.backgroundImage = "url('./images/wall/day/snow.jpg')";

            if(ampm=='AM')
            element.style.backgroundImage = "url('./images/wall/day/snow.jpg')";
            else
            element.style.backgroundImage = "url('./images/wall/night/snow.jpg')";
        } 
        else if(data.weather[0].main=="Haze"){
            weathercondn.src="images/mist.png"
            element.style.backgroundImage = "url('./images/wall/day/cloud.jpg')";

            if(ampm=='AM')
            element.style.backgroundImage = "url('./images/wall/day/rain.jpg')";
            else
            element.style.backgroundImage = "url('./images/wall/night/rain.jpg')";
        } 
}

searchbtn.addEventListener("click",()=>{
    as=searchbox.value;
    if(as==""){
        document.getElementById("city").innerHTML="~~";
        document.getElementById("country").innerHTML="~~";
        document.getElementById("temp").innerHTML="~~";
        document.getElementById("humidity").innerHTML="~~";
        document.getElementById("windspeed").innerHTML="~~";
        document.getElementById("details").innerHTML="~~~~~";
        document.getElementById("visibility").innerHTML="~~";
        weathercondn.src=""
    }
    else{

        checkweather(as);
    }
});



c1.addEventListener("click",()=>{
checkweather("Ranchi");
});
c2.addEventListener("click",()=>{
checkweather("Kolkata");
});
c3.addEventListener("click",()=>{
checkweather("bangalore");
});
c4.addEventListener("click",()=>{
checkweather("Delhi");
});
c5.addEventListener("click",()=>{
checkweather("Jaipur");
});


