import * as React from 'react'
import axios from 'axios'
import { Container, Subscribe } from 'unstated'
import './index.scss'

interface IState {
  startedInitialFetch: boolean
  currentWeather?: CurrentWeather
  location?: string
}

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
  precip_mm: number
  precip_in: number
  humidity: number
  cloud: number
  gust_mph: number
  gust_kph: number
}

interface IWeather {
  current: CurrentWeather
  location: { name: string }
}

const urlOfSeattleWeather =
  'https://api.apixu.com/v1/current.json?key=914e66579b3648ca8a7184809192303&q=98110'

class WeatherContainer extends Container<IState> {
  state: IState = { startedInitialFetch: false }
  fetchWeather = async () => {
    this.setState({ startedInitialFetch: true })
    const { data } = await axios.get<IWeather>(urlOfSeattleWeather)
    this.setState({
      currentWeather: data.current,
      location: data.location.name,
    })
  }
}

const WeatherIcon = ({ condition }: { condition: string }) => {
  switch (condition.toLowerCase()) {
    case 'partly cloudy':
      return (
        <div className="partly_cloudy">
          <div className="partly_cloudy__sun" />
          <div className="partly_cloudy__cloud" />
        </div>
      )
    case 'sunny':
      return <div className="sunny" />

    case 'cloudy':
      return <div className="cloudy" />

    case 'rainy':
      return (
        <div className="rainy">
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

const Weather = () => (
  <Subscribe to={[WeatherContainer]}>
    {({ state, fetchWeather }: WeatherContainer) => {
      if (!state.startedInitialFetch) {
        fetchWeather()
      }
      if (state.currentWeather) {
        const { currentWeather, location } = state
        const { temp_f, wind_mph } = currentWeather
        return (
          <div className={'weather'}>
            <WeatherIcon condition={currentWeather.condition.text} />
            <h2>{currentWeather.condition.text}</h2>
            <h5>{`${temp_f}°F / ${wind_mph} mph`}</h5>
            <h6>{location}</h6>
          </div>
        )
      } else {
        return null
      }
    }}
  </Subscribe>
)

export default Weather
