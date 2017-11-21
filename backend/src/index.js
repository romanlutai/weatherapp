const debug = require('debug')('weathermap');

const Koa = require('koa');
const router = require('koa-router')();
const fetch = require('node-fetch');
const cors = require('kcors');
const request = require('request');

const appId = process.env.APPID || '74175e67356601142bd2be7c64de323b';
const mapURI = process.env.MAP_ENDPOINT || "http://api.openweathermap.org/data/2.5";
const targetCity = process.env.TARGET_CITY || "Helsinki,fi";

const port = process.env.PORT || 9000;

const app = new Koa();

app.use(cors());

const fetchWeather = async () => {
  const endpoint = `${mapURI}/weather?q=${targetCity}&appid=${appId}&`;
  request.get(endpoint, function(error, response, body){ weather_set(JSON.parse(body)) });
  const endpoint_2 = `${mapURI}/forecast?q=${targetCity}&appid=${appId}&`;
  request.get(endpoint_2, function(error, response, body){ forecast_set(JSON.parse(body)) });
};

const weather_set = (weatherData) => {
  router.get(`/api/weather`, ctx => {
    ctx.type = 'application/json; charset=utf-8';
    ctx.body = weatherData.weather ? weatherData.weather[0] : {};
  });
}

const forecast_set = (weatherData) => {
  router.get(`/api/forecast`, ctx => {
    ctx.type = 'application/json; charset=utf-8';
    // show weather forecast in 3 hours
    ctx.body = weatherData.list ? weatherData.list[1].weather[0] : {};
  });
}

fetchWeather();

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port);

console.log(`App listening on port ${port}`);
