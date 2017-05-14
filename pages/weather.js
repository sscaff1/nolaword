import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import { format } from 'date-fns';
import { Layout } from '../layouts';
import { Article, Ad } from '../components';
const config = require('../config/config.json');

const NEWS_DESK = 'weather';
const BASE_IMAGE = 'https://openweathermap.org/img/w/';

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
    const product = config.products[Math.floor(Math.random() * config.products.length)];
    return (
      <Layout url={url}>
        <h2>Weather</h2>
        <div className="container">
          <div>
            <div className="box">
              <h3 className="title">{weather.name}</h3>
              <img src={`${BASE_IMAGE}${weather.weather[0].icon}.png`} />
              <h5 className="title">{weather.weather[0].description}</h5>
              <br />
              <h4 className="title">Temp: {Math.round(weather.main.temp, 0)}&#8457;</h4>
              <h4 className="title">Humidity: {weather.main.humidity}%</h4>
              <h4 className="title">Wind: {weather.wind.speed} mph {degToDirection(weather.wind.deg)}</h4>
            </div>
            <Ad
              pixel={product.pixel}
              headline={product.headline}
              image={product.image}
              snippet={product.snippet}
              url={product.url}
              price={product.price}
            />
          </div>
          <div className="box">
            <h3 className="title">Forecast</h3>
            {weather.forecast.list.map((w, i, arr) => (
              <div key={`forecast-${i}`} className="forecast" style={{ border: i === arr.length - 1 && 0 }}>
                <div>
                  <img src={`${BASE_IMAGE}${w.weather[0].icon}.png`} />
                  <p className="title">{w.weather[0].description}</p>
                </div>
                <div>
                  <p className="title">Date: {format(w.dt * 1000, 'ddd MMM DD')}</p>
                  <p className="title">Temp: {Math.round(w.temp.min, 0)} ({Math.round(w.temp.max, 0)})&#8457;</p>
                  <p className="title">Wind: {w.speed} mph {degToDirection(w.deg)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style jsx>{`
          p, h3, h4 {
            font-family: 'Open Sans';
          }
          .container {
            display: flex;
            width: 100%;
          }
          .container div {
            margin: 0 auto 10px;
            width: 100%;
            height: 100%;
            text-align: center;
          }
          .container > div {
            width: 40%;
          }
          .box {
            border: 1px solid #000;
            border-radius: 5px;
            padding: 10px 0;
          }
          .title {
            margin: 0;
          }
          .forecast {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 0;
            border-bottom: 1px solid black;
          }
          @media (min-width: 500px) {
            .container {
              justify-content: space-around;
            }
          }
          @media (max-width: 500px) {
            .container{
              display: block;
            }
            .container div {
              width: 100%;
            }
          }
        `}</style>
      </Layout>
    );
  }
}
