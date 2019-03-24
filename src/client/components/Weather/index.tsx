import * as React from 'react'
import axios from 'axios'
import { Container, Subscribe } from 'unstated'
import './index.scss'
import './SpinningTheme.scss'

interface Condition {
  text: string
  icon: string
  code: number
}

interface CurrentWeather {
  temp_f: number
  is_day: number
  condition: Condition
  wind_mph: number
  wind_degree: number
  wind_dir: string
  precip_in: number
  humidity: number
  cloud: number
  gust_mph: number
}

interface Day {
  maxtemp_f: number
  mintemp_f: number
  avgtemp_f: number
  maxwind_mph: number
  totalprecip_in: number
  avgvis_miles: number
  avghumidity: number
  condition: Condition
  uv: number
}

interface IForecast {
  date: string
  day: Day
}

interface IWeather {
  current: CurrentWeather
  location: { name: string }
  forecast: {
    forecastday: IForecast[]
  }
}

const WeatherIcon = ({
  condition,
  isLarge = false,
}: {
  condition: string
  isLarge?: boolean
}) => {
  switch (condition.toLowerCase()) {
    case 'partly cloudy':
      return (
        <div className={`partly_cloudy ${isLarge ? 'large-weather' : ''}`}>
          <div className="partly_cloudy__sun" />
          <div className="partly_cloudy__cloud" />
        </div>
      )
    case 'sunny':
      return <div className={`sunny ${isLarge ? 'large-weather' : ''}`} />

    case 'cloudy':
      return <div className={`cloudy ${isLarge ? 'large-weather' : ''}`} />

    case 'rainy':
    case 'moderate or heavy rain shower':
    case 'patchy rain possible':
      return (
        <div className={`rainy ${isLarge ? 'large-weather' : ''}`}>
          <div className="rainy__cloud" />
          <div className="rainy__rain" />
        </div>
      )

    default:
      return (
        <div className="thundery">
          <div className="thundery__cloud" />
          <div className="thundery__rain" />
        </div>
      )
  }
}

const daysOfTheWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]

const Wind = ({
  maxwind_mph,
  wind_mph,
}: {
  maxwind_mph?: number
  wind_mph?: number
}) => (
  <h6>
    {maxwind_mph !== undefined ? `${maxwind_mph} mph max` : `${wind_mph} mph`}
  </h6>
)

const WeatherCondition = ({
  condition,
  temp_f,
  wind_mph,
  day,
  isLarge = false,
  maxtemp_f,
  mintemp_f,
  maxwind_mph,
}: {
  condition: string
  temp_f?: number
  wind_mph?: number
  day?: number
  isLarge?: boolean
  maxtemp_f?: number
  mintemp_f?: number
  maxwind_mph?: number
}) => (
  <div className={`weather`} title={condition}>
    <h5>{day !== undefined ? daysOfTheWeek[day] : 'Now'}</h5>
    <WeatherIcon condition={condition} isLarge={isLarge} />
    {temp_f && <h6>{`${temp_f}°F Avg`}</h6>}
    {maxtemp_f && mintemp_f && <h6>{`${mintemp_f}°F / ${maxtemp_f}°F `}</h6>}
    <Wind maxwind_mph={maxwind_mph} wind_mph={wind_mph} />
  </div>
)

const urlOfBainbridgeWeather =
  'https://api.apixu.com/v1/forecast.json?key=914e66579b3648ca8a7184809192303&q=98110&days=10'

interface IState {
  startedInitialFetch: boolean
  currentWeather?: CurrentWeather
  location?: string
  forecast?: IForecast[]
}
class WeatherContainer extends Container<IState> {
  state: IState = { startedInitialFetch: false }
  fetchWeather = async () => {
    this.setState({ startedInitialFetch: true })
    const { data } = await axios.get<IWeather>(urlOfBainbridgeWeather)
    this.setState({
      currentWeather: data.current,
      location: data.location.name,
      forecast: data.forecast.forecastday,
    })
  }
}

const Weather = () => (
  <Subscribe to={[WeatherContainer]}>
    {({ state, fetchWeather }: WeatherContainer) => {
      if (!state.startedInitialFetch) {
        fetchWeather()
      }
      if (state.forecast && state.currentWeather) {
        const { forecast, currentWeather } = state

        return (
          <div
            style={{
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              justifyContent: 'flex-start',
              background: 'linear-gradient(45deg, #232435, #35415f)',
              alignItems: 'flex-start',
            }}
          >
            <h2
              style={{
                alignSelf: 'center',
                color: '#8f90a3',
                textAlign: 'center',
                padding: 20,
              }}
            >
              Bainbridge Weather Forecast
            </h2>
            <div style={{ alignSelf: 'center' }}>
              <WeatherCondition
                isLarge={true}
                temp_f={currentWeather.temp_f}
                wind_mph={currentWeather.wind_mph}
                condition={currentWeather.condition.text}
              />
            </div>
            <br />
            <br />
            <div style={{ overflowX: 'scroll', maxWidth: '100%' }}>
              <div
                style={{
                  display: 'flex',
                  minWidth: 222 * forecast.length,
                  alignItems: 'center',
                }}
              >
                {forecast.map((forecast: IForecast) => {
                  const { text } = forecast.day.condition
                  return (
                    <WeatherCondition
                      key={forecast.date}
                      {...forecast.day}
                      condition={text}
                      day={new Date(forecast.date).getDay()}
                    />
                  )
                })}
              </div>
            </div>
          </div>
        )
      } else {
        return null
      }
    }}
  </Subscribe>
)

export default Weather
