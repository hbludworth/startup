const mockWeather = (city) => ({
  city,
  temperature: Math.round(Math.random() * 80),
  conditions: 'Sunny',
  precipitationPercentage: Math.round(Math.random() * 100),
  humidityPercentage: Math.round(Math.random() * 100),
  hourlyForecast: [
    {
      hour: '3',
      meridian: 'PM',
      temperature: Math.round(Math.random() * 80),
      conditions: 'Partly Cloudy',
    },
    {
      hour: '4',
      meridian: 'PM',
      temperature: Math.round(Math.random() * 80),
      conditions: 'Partly Cloudy',
    },
    {
      hour: '5',
      meridian: 'PM',
      temperature: Math.round(Math.random() * 80),
      conditions: 'Partly Cloudy',
    },
    {
      hour: '6',
      meridian: 'PM',
      temperature: Math.round(Math.random() * 80),
      conditions: 'Cloudy',
    },
    {
      hour: '7',
      meridian: 'PM',
      temperature: Math.round(Math.random() * 80),
      conditions: 'Cloudy',
    },
    {
      hour: '8',
      meridian: 'PM',
      temperature: Math.round(Math.random() * 80),
      conditions: 'Partly Cloudy',
    },
  ],
  weeklyForecast: [
    {
      day: 'Mon',
      temperature: Math.round(Math.random() * 80),
      conditions: 'Partly Cloudy',
    },
    {
      day: 'Tues',
      temperature: Math.round(Math.random() * 80),
      conditions: 'Partly Cloudy',
    },
    {
      day: 'Wed',
      temperature: Math.round(Math.random() * 80),
      conditions: 'Partly Cloudy',
    },
    {
      day: 'Thurs',
      temperature: Math.round(Math.random() * 80),
      conditions: 'Cloudy',
    },
    {
      day: 'Fri',
      temperature: Math.round(Math.random() * 80),
      conditions: 'Cloudy',
    },
    {
      day: 'Sat',
      temperature: Math.round(Math.random() * 80),
      conditions: 'Partly Cloudy',
    },
  ],
});

const mockCities = [
  {
    name: 'Provo',
    temperature: Math.round(Math.random() * 80),
  },
  {
    name: 'Seattle',
    temperature: Math.round(Math.random() * 80),
  },
  {
    name: 'New York',
    temperature: Math.round(Math.random() * 80),
  },
  {
    name: 'Sydney',
    temperature: Math.round(Math.random() * 80),
  },
];

export { mockWeather, mockCities };
