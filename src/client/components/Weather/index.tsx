import * as React from 'react'
import axios from 'axios'
import { Container, Subscribe } from 'unstated'
import { SFC } from 'react'
import Pulsing from './Themes/Pulsing'
import Rotating from './Themes/Rotating'

export type IWeatherIcon = SFC<{
  condition: string
  isLarge?: boolean
}>
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

const urlOfBainbridgeWeather =
  'https://api.apixu.com/v1/forecast.json?key=914e66579b3648ca8a7184809192303&q=98110&days=10'

interface IState {
  startedInitialFetch: boolean
  currentWeather?: CurrentWeather
  location?: string
  forecast?: IForecast[]
}

class CountClickContainer extends Container<{ clicks: number }> {
  state = { clicks: 0 }
  recordClick = () => {
    console.log('click')
    this.setState({ clicks: this.state.clicks + 1 })
  }
}

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
  <Subscribe to={[CountClickContainer]}>
    {({ state }: CountClickContainer) => {
      return (
        <div className={`weather`} title={condition}>
          <h5>{day !== undefined ? daysOfTheWeek[day] : 'Now'}</h5>

          {state.clicks % 2 === 0 ? (
            <Pulsing condition={condition} isLarge={isLarge} />
          ) : (
            <Rotating condition={condition} isLarge={isLarge} />
          )}
          {temp_f && <h6>{`${temp_f}°F`}</h6>}
          {maxtemp_f && mintemp_f && (
            <h6>{`${mintemp_f}°F / ${maxtemp_f}°F`}</h6>
          )}
          <Wind maxwind_mph={maxwind_mph} wind_mph={wind_mph} />
        </div>
      )
    }}
  </Subscribe>
)

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
  <Subscribe to={[WeatherContainer, CountClickContainer]}>
    {(
      { state, fetchWeather }: WeatherContainer,
      { recordClick }: CountClickContainer,
    ) => {
      if (!state.startedInitialFetch) {
        fetchWeather()
      }

      if (state.forecast && state.currentWeather) {
        const { forecast, currentWeather } = state
        return (
          <div
            onClick={recordClick}
            style={{
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              justifyContent: 'flex-start',
              background: 'linear-gradient(45deg, #232435, #35415f)',
              alignItems: 'flex-start',
              cursor: 'pointer',
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
            <br />
            <h4
              style={{
                alignSelf: 'center',
                color: '#8f90a3',
                textAlign: 'center',
                padding: 20,
              }}
            >
              Click To Toggle Icons
            </h4>
          </div>
        )
      } else {
        return null
      }
    }}
  </Subscribe>
)

export default Weather
