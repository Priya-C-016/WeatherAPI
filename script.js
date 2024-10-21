document.getElementById('search-btn').addEventListener('click', function () {
    const city = document.getElementById('search-input').value;
    getWeather(city);
});

function getWeather(city) {
    const apiKey = "c516f0ce7d4e39518bef9de41f9d5cc5"; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('temp').textContent = `${Math.round(data.main.temp)}°C`;
            document.getElementById('city').textContent = data.name;
            document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
            document.getElementById('wind-speed').textContent = `Wind Speed: ${data.wind.speed} km/h`;
        })
        .catch(error => {
            alert('City not found!');
            console.error('Error:', error);
        });
}
