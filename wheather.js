

const apiBase = 'https://api.openweathermap.org/data/2.5/weather?appid=8d7b1dbb7a8cce76ba2eb1be37c6f76b&units=metric&q=';

const searchbox = document.querySelector('.search input');
const searchbtn = document.querySelector('.search button');
const weathericon = document.querySelector('.icon');

async function checkWeather(city) {
    const response = await fetch(apiBase + city);
    let data = await response.json();

   if ( response.status == 404){
    document.querySelector('.error').style.display = 'block';
    document.querySelector('.weather').style.display = 'none';
   }else {
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';

       document.querySelector('.weather').style.display="block"
       document.querySelector('.error').style.display="none"
   }
   
}

searchbtn.addEventListener('click', () => {
    checkWeather(searchbox.value);
});

