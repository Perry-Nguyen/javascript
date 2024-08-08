function showweatherDetails(event) {
      event.preventDefault();

     const city = document.getElementById('city').value;
     const apiKey = 'e75219f754e850bf66f2101c5ab4d8ca'; // Replace 'YOUR_API_KEY' with your actual API key
     const apiUrlgeo = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`;
 fetch(apiUrlgeo)
        .then(response => response.json())
        .then(data => {
            
          gettingstuff(data[0].lat,data[0].lon);
        }).catch(error => {
          console.error('Error fetching weather:', error);
          const weatherInfo = document.getElementById('weatherInfo');
          weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
        });

            
        


}

function gettingstuff(lat,lon){
    const apiKey = 'e75219f754e850bf66f2101c5ab4d8ca'; // Replace 'YOUR_API_KEY' with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

            fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                console.log(data);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                    <p>Temperature: ${data.main.temp} &#8451;</p>
                                    <p>Weather: ${data.weather[0].description}</p>`;
            }).catch(error => {
            console.error('Error fetching weather:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
            });
}



 document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );
