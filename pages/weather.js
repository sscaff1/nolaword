import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
const config = require('../config/config.json');
import { Layout } from '../layouts';
import { Article, Ad, makeRequest } from '../components';

const NEWS_DESK = 'weather';
const BASE_IMAGE = 'http://openweathermap.org/img/w/';

function degToDirection(degree) {
  const val = Math.round((degree / 22.55) + 0.5, 0);
  const directions = ["N","NNE","NE","ENE","E","ESE", "SE", "SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"];
  return directions[val % 16];
}

export default class Weather extends Component {
  state = {
    zipCode: '',
  };

  static async getInitialProps ({ req }) {
    const origin = req ? `${req.protocol}://${req.get('Host')}` : window.location.origin
    const weather = await fetch(`${origin}/api/weather`).then(response => response.json());
    return {
      weather,
    };
  }

  render() {
    const { url, weather } = this.props;
    return (
      <Layout url={url}>
        <h2>Weather</h2>
        <div className="container">
          <div className="box">
            <h3 className="title">{weather.name}</h3>
            <img src={`${BASE_IMAGE}${weather.weather[0].icon}.png`} />
            <h5 className="title">{weather.weather[0].description}</h5>
            <br />
            <h4 className="title">Temp: {Math.round(weather.main.temp, 0)}&#8457;</h4>
            <h4 className="title">Humidity: {weather.main.humidity}%</h4>
            <h4 className="title">Wind: {weather.wind.speed} mph {degToDirection(weather.wind.deg)}</h4>
          </div>
        </div>
        <style jsx>{`
          .container {
            display: flex;
            padding-left: 10px;
            justify-content: space-around;
            align-items: center;
            width: 100%;
            padding-bottom: 300px;
          }
          .box {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 40%;
            border: 1px solid #000;
            border-radius: 5px;
            transition: all 0.2s;
            padding: 10px 0;
          }
          .box:hover {
            transform: scale(1.2);
          }
          .title {
            margin: 0;
          }
        `}</style>
      </Layout>
    );
  }
}
