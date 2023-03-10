import { mockWeather, mockCities } from './mockData.js';

const getWeatherData = (city) => {
  // FIXME Will add server call here

  // Mock data
  return mockWeather(city);
};

const displayWeatherData = (data) => {
  document.getElementById('cityName').textContent = data.city;
  document.getElementById('temperature').textContent = `${data.temperature}° F`;
  document.getElementById('conditions').textContent = data.conditions;

  document.getElementById(
    'precipitationPercentage'
  ).textContent = `${data.precipitationPercentage}%`;
  document.getElementById(
    'humidityPercentage'
  ).textContent = `${data.humidityPercentage}%`;

  document.getElementById(
    'hourly1Temp'
  ).textContent = `${data.hourlyForecast[0].temperature}° F`;
  document.getElementById(
    'hourly2Temp'
  ).textContent = `${data.hourlyForecast[1].temperature}° F`;
  document.getElementById(
    'hourly3Temp'
  ).textContent = `${data.hourlyForecast[2].temperature}° F`;
  document.getElementById(
    'hourly4Temp'
  ).textContent = `${data.hourlyForecast[3].temperature}° F`;
  document.getElementById(
    'hourly5Temp'
  ).textContent = `${data.hourlyForecast[4].temperature}° F`;
  document.getElementById(
    'hourly6Temp'
  ).textContent = `${data.hourlyForecast[5].temperature}° F`;

  document.getElementById(
    'hour1'
  ).textContent = `${data.hourlyForecast[0].hour} ${data.hourlyForecast[0].meridian}`;
  document.getElementById(
    'hour2'
  ).textContent = `${data.hourlyForecast[1].hour} ${data.hourlyForecast[1].meridian}`;
  document.getElementById(
    'hour3'
  ).textContent = `${data.hourlyForecast[2].hour} ${data.hourlyForecast[2].meridian}`;
  document.getElementById(
    'hour4'
  ).textContent = `${data.hourlyForecast[3].hour} ${data.hourlyForecast[3].meridian}`;
  document.getElementById(
    'hour5'
  ).textContent = `${data.hourlyForecast[4].hour} ${data.hourlyForecast[4].meridian}`;
  document.getElementById(
    'hour6'
  ).textContent = `${data.hourlyForecast[5].hour} ${data.hourlyForecast[5].meridian}`;

  document.getElementById(
    'weekly1Temp'
  ).textContent = `${data.weeklyForecast[0].temperature}° F`;
  document.getElementById(
    'weekly2Temp'
  ).textContent = `${data.weeklyForecast[1].temperature}° F`;
  document.getElementById(
    'weekly3Temp'
  ).textContent = `${data.weeklyForecast[2].temperature}° F`;
  document.getElementById(
    'weekly4Temp'
  ).textContent = `${data.weeklyForecast[3].temperature}° F`;
  document.getElementById(
    'weekly5Temp'
  ).textContent = `${data.weeklyForecast[4].temperature}° F`;
  document.getElementById(
    'weekly6Temp'
  ).textContent = `${data.weeklyForecast[5].temperature}° F`;

  document.getElementById('day1').textContent = `${data.weeklyForecast[0].day}`;
  document.getElementById('day2').textContent = `${data.weeklyForecast[1].day}`;
  document.getElementById('day3').textContent = `${data.weeklyForecast[2].day}`;
  document.getElementById('day4').textContent = `${data.weeklyForecast[3].day}`;
  document.getElementById('day5').textContent = `${data.weeklyForecast[4].day}`;
  document.getElementById('day6').textContent = `${data.weeklyForecast[5].day}`;
};

const getUserCities = () => {
  /// FIXME Will add server call here

  // Mock data
  return mockCities;
};

const displayCityList = (cities) => {
  const cityList = document.getElementById('cityList');

  cityList.innerText = '';

  for (let i = 0; i < cities.length; i++) {
    const city = cities[i];
    const card = document.createElement('div');
    card.classList.add('card', 'mb-2');
    if (i === 0) {
      card.classList.add('mt-4');
    }
    card.style.width = '100%';

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const cardRow = document.createElement('div');
    cardRow.classList.add('row', 'align-items-center');

    const col1 = document.createElement('div');
    col1.classList.add('col');

    const cityName = document.createElement('h5');
    cityName.classList.add('card-text');
    cityName.textContent = city.name;

    const col2 = document.createElement('div');
    col2.classList.add('col');

    const cityTemperature = document.createElement('p');
    cityTemperature.classList.add('card-text', 'text-end');
    cityTemperature.textContent = `${city.temperature}° F`;

    col1.appendChild(cityName);
    col2.appendChild(cityTemperature);
    cardRow.appendChild(col1);
    cardRow.appendChild(col2);
    cardBody.appendChild(cardRow);
    card.appendChild(cardBody);
    cityList.appendChild(card);
  }
};

const weatherData = getWeatherData('Seattle');
displayWeatherData(weatherData);
const cityData = getUserCities();
displayCityList(cityData);
