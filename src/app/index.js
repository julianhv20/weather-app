require('./index.css')
const {Weather} = require('./Weather')
const {UI} = require('./UI')
const {Store} = require('./Store')

const ui = new UI();
const store = new Store()
const {city, countryCode} = store.getLocation()
const weather = new Weather(city, countryCode);

async function fetchWeather(){
    const data = await weather.getWeather();
    console.log(data);
    ui.render(data);
}

document.getElementById('w-change-btn').addEventListener('click', (e)=>{
    e.preventDefault()
    const wForm = document.getElementById('w-form');
    const city = document.getElementById('city').value;
    const countryCode = document.getElementById('countryCode').value;
    weather.changeLocation(city,countryCode);
    store.setLocation(city, countryCode);
    fetchWeather();
    wForm.reset();
})

document.addEventListener('DOMContentLoaded', fetchWeather)