import { apiKey } from './config.js'

document.querySelector('.search-button').addEventListener('click', () => {
    let city = document.querySelector('.search-city').value;
    getWeather(city);
});

async function getWeather(city) {
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    const response = await fetch(apiURL);
    const data = await response.json();

    document.querySelector('.temperature').innerHTML = `${Math.round(data.main.temp)}°F`;
    document.querySelector('.humidity').innerHTML = `${Math.round(data.main.humidity)}%`;
}
