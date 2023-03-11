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

  document
    .getElementById('cloudyProgressBar')
    .setAttribute('aria-valuenow', data.community.cloudyPercentage);
  document.getElementById(
    'cloudyInnerProgressBar'
  ).style.width = `${data.community.cloudyPercentage}%`;
  document.getElementById(
    'cloudyInnerProgressBar'
  ).textContent = `${data.community.cloudyPercentage}%`;

  document
    .getElementById('rainyProgressBar')
    .setAttribute('aria-valuenow', data.community.rainyPercentage);
  document.getElementById(
    'rainyInnerProgressBar'
  ).style.width = `${data.community.rainyPercentage}%`;
  document.getElementById(
    'rainyInnerProgressBar'
  ).textContent = `${data.community.rainyPercentage}%`;

  document
    .getElementById('chillyProgressBar')
    .setAttribute('aria-valuenow', data.community.chillyPercentage);
  document.getElementById(
    'chillyInnerProgressBar'
  ).style.width = `${data.community.chillyPercentage}%`;
  document.getElementById(
    'chillyInnerProgressBar'
  ).textContent = `${data.community.chillyPercentage}%`;

  setupCommunityChat(data.community.chat);
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
    card.classList.add('card', 'mb-2', 'city-card');
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

    card.addEventListener('click', () => changeCity(city.name, i));
  }
};

const prepareAddCity = () => {
  document.getElementById('addCityDivider').classList.remove('hide');
  document.getElementById('cityInput').classList.remove('hide');
  document.getElementById('addCityButton').classList.add('hide');
  document.getElementById('addCityConfirmButton').classList.remove('hide');
};

const addCity = () => {
  // FIXME Will add server call here

  // Mock data
  const city = document.getElementById('cityInputBox').value;
  cityData.push({ name: city, temperature: Math.round(Math.random() * 80) });
  displayCityList(cityData);
  document.getElementById('addCityDivider').classList.add('hide');
  document.getElementById('cityInput').classList.add('hide');
  document.getElementById('addCityButton').classList.remove('hide');
  document.getElementById('addCityConfirmButton').classList.add('hide');
  document.getElementById('cityInputBox').value = '';
};

const changeCity = (city, idx) => {
  document.querySelectorAll('.message-card').forEach((card) => card.remove());
  const weatherData = getWeatherData(city);
  displayWeatherData(weatherData);
  document
    .querySelectorAll('.city-card')
    .forEach((card) => (card.style.backgroundColor = 'white'));
  document.querySelectorAll('.city-card')[idx].style.backgroundColor =
    'darkgrey';
};

const setupCommunityChat = (chat) => {
  const chatCard = document.getElementById('chatCard');

  for (let i = 0; i < chat.length; i++) {
    const message = chat[i];

    const cardRow = document.createElement('div');
    cardRow.classList.add(
      'message-card',
      'd-flex',
      message.me ? 'flex-row-reverse' : 'flex-row'
    );

    const messageBubble = document.createElement('div');
    messageBubble.classList.add(
      'card',
      'mb-2',
      message.me ? 'bg-primary' : 'bg-secondary'
    );

    const messageBody = document.createElement('div');
    messageBody.classList.add('card-body', 'py-1', 'px-2');

    const messageText = document.createElement('p');
    messageText.classList.add('card-text', 'text-white');
    messageText.textContent = message.message;

    messageBody.appendChild(messageText);
    messageBubble.appendChild(messageBody);
    cardRow.appendChild(messageBubble);
    chatCard.appendChild(cardRow);
  }
};

const sendMessage = () => {
  const message = document.getElementById('messageBox').value;

  document.querySelectorAll('.message-card').forEach((card) => card.remove());
  weatherData.community.chat.push({ message, me: true });
  displayWeatherData(weatherData);
  document.getElementById('messageBox').value = '';
};

const weatherData = getWeatherData('Provo');
displayWeatherData(weatherData);
const cityData = getUserCities();
displayCityList(cityData);

document.querySelector('.city-card').style.backgroundColor = 'darkgrey';

document
  .getElementById('addCityButton')
  .addEventListener('click', prepareAddCity);

document
  .getElementById('addCityConfirmButton')
  .addEventListener('click', addCity);

document.getElementById('cloudyDown').addEventListener('click', () => {
  const cloudy = document.getElementById('cloudyProgressBar');
  const cloudyValue = parseInt(cloudy.getAttribute('aria-valuenow'));
  if (cloudyValue > 0) {
    cloudy.setAttribute('aria-valuenow', cloudyValue - 1);
    document.getElementById('cloudyInnerProgressBar').style.width =
      cloudyValue - 1 + '%';
    document.getElementById('cloudyInnerProgressBar').textContent =
      cloudyValue - 1 + '%';
  }
});

document.getElementById('cloudyUp').addEventListener('click', () => {
  const cloudy = document.getElementById('cloudyProgressBar');
  const cloudyValue = parseInt(cloudy.getAttribute('aria-valuenow'));
  if (cloudyValue < 100) {
    cloudy.setAttribute('aria-valuenow', cloudyValue + 1);
    document.getElementById('cloudyInnerProgressBar').style.width =
      cloudyValue + 1 + '%';
    document.getElementById('cloudyInnerProgressBar').textContent =
      cloudyValue + 1 + '%';
  }
});

document.getElementById('rainyDown').addEventListener('click', () => {
  const rainy = document.getElementById('rainyProgressBar');
  const rainyValue = parseInt(rainy.getAttribute('aria-valuenow'));
  if (rainyValue > 0) {
    rainy.setAttribute('aria-valuenow', rainyValue - 1);
    document.getElementById('rainyInnerProgressBar').style.width =
      rainyValue - 1 + '%';
    document.getElementById('rainyInnerProgressBar').textContent =
      rainyValue - 1 + '%';
  }
});

document.getElementById('rainyUp').addEventListener('click', () => {
  const rainy = document.getElementById('rainyProgressBar');
  const rainyValue = parseInt(rainy.getAttribute('aria-valuenow'));
  if (rainyValue < 100) {
    rainy.setAttribute('aria-valuenow', rainyValue + 1);
    document.getElementById('rainyInnerProgressBar').style.width =
      rainyValue + 1 + '%';
    document.getElementById('rainyInnerProgressBar').textContent =
      rainyValue + 1 + '%';
  }
});

document.getElementById('chillyDown').addEventListener('click', () => {
  const chilly = document.getElementById('chillyProgressBar');
  const chillyValue = parseInt(chilly.getAttribute('aria-valuenow'));
  if (chillyValue > 0) {
    chilly.setAttribute('aria-valuenow', chillyValue - 1);
    document.getElementById('chillyInnerProgressBar').style.width =
      chillyValue - 1 + '%';
    document.getElementById('chillyInnerProgressBar').textContent =
      chillyValue - 1 + '%';
  }
});

document.getElementById('chillyUp').addEventListener('click', () => {
  const chilly = document.getElementById('chillyProgressBar');
  const chillyValue = parseInt(chilly.getAttribute('aria-valuenow'));
  if (chillyValue < 100) {
    chilly.setAttribute('aria-valuenow', chillyValue + 1);
    document.getElementById('chillyInnerProgressBar').style.width =
      chillyValue + 1 + '%';
    document.getElementById('chillyInnerProgressBar').textContent =
      chillyValue + 1 + '%';
  }
});

document.getElementById('sendButton').addEventListener('click', sendMessage);
