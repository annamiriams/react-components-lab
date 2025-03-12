// src/App.jsx

import './App.css';
import weatherForecast from 'src/components/WeatherForecast/WeatherForecast.jsx';

const weatherForecasts = [
    {
        day: 'Mon',
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/day.svg',
        imgAlt: 'sun icon',
        conditions: 'sunny',
        time: 'Morning',
    },
    {
        day: 'Tue',
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/night.svg',
        imgAlt: 'moon icon',
        conditions: 'clear',
        time: 'Night',
    },
    {
        day: 'Wed',
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/stormy.svg',
        imgAlt: 'clouds with lightning icon',
        conditions: 'stormy',
        time: 'All Day',
    },
    {
        day: 'Thu',
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/cloudy-day.svg',
        imgAlt: 'sun overcast by clouds icon',
        conditions: 'overcast',
        time: 'Evening',
    },
    {
        day: 'Fri',
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/cloudy-night.svg',
        imgAlt: 'moon overcast by clouds icon',
        conditions: 'cloudy',
        time: 'Night',
    },
];

const App = () => {

    return (
        <>
            <h1>Local Weather</h1>

            <section>
                {/* weather data here */}
                {/* Each instance of the WeatherForecast component should have the JSX equivalent of the following HTML structure: */}
                <div className="weather">
                    <h2>Day of the Week</h2>
                    <img src="" alt="" />
                    <p><span>conditions: </span>current weather conditions</p>
                    <p><span>time: </span>time of day</p>
                </div>

            </section>
        </>

    );
}

export default App
