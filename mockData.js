const mockWeather = (city) => ({
  city,
  temperature: 34,
  conditions: 'Sunny',
  precipitationPercentage: 42,
  humidityPercentage: 37,
  hourlyForecast: [
    {
      hour: '3',
      meridian: 'PM',
      temperature: 32,
      conditions: 'Partly Cloudy',
    },
    {
      hour: '4',
      meridian: 'PM',
      temperature: 30,
      conditions: 'Partly Cloudy',
    },
    {
      hour: '5',
      meridian: 'PM',
      temperature: 30,
      conditions: 'Partly Cloudy',
    },
    {
      hour: '6',
      meridian: 'PM',
      temperature: 29,
      conditions: 'Cloudy',
    },
    {
      hour: '7',
      meridian: 'PM',
      temperature: 27,
      conditions: 'Cloudy',
    },
    {
      hour: '8',
      meridian: 'PM',
      temperature: 26,
      conditions: 'Partly Cloudy',
    },
  ],
  weeklyForecast: [
    {
      day: 'Mon',
      temperature: 32,
      conditions: 'Partly Cloudy',
    },
    {
      day: 'Tues',
      temperature: 30,
      conditions: 'Partly Cloudy',
    },
    {
      day: 'Wed',
      temperature: 30,
      conditions: 'Partly Cloudy',
    },
    {
      day: 'Thurs',
      temperature: 29,
      conditions: 'Cloudy',
    },
    {
      day: 'Fri',
      temperature: 27,
      conditions: 'Cloudy',
    },
    {
      day: 'Sat',
      temperature: 45,
      conditions: 'Partly Cloudy',
    },
  ],
});

const mockCities = [
  {
    name: 'Provo',
    temperature: 34,
  },
  {
    name: 'Seattle',
    temperature: 37,
  },
  {
    name: 'New York',
    temperature: 27,
  },
  {
    name: 'Sydney',
    temperature: 64,
  },
];

export { mockWeather, mockCities };
