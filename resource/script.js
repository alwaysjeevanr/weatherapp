const apiKey = "ee92d9f45dc0e1905222bcedfde6af80";
const output = document.getElementById("output");
function updateWeather(location = "America") {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.cod === "404") {
        // Handle not found error
        console.error("Error: City not found!");
        output.textContent = "City not found. Please enter a valid location.";
        return;
      }

      const city = data.name;
      const temperature = Math.floor(data.main.temp - 273.15);
      const weather = data.weather[0].main;
      const humidity = data.main.humidity;
      const windSpeed = data.wind.speed;
      document.getElementById("location").textContent = city;
      document.getElementById("temperature").textContent = `${temperature}°C`;
      document.getElementById("weather").textContent = weather;
      document.getElementById("humidity").textContent = `${humidity}%`;
      document.getElementById("wind-speed").textContent = `${windSpeed} km/h`;
      output.textContent = "";
    })
    .catch((error) => {
      console.error(error);
      output.textContent = "Error fetching weather data.";
    });
}

updateWeather();

const searchBtn = document.getElementById("search-btn");
if (searchBtn) {
  searchBtn.addEventListener("click", () => {
    const newLocation = document.getElementById("newlocation").value;
    console.log(newLocation);
    if (newLocation) {
      updateWeather(newLocation);
    } else {
      output.textContent = "Please enter a location.";
    }
  });
}
