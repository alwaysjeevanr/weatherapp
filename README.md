# Weather App

A simple and elegant weather application that allows users to search for the current weather conditions of any city. The app fetches real-time weather data using the OpenWeatherMap API and displays it in a user-friendly interface.

## Features

- Search for weather information by city name.
- Displays:
  - Current temperature in Celsius.
  - Weather condition (e.g., Clear, Rainy, etc.).
  - Humidity percentage.
  - Wind speed in km/h.
- Default weather information for "America" on page load.
- Responsive and visually appealing design.

## Technologies Used

- **HTML**: Structure of the application.
- **CSS**: Styling and layout of the application.
- **JavaScript**: Logic for fetching and displaying weather data.
- **OpenWeatherMap API**: Source of real-time weather data.

## File Structure

```
weatherapp/
│
├── index.html          # Main HTML file
├── resource/
│   ├── bgimg.jpg       # Background image
│   ├── script.js       # JavaScript logic
│   └── style.css       # Styling
```

## How to Use

1. Clone or download the repository.
2. Open the `index.html` file in any modern web browser.
3. Enter the name of a city in the search bar and click the "Search" button.
4. View the weather details for the entered city.

## API Key

The application uses the OpenWeatherMap API. The API key is hardcoded in the `script.js` file:

```javascript
const apiKey = "[API of OpenWeatherMap]";
```

You can replace this key with your own by signing up at [OpenWeatherMap](https://openweathermap.org/).

## Screenshots

![Weather App Screenshot](resource/bgimg.jpg)

## Future Enhancements

- Add support for multiple units (Celsius, Fahrenheit, Kelvin).
- Display a 5-day weather forecast.
- Improve error handling and user feedback.
- Make the app fully responsive for all screen sizes.

## License

This project is for personal use and demonstration purposes. Feel free to use and modify it as per your needs.
