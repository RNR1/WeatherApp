# Weather App

This application is a front-end weather app built with React & TypeScript.

The app will give you updated five-day weather information, either by search or by your current location (if allowed).

You can add your searched locations to favorites and access them via the favorites section.

Weather information provided by [AccuWeather](https://www.accuweather.com/)

Demo: [https://rons-weather-app.netlify.app/](https://rons-weather-app.netlify.app/)

## Table Of Contents

- [Weather App](#weather-app)
  - [Table Of Contents](#table-of-contents)
  - [Running the project](#running-the-project)
  - [Screenshots](#screenshots)
  - [Tech-stack](#tech-stack)

## Running the project

1. Clone the repository and navigate to root directory.
2. Run `yarn install`.
3. Run `cp .env.sample .env` to create a dotenv file.
4. In `./.env`, you will need to set `REACT_APP_API_KEY` with a valid API key from [AccuWeather API](https://developer.accuweather.com/).
5. Run `yarn start`
6. Navigate to `http://localhost:3000`.

## Screenshots

TBA

## Tech-stack

1. TypeScript
2. UI - React, Material-UI, styled-components
3. State Management - Redux-Saga
4. HTTP Client - Axios
5. Date formatting - dayjs
6. Animations - Lottie
