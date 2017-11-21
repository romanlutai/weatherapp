const debug = require('debug')('weathermap');

const Koa = require('koa');
const router = require('koa-router')();
const fetch = require('node-fetch');
const cors = require('kcors');
const get = require('get');

const link0 = 'http://api.openweathermap.org/data/2.5/weather?q=Helsinki,fi&appid=74175e67356601142bd2be7c64de323b&';
const link1 = 'http://api.openweathermap.org/data/2.5/weather?q=Helsinki,fi&appid=8dca7ec8b9a32bcbdce659b5e0b7a503&';
const link2 = 'http://google.com/';
const link99 = 'http://api.openweathermap.org/data/2.5/weather?q=Helsinki,fi&';

var request = require('request');

const fetchWeather = async () => {
  const response0 = await request(link0, function(error, response, body){ baa(body) } );
  return response0 ? response0.json() : {}
};

const baa = (body) => {
  console.log( body );
  const weatherData = JSON.parse(body);
  console.log( weatherData );
};

//fetchWeather();

const abc = 123;
console.log(abc);
console.log(process.env.ABC);
process.env.ABC = 321;
console.log(abc);
console.log(process.env.ABC);

const navigator = require('navigator');
const geolocation = require('geolocation');
geolocation.getCurrentPosition(function (err, position) {
  if (err) throw err
  console.log(position)
  process.env.TARGET_CITY = position;
})

const arr = {results: 2938, id: 9283};
console.log(arr['id']);
