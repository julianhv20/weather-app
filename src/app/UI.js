export class UI{
    constructor(){
        this.location = document.getElementById('weather-location')
        this.desc = document.getElementById('weather-description')
        this.humidity = document.getElementById('weather-humidity')
        this.string = document.getElementById('weather-string')
        this.wind = document.getElementById('weather-wind')
    }

    render(weather){
        this.location.textContent = weather.name + ' / ' + weather.sys.country;
        this.desc.textContent = weather.weather[0].description;
        this.string.textContent = weather.main.temp + ' °C';
        this.humidity.textContent = 'Humidity: ' + weather.main.humidity + '%';
        this.wind.textContent = 'Wind: ' + weather.wind.speed + ' m/s'; 
    }
}