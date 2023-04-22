import axios from 'axios';

export default async function handler(req, res) {
  const { city } = req.query;
  const API_KEY = '8dbc5f762dba08256f07a201418ec4e7';
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;
  
  try {
    const response = await axios.get(apiUrl);
    const weatherData = response.data.list.map(item => {
      return {
        date: item.dt_txt.slice(0, 10),
        humidity: item.main.humidity,
        temp: item.main.temp,
        icon: item.weather[0].icon
      };
    });

    const currentDate = new Date().toISOString().slice(0, 10);
    const nextSevenDays = weatherData.filter(item => item.date >= currentDate && item.date < getDateInEightDays());
    const processedData = [];

    for (let i = 1; i <= 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      const dateString = date.toISOString().slice(0, 10);
      const dataForDate = nextSevenDays.filter(item => item.date === dateString);

      const humidityAvg = calculateAverage(dataForDate, 'humidity');
      const tempMinAvg = calculateAverage(dataForDate, 'temp', 'min');
      const tempMaxAvg = calculateAverage(dataForDate, 'temp', 'max');
      const iconAvg = calculateMode(dataForDate, 'icon');

      const weatherDataForDate = {
        date: dateString,
        city,
        humidityAvg,
        tempMinAvg,
        tempMaxAvg,
        iconAvg
      };
      processedData.push(weatherDataForDate);
    }

    res.status(200).json(processedData);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
}

function getDateInEightDays() {
  const date = new Date();
  date.setDate(date.getDate() + 8);
  return date.toISOString().slice(0, 10);
}

function calculateAverage(data, property, type = 'avg') {
  const sum = data.reduce((acc, item) => {
    return acc + item[property];
  }, 0);

  if (type === 'avg') {
    return Math.round(sum / data.length);
  } else if (type === 'min') {
    return Math.round(Math.min(...data.map(item => item[property])));
  } else if (type === 'max') {
    return Math.round(Math.max(...data.map(item => item[property])));
  }

  return null;
}

function calculateMode(data, property) {
  const counts = data.reduce((acc, item) => {
    const value = item[property];
    acc[value] = acc[value] ? acc[value] + 1 : 1;
    return acc;
  }, {});

  const maxCount = Math.max(...Object.values(counts));
  const mode = Object.keys(counts).filter(key => counts[key] === maxCount);
  return mode[0];
}
