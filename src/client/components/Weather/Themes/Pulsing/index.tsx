import './index.scss'
import * as React from 'react'
import { IWeatherIcon } from '../..'

const Pulsing: IWeatherIcon = ({ condition, isLarge = false }) => {
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

export default Pulsing
