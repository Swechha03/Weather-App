import { apiKey } from './config.js'

document.querySelector('.search-button').addEventListener('click', () => {
    let city = document.querySelector('.search-city').value;
    getWeather(city);
});

async function getWeather(city) {
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    const response = await fetch(apiURL);
    const data = await response.json();

    document.querySelector('.temperature').innerHTML = `<h2>Temperature:${Math.round(data.main.temp)}°F</h2>`;
    document.querySelector('.humidity').innerHTML = `<h2>Humidity: ${Math.round(data.main.humidity)}%</h2>`;
}
