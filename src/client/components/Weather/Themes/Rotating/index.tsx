import './index.scss'
import * as React from 'react'
import { IWeatherIcon } from '../..'

const getIcon = (condition) => {
  switch (condition.toLowerCase()) {
    case 'partly cloudy':
      return <PartlyCloudy />
    case 'sunny':
      return <Sunny />
    case 'cloudy':
      return <Cloudy />
    case 'rainy':
    case 'moderate or heavy rain shower':
      ;<Rainy />
    case 'patchy rain possible':
      return <SunShower />
    case 'windy':
      ;<Windy />
    case 'snowy':
      return <Snowy />

    default:
      return <Rainbow />
  }
}

const Rotating: IWeatherIcon = ({ condition, isLarge }) => {
  return <div className={isLarge ? 'large-icon' : ''}>{getIcon(condition)}</div>
}

export default Rotating

const Sunny = () => (
  <svg className={`icon icon-sunny`} viewBox="0 0 220 220">
    {/*       Short rays */}
    <g className="sunny-short-ray">
      <path
        fill="#43647E"
        d="M111.961,65.447l-0.014-8.394c-0.003-1.617-1.318-2.927-2.935-2.925c-1.616,0.003-2.924,1.318-2.924,2.935
l0.014,8.474C108.064,65.375,110.021,65.354,111.961,65.447z"
      />
      <path
        fill="#43647E"
        d="M75.396,81.343c1.257-1.484,2.607-2.9,4.063-4.221l-5.938-5.918c-1.146-1.142-3-1.14-4.143,0.005
c-1.142,1.146-1.139,3.001,0.008,4.142L75.396,81.343z"
      />
      <path
        fill="#43647E"
        d="M163.276,112.648c0.388-0.001,0.756-0.078,1.094-0.213c1.074-0.437,1.83-1.492,1.83-2.721
c-0.004-1.617-1.315-2.927-2.933-2.925l-8.478,0.015c0.164,1.96,0.186,3.917,0.091,5.856L163.276,112.648z"
      />
      <path
        fill="#43647E"
        d="M143.207,80.158l5.918-5.937c1.144-1.146,1.14-3-0.005-4.142c-1.147-1.143-3.001-1.14-4.143,0.004
l-5.992,6.013C140.471,77.353,141.884,78.704,143.207,80.158z"
      />
      <path
        fill="#43647E"
        d="M56.353,108.382c-1.619,0.002-2.928,1.317-2.924,2.935c0.004,1.615,1.318,2.925,2.934,2.923l8.473-0.014
c-0.16-1.963-0.182-3.917-0.088-5.858L56.353,108.382z"
      />
      <path
        fill="#43647E"
        d="M144.234,139.686c-1.258,1.484-2.609,2.899-4.063,4.223l5.939,5.918c0.857,0.855,2.111,1.068,3.167,0.639
c0.354-0.143,0.687-0.357,0.974-0.646c1.143-1.145,1.139-3-0.006-4.141L144.234,139.686z"
      />
      <path
        fill="#43647E"
        d="M107.669,155.582l0.013,8.395c0.003,1.617,1.317,2.928,2.934,2.922c0.388,0,0.755-0.074,1.093-0.213
c1.077-0.434,1.834-1.488,1.83-2.719l-0.014-8.475C111.564,155.654,109.608,155.676,107.669,155.582z"
      />
      <path
        fill="#43647E"
        d="M76.421,140.871l-5.917,5.938c-1.142,1.144-1.141,2.999,0.006,4.142c0.857,0.855,2.112,1.068,3.17,0.641
c0.354-0.144,0.687-0.361,0.972-0.646l5.991-6.012C79.159,143.676,77.743,142.326,76.421,140.871z"
      />
    </g>
    {/*       Long rays */}
    <g className="sunny-long-ray">
      <path
        fill="#43647E"
        d="M138.495,51.723c0.936-2.209-0.096-4.761-2.307-5.697c-2.211-0.938-4.763,0.096-5.697,2.306l-7.959,18.792
c-0.014,0.034-0.021,0.07-0.035,0.103c2.787,0.818,5.487,1.9,8.064,3.232L138.495,51.723z"
      />
      <path
        fill="#43647E"
        d="M88.124,70.841c0.014,0.031,0.035,0.058,0.051,0.091c1.508-0.822,3.072-1.576,4.703-2.238
c1.087-0.44,2.184-0.82,3.283-1.17l-7.639-18.862c-0.901-2.226-3.436-3.298-5.662-2.397c-2.223,0.901-3.299,3.435-2.395,5.66
L88.124,70.841z"
      />
      <path
        fill="#43647E"
        d="M47.633,89.838l18.79,7.959c0.033,0.012,0.07,0.021,0.104,0.032c0.818-2.786,1.901-5.485,3.234-8.061
l-18.74-7.935c-2.209-0.937-4.761,0.098-5.696,2.308C44.388,86.354,45.423,88.904,47.633,89.838z"
      />
      <path
        fill="#43647E"
        d="M149.397,88.874c0.821,1.508,1.576,3.074,2.236,4.705c0.439,1.088,0.821,2.183,1.171,3.284l18.862-7.638
c2.226-0.902,3.299-3.437,2.398-5.661c-0.901-2.224-3.437-3.299-5.661-2.398l-18.916,7.66
C149.458,88.837,149.43,88.859,149.397,88.874z"
      />
      <path
        fill="#43647E"
        d="M81.135,169.308c-0.937,2.21,0.097,4.761,2.308,5.696c1.105,0.469,2.295,0.445,3.324,0.027
c1.034-0.418,1.905-1.229,2.371-2.334l7.959-18.789c0.016-0.035,0.023-0.071,0.037-0.104c-2.787-0.818-5.488-1.901-8.065-3.233
L81.135,169.308z"
      />
      <path
        fill="#43647E"
        d="M131.503,150.19c-0.012-0.033-0.031-0.062-0.047-0.093c-1.508,0.822-3.074,1.574-4.704,2.238
c-1.089,0.439-2.185,0.82-3.284,1.17l7.639,18.863c0.901,2.225,3.436,3.297,5.662,2.395c2.223-0.901,3.297-3.434,2.397-5.659
L131.503,150.19z"
      />
      <path
        fill="#43647E"
        d="M70.233,132.157c-0.824-1.51-1.578-3.074-2.238-4.707c-0.441-1.085-0.821-2.183-1.171-3.282l-18.862,7.641
c-2.225,0.899-3.297,3.436-2.396,5.658c0.9,2.227,3.435,3.299,5.66,2.398l18.914-7.66C70.173,132.191,70.2,132.172,70.233,132.157z
"
      />
      <path
        fill="#43647E"
        d="M171.997,131.191l-18.791-7.959c-0.033-0.014-0.068-0.02-0.104-0.033c-0.818,2.786-1.9,5.484-3.234,8.062
l18.739,7.936c1.104,0.467,2.295,0.443,3.327,0.025c1.029-0.417,1.902-1.228,2.371-2.334
C175.24,134.678,174.207,132.127,171.997,131.191z"
      />
    </g>
    {/*       Sun body */}
    <g className="sunny-body">
      <path
        fill="#43647E"
        d="M142.702,97.196c-7.357-18.162-28.043-26.923-46.205-19.568c-18.164,7.356-26.925,28.045-19.568,46.205
c7.354,18.165,28.043,26.926,46.205,19.569C141.298,136.045,150.058,115.36,142.702,97.196z M117.348,84.979
c-0.411,1.812-2.217,2.948-4.026,2.535c-4.427-1.007-8.997-0.636-13.221,1.075c-5.488,2.224-9.782,6.45-12.091,11.9
c-2.308,5.452-2.356,11.475-0.134,16.964c0.697,1.721-0.134,3.684-1.857,4.381c-0.413,0.168-0.841,0.248-1.262,0.248
c-1.33,0-2.588-0.795-3.117-2.104c-2.898-7.154-2.836-15.008,0.174-22.113c3.007-7.108,8.605-12.619,15.76-15.516
c5.504-2.229,11.469-2.715,17.241-1.398C116.626,81.363,117.762,83.167,117.348,84.979z"
      />
    </g>
  </svg>
)

const PartlyCloudy = () => (
  <svg className="icon icon-partly-cloudy" viewBox="0 0 220 220">
    {/*       Short rays */}
    <g className="sunny-short-ray">
      <path
        fill="#43647E"
        d="M147.961,63.447l-0.014-8.394c-0.003-1.617-1.318-2.927-2.935-2.925c-1.616,0.003-2.924,1.318-2.924,2.935
l0.014,8.474C144.064,63.375,146.021,63.354,147.961,63.447z"
      />
      <path
        fill="#43647E"
        d="M111.396,79.343c1.257-1.484,2.607-2.9,4.063-4.221l-5.938-5.918c-1.146-1.142-3-1.14-4.143,0.005
c-1.142,1.146-1.139,3.001,0.008,4.142L111.396,79.343z"
      />
      <path
        fill="#43647E"
        d="M199.276,110.648c0.388-0.001,0.756-0.078,1.094-0.213c1.074-0.437,1.83-1.492,1.83-2.721
c-0.004-1.617-1.315-2.927-2.933-2.925l-8.478,0.015c0.164,1.96,0.186,3.917,0.091,5.856L199.276,110.648z"
      />
      <path
        fill="#43647E"
        d="M179.207,78.158l5.918-5.937c1.144-1.146,1.14-3-0.005-4.142c-1.147-1.143-3.001-1.14-4.143,0.004
l-5.992,6.013C176.471,75.353,177.884,76.704,179.207,78.158z"
      />
      <path
        fill="#43647E"
        d="M92.353,106.382c-1.619,0.002-2.928,1.317-2.924,2.935c0.004,1.615,1.318,2.925,2.934,2.923l8.473-0.014
c-0.16-1.963-0.182-3.917-0.088-5.858L92.353,106.382z"
      />
      <path
        fill="#43647E"
        d="M180.234,137.686c-1.258,1.484-2.609,2.899-4.063,4.223l5.939,5.918c0.857,0.855,2.111,1.068,3.167,0.639
c0.354-0.143,0.687-0.357,0.974-0.646c1.143-1.145,1.139-3-0.006-4.141L180.234,137.686z"
      />
      <path
        fill="#43647E"
        d="M143.669,153.582l0.013,8.395c0.003,1.617,1.317,2.928,2.934,2.922c0.388,0,0.755-0.074,1.093-0.213
c1.077-0.434,1.834-1.488,1.83-2.719l-0.014-8.475C147.564,153.654,145.608,153.676,143.669,153.582z"
      />
      <path
        fill="#43647E"
        d="M112.421,138.871l-5.917,5.938c-1.142,1.144-1.141,2.999,0.006,4.142c0.857,0.855,2.112,1.068,3.17,0.641
c0.354-0.144,0.687-0.361,0.972-0.646l5.991-6.012C115.159,141.676,113.743,140.326,112.421,138.871z"
      />
    </g>
    {/*       Long rays */}
    <g className="sunny-long-ray">
      <path
        fill="#43647E"
        d="M174.495,49.723c0.936-2.209-0.096-4.761-2.307-5.697c-2.211-0.938-4.763,0.096-5.697,2.306l-7.959,18.792
c-0.014,0.034-0.021,0.07-0.035,0.103c2.787,0.818,5.487,1.9,8.064,3.232L174.495,49.723z"
      />
      <path
        fill="#43647E"
        d="M124.124,68.841c0.014,0.031,0.035,0.058,0.051,0.091c1.508-0.822,3.072-1.576,4.703-2.238
c1.087-0.44,2.184-0.82,3.283-1.17l-7.639-18.862c-0.901-2.226-3.436-3.298-5.662-2.397c-2.223,0.901-3.299,3.435-2.395,5.66
L124.124,68.841z"
      />
      <path
        fill="#43647E"
        d="M83.633,87.838l18.79,7.959c0.033,0.012,0.07,0.021,0.104,0.032c0.818-2.786,1.901-5.485,3.234-8.061
l-18.74-7.935c-2.209-0.937-4.761,0.098-5.696,2.308C80.388,84.354,81.423,86.904,83.633,87.838z"
      />
      <path
        fill="#43647E"
        d="M185.397,86.874c0.821,1.508,1.576,3.074,2.236,4.705c0.439,1.088,0.821,2.183,1.171,3.284l18.862-7.638
c2.226-0.902,3.299-3.437,2.398-5.661c-0.901-2.224-3.437-3.299-5.661-2.398l-18.916,7.66
C185.458,86.837,185.43,86.859,185.397,86.874z"
      />
      <path
        fill="#43647E"
        d="M117.135,167.308c-0.937,2.21,0.097,4.761,2.308,5.696c1.105,0.469,2.295,0.445,3.324,0.027
c1.034-0.418,1.905-1.229,2.371-2.334l7.959-18.789c0.016-0.035,0.023-0.071,0.037-0.104c-2.787-0.818-5.488-1.901-8.065-3.233
L117.135,167.308z"
      />
      <path
        fill="#43647E"
        d="M167.503,148.19c-0.012-0.033-0.031-0.062-0.047-0.093c-1.508,0.822-3.074,1.574-4.704,2.238
c-1.089,0.439-2.185,0.82-3.284,1.17l7.639,18.863c0.901,2.225,3.436,3.297,5.662,2.395c2.223-0.901,3.297-3.434,2.397-5.659
L167.503,148.19z"
      />
      <path
        fill="#43647E"
        d="M106.233,130.157c-0.824-1.51-1.578-3.074-2.238-4.707c-0.441-1.085-0.821-2.183-1.171-3.282l-18.862,7.641
c-2.225,0.899-3.297,3.436-2.396,5.658c0.9,2.227,3.435,3.299,5.66,2.398l18.914-7.66
C106.173,130.191,106.2,130.172,106.233,130.157z"
      />
      <path
        fill="#43647E"
        d="M207.997,129.191l-18.791-7.959c-0.033-0.014-0.068-0.02-0.104-0.033c-0.818,2.786-1.9,5.484-3.234,8.062
l18.739,7.936c1.104,0.467,2.295,0.443,3.327,0.025c1.029-0.417,1.902-1.228,2.371-2.334
C211.24,132.678,210.207,130.127,207.997,129.191z"
      />
    </g>
    {/*       Sun body */}
    <g className="sunny-body">
      <path
        fill="#43647E"
        d="M178.702,95.196c-7.357-18.162-28.043-26.923-46.205-19.568c-18.164,7.356-26.925,28.045-19.568,46.205
c7.354,18.165,28.043,26.926,46.205,19.569C177.298,134.045,186.058,113.36,178.702,95.196z M153.348,82.979
c-0.411,1.812-2.217,2.948-4.026,2.535c-4.427-1.007-8.997-0.636-13.221,1.075c-5.488,2.224-9.782,6.45-12.091,11.9
c-2.308,5.452-2.356,11.475-0.134,16.964c0.697,1.721-0.134,3.684-1.857,4.381c-0.413,0.168-0.841,0.248-1.262,0.248
c-1.33,0-2.588-0.795-3.117-2.104c-2.898-7.154-2.836-15.008,0.174-22.113c3.007-7.108,8.605-12.619,15.76-15.516
c5.504-2.229,11.469-2.715,17.241-1.398C152.626,79.363,153.762,81.167,153.348,82.979z"
      />
    </g>
    {/*       Cloud offset */}
    <g className="cloud-offset">
      <path
        fill="#43647E"
        d="M113.903,179.264c-6.173,0-12.273-1.229-17.931-3.585
c-6.062,2.515-12.218,3.585-19.999,3.585c-8.325,0-16.356-1.866-23.959-5.559c-5.329,2.711-11.262,4.119-17.492,4.119
c-21.27,0-38.574-17.306-38.574-38.576c0-15.345,9.325-29.175,22.996-35.269c6.653-25.268,29.615-42.96,57.029-42.96
c19.873,0,38.259,9.958,49.18,26.313c20.532,5.085,35.406,23.653,35.406,45.276C160.56,158.334,139.63,179.264,113.903,179.264z"
      />
    </g>
    {/*       Main cloud */}
    <g className="main-cloud">
      <path
        fill="#43647E"
        d="M118.294,97.231c-8.359-15.388-24.715-25.212-42.32-25.212c-24.457,0-44.283,17.108-47.506,40.333
c-12.301,2.767-21.52,13.771-21.52,26.896c0,15.205,12.369,27.576,27.574,27.576c6.396,0,12.348-2.078,17.133-5.917
c7.713,4.944,15.705,7.356,24.318,7.356c8.145,0,13.68-1.295,20.043-4.816c5.418,3.152,11.541,4.816,17.887,4.816
      c19.662,0,35.656-15.996,35.656-35.656C149.56,114.432,135.888,99.401,118.294,97.231z"
      />
    </g>
  </svg>
)

const Cloudy = () => (
  <svg className="icon icon-cloudy" viewBox="0 0 220 220">
    {/*       Small cloud */}
    <g className="small-cloud">
      <path
        fill="#43647E"
        d="M69.054,67.463c-5.109-9.405-15.105-15.409-25.866-15.409c-14.947,0-27.066,10.456-29.036,24.651
C6.634,78.396,1,85.121,1,93.143c0,9.293,7.561,16.854,16.853,16.854c3.911,0,7.547-1.27,10.472-3.617
c4.715,3.022,9.6,4.497,14.864,4.497c4.978,0,8.361-0.792,12.25-2.944c3.312,1.927,7.053,2.944,10.932,2.944
c12.016,0,21.792-9.776,21.792-21.792C88.162,77.976,79.807,68.789,69.054,67.463z"
      />
    </g>
    {/*       Cloud offset */}
    <g className="cloud-offset">
      <path
        fill="#43647E"
        d="M113.903,179.264c-6.173,0-12.273-1.229-17.931-3.585
c-6.062,2.515-12.218,3.585-19.999,3.585c-8.325,0-16.356-1.866-23.959-5.559c-5.329,2.711-11.262,4.119-17.492,4.119
c-21.27,0-38.574-17.306-38.574-38.576c0-15.345,9.325-29.175,22.996-35.269c6.653-25.268,29.615-42.96,57.029-42.96
c19.873,0,38.259,9.958,49.18,26.313c20.532,5.085,35.406,23.653,35.406,45.276C160.56,158.334,139.63,179.264,113.903,179.264z"
      />
    </g>
    {/*       Main cloud */}
    <g className="main-cloud">
      <path
        fill="#43647E"
        d="M118.294,97.231c-8.359-15.388-24.715-25.212-42.32-25.212c-24.457,0-44.283,17.108-47.506,40.333
c-12.301,2.767-21.52,13.771-21.52,26.896c0,15.205,12.369,27.576,27.574,27.576c6.396,0,12.348-2.078,17.133-5.917
c7.713,4.944,15.705,7.356,24.318,7.356c8.145,0,13.68-1.295,20.043-4.816c5.418,3.152,11.541,4.816,17.887,4.816
      c19.662,0,35.656-15.996,35.656-35.656C149.56,114.432,135.888,99.401,118.294,97.231z"
      />
    </g>
  </svg>
)

const Windy = () => (
  <svg className="icon icon-windy" viewBox="0 0 220 220">
    {/*       Small cloud */}
    <g className="small-cloud">
      <path
        fill="#43647E"
        d="M69.054,67.463c-5.109-9.405-15.105-15.409-25.866-15.409c-14.947,0-27.066,10.456-29.036,24.651
C6.634,78.396,1,85.121,1,93.143c0,9.293,7.561,16.854,16.853,16.854c3.911,0,7.547-1.27,10.472-3.617
c4.715,3.022,9.6,4.497,14.864,4.497c4.978,0,8.361-0.792,12.25-2.944c3.312,1.927,7.053,2.944,10.932,2.944
c12.016,0,21.792-9.776,21.792-21.792C88.162,77.976,79.807,68.789,69.054,67.463z"
      />
    </g>
    {/*       Cloud offset */}
    <g className="cloud-offset">
      <path
        fill="#43647E"
        d="M113.903,179.264c-6.173,0-12.273-1.229-17.931-3.585
c-6.062,2.515-12.218,3.585-19.999,3.585c-8.325,0-16.356-1.866-23.959-5.559c-5.329,2.711-11.262,4.119-17.492,4.119
c-21.27,0-38.574-17.306-38.574-38.576c0-15.345,9.325-29.175,22.996-35.269c6.653-25.268,29.615-42.96,57.029-42.96
c19.873,0,38.259,9.958,49.18,26.313c20.532,5.085,35.406,23.653,35.406,45.276C160.56,158.334,139.63,179.264,113.903,179.264z"
      />
    </g>
    {/*       Main cloud */}
    <g className="main-cloud">
      <path
        fill="#43647E"
        d="M118.294,97.231c-8.359-15.388-24.715-25.212-42.32-25.212c-24.457,0-44.283,17.108-47.506,40.333
c-12.301,2.767-21.52,13.771-21.52,26.896c0,15.205,12.369,27.576,27.574,27.576c6.396,0,12.348-2.078,17.133-5.917
c7.713,4.944,15.705,7.356,24.318,7.356c8.145,0,13.68-1.295,20.043-4.816c5.418,3.152,11.541,4.816,17.887,4.816
      c19.662,0,35.656-15.996,35.656-35.656C149.56,114.432,135.888,99.401,118.294,97.231z"
      />
    </g>
    <g className="wind-string">
      <path
        fill="none"
        stroke="#43637D"
        strokeMiterlimit={10}
        d="M85.263,105.176
c3.002-1.646,6.403-2.549,9.903-2.549c11.375,0,20.633,9.256,20.633,20.633s-9.258,20.633-20.633,20.633H3.473"
      />
      <path
        fill="none"
        stroke="#43637D"
        strokeMiterlimit={10}
        d="M69.756,113.884
c1.62-0.888,3.457-1.376,5.345-1.376c6.14,0,11.136,4.996,11.136,11.137c0,6.14-4.996,11.136-11.136,11.136H25.313"
      />
      <path
        fill="none"
        stroke="#43637D"
        strokeMiterlimit={10}
        d="M75.536,180.462
c2.131,1.166,4.545,1.809,7.027,1.809c8.072,0,14.642-6.569,14.642-14.643s-6.569-14.643-14.642-14.643H18.043"
      />
    </g>
  </svg>
)

const Rainy = () => (
  <svg className="icon icon-rainy" viewBox="0 0 220 220">
    <g className="rain-drops">
      <path
        fill="#43647E"
        d="M69.942,143.08c-0.852,6.32-11.666,18.842-11.666,27.824c0,6.443,5.225,11.664,11.666,11.664
c6.443,0,11.666-5.221,11.666-11.664C81.608,161.521,70.696,149.551,69.942,143.08z"
      />
      <path
        fill="#43647E"
        d="M110.126,143.08c-0.854,6.32-11.666,18.842-11.666,27.824c0,6.443,5.223,11.664,11.666,11.664
s11.666-5.221,11.666-11.664C121.792,161.521,110.878,149.551,110.126,143.08z"
      />
      <path
        fill="#43647E"
        d="M150.308,143.08c-0.854,6.32-11.664,18.842-11.664,27.824c0,6.443,5.223,11.664,11.664,11.664
c6.445,0,11.666-5.221,11.666-11.664C161.974,161.521,151.062,149.551,150.308,143.08z"
      />
    </g>
    <g className="cloud-offset">
      <path
        fill="#43647E"
        d="M144.901,144.943c-6.173,0-12.273-1.229-17.932-3.586c-6.06,2.516-12.216,3.586-19.998,3.586
c-8.323,0-16.355-1.867-23.959-5.56c-5.329,2.71-11.261,4.118-17.492,4.118c-21.27,0-38.574-17.305-38.574-38.575
c0-15.344,9.324-29.174,22.996-35.267c6.651-25.269,29.613-42.961,57.03-42.961c19.872,0,38.257,9.958,49.177,26.311
c20.533,5.087,35.409,23.656,35.409,45.277C191.558,124.014,170.628,144.943,144.901,144.943z"
      />
    </g>
    <g className="rain-cloud">
      <path
        fill="#43647E"
        d="M150.288,62.909c-8.357-15.386-24.713-25.209-42.316-25.209c-24.459,0-44.285,17.107-47.506,40.334
c-12.301,2.766-21.52,13.77-21.52,26.894c0,15.204,12.369,27.575,27.574,27.575c6.396,0,12.348-2.076,17.133-5.916
c7.713,4.943,15.701,7.357,24.318,7.357c8.145,0,13.682-1.295,20.041-4.818c5.42,3.154,11.541,4.818,17.889,4.818
c19.66,0,35.656-15.996,35.656-35.656C181.558,80.111,167.886,65.081,150.288,62.909z"
      />
    </g>
  </svg>
)

const SunShower = () => (
  <svg className="icon icon-sunshower" viewBox="0 0 220 220">
    {/*       Short rays */}
    <g className="sunny-short-ray">
      <path
        fill="#43647E"
        d="M149.347,30.932l-0.014-8.394c-0.003-1.617-1.318-2.927-2.935-2.925c-1.616,0.003-2.924,1.318-2.924,2.935
l0.014,8.474C145.45,30.86,147.406,30.839,149.347,30.932z"
      />
      <path
        fill="#43647E"
        d="M112.781,46.829c1.257-1.484,2.607-2.9,4.063-4.221l-5.938-5.918c-1.146-1.142-3-1.14-4.143,0.005
c-1.142,1.146-1.139,3.001,0.008,4.142L112.781,46.829z"
      />
      <path
        fill="#43647E"
        d="M200.662,78.134c0.388-0.001,0.756-0.078,1.094-0.213c1.074-0.437,1.83-1.492,1.83-2.721
c-0.004-1.617-1.315-2.928-2.933-2.926l-8.478,0.016c0.164,1.959,0.186,3.916,0.091,5.855L200.662,78.134z"
      />
      <path
        fill="#43647E"
        d="M180.593,45.644l5.918-5.937c1.144-1.146,1.14-3-0.005-4.142c-1.147-1.143-3.001-1.14-4.143,0.004
l-5.992,6.013C177.856,42.838,179.27,44.189,180.593,45.644z"
      />
      <path
        fill="#43647E"
        d="M93.738,73.868c-1.619,0.002-2.928,1.316-2.924,2.935c0.004,1.615,1.318,2.925,2.934,2.923l8.473-0.014
c-0.16-1.963-0.182-3.917-0.088-5.857L93.738,73.868z"
      />
      <path
        fill="#43647E"
        d="M181.62,105.171c-1.258,1.484-2.609,2.899-4.063,4.223l5.939,5.918c0.857,0.855,2.111,1.068,3.167,0.639
c0.354-0.143,0.687-0.357,0.974-0.646c1.143-1.145,1.139-3-0.006-4.141L181.62,105.171z"
      />
      <path
        fill="#43647E"
        d="M145.055,121.067l0.013,8.395c0.003,1.617,1.317,2.928,2.934,2.922c0.388,0,0.755-0.074,1.093-0.213
c1.077-0.434,1.834-1.488,1.83-2.719l-0.014-8.475C148.95,121.14,146.994,121.161,145.055,121.067z"
      />
      <path
        fill="#43647E"
        d="M113.807,106.356l-5.917,5.938c-1.142,1.145-1.141,3,0.006,4.143c0.857,0.855,2.112,1.068,3.17,0.641
c0.354-0.145,0.687-0.361,0.972-0.646l5.991-6.012C116.545,109.161,115.129,107.812,113.807,106.356z"
      />
    </g>
    {/*       Long rays */}
    <g className="sunny-long-ray">
      <path
        fill="#43647E"
        d="M175.881,17.208c0.936-2.209-0.096-4.761-2.307-5.697c-2.211-0.938-4.763,0.096-5.697,2.306l-7.959,18.792
c-0.014,0.034-0.021,0.07-0.035,0.103c2.787,0.818,5.487,1.9,8.064,3.232L175.881,17.208z"
      />
      <path
        fill="#43647E"
        d="M125.51,36.326c0.014,0.031,0.035,0.058,0.051,0.091c1.508-0.822,3.072-1.576,4.703-2.238
c1.087-0.44,2.184-0.82,3.283-1.17l-7.639-18.862c-0.901-2.226-3.436-3.298-5.662-2.397c-2.223,0.901-3.299,3.435-2.395,5.66
L125.51,36.326z"
      />
      <path
        fill="#43647E"
        d="M85.019,55.324l18.79,7.959c0.033,0.012,0.07,0.021,0.104,0.032c0.818-2.786,1.901-5.485,3.234-8.061
l-18.74-7.935c-2.209-0.937-4.761,0.098-5.696,2.308C81.773,51.839,82.809,54.389,85.019,55.324z"
      />
      <path
        fill="#43647E"
        d="M186.783,54.359c0.821,1.508,1.576,3.074,2.236,4.705c0.439,1.088,0.821,2.183,1.171,3.284l18.862-7.638
c2.226-0.902,3.299-3.437,2.398-5.661c-0.901-2.224-3.437-3.299-5.661-2.398l-18.916,7.66
C186.844,54.323,186.815,54.345,186.783,54.359z"
      />
      <path
        fill="#43647E"
        d="M118.521,134.792c-0.937,2.211,0.097,4.762,2.308,5.697c1.105,0.469,2.295,0.445,3.324,0.027
c1.034-0.418,1.905-1.229,2.371-2.334l7.959-18.789c0.016-0.035,0.023-0.072,0.037-0.105c-2.787-0.818-5.488-1.9-8.065-3.232
L118.521,134.792z"
      />
      <path
        fill="#43647E"
        d="M168.889,115.675c-0.012-0.033-0.031-0.061-0.047-0.092c-1.508,0.822-3.074,1.574-4.704,2.238
c-1.089,0.439-2.185,0.82-3.284,1.17l7.639,18.863c0.901,2.225,3.436,3.297,5.662,2.395c2.223-0.902,3.297-3.434,2.397-5.66
L168.889,115.675z"
      />
      <path
        fill="#43647E"
        d="M107.619,97.643c-0.824-1.51-1.578-3.074-2.238-4.707c-0.441-1.085-0.821-2.183-1.171-3.282l-18.862,7.641
c-2.225,0.899-3.297,3.436-2.396,5.658c0.9,2.227,3.435,3.299,5.66,2.398l18.914-7.66
C107.559,97.677,107.586,97.657,107.619,97.643z"
      />
      <path
        fill="#43647E"
        d="M209.383,96.677l-18.791-7.959c-0.033-0.014-0.068-0.02-0.104-0.033c-0.818,2.786-1.9,5.484-3.234,8.062
l18.739,7.936c1.104,0.467,2.295,0.443,3.327,0.025c1.029-0.417,1.902-1.228,2.371-2.334
C212.626,100.163,211.593,97.612,209.383,96.677z"
      />
    </g>
    {/*       Sun body */}
    <g className="sunny-body">
      <path
        fill="#43647E"
        d="M180.088,62.681c-7.357-18.162-28.043-26.923-46.205-19.568c-18.164,7.356-26.925,28.044-19.568,46.205
c7.354,18.165,28.043,26.926,46.205,19.569C178.684,101.53,187.443,80.846,180.088,62.681z M154.733,50.464
c-0.411,1.812-2.217,2.948-4.026,2.535c-4.427-1.007-8.997-0.636-13.221,1.075c-5.488,2.224-9.782,6.45-12.091,11.9
c-2.308,5.453-2.356,11.475-0.134,16.964c0.697,1.721-0.134,3.684-1.857,4.381c-0.413,0.168-0.841,0.248-1.262,0.248
c-1.33,0-2.588-0.795-3.117-2.104c-2.898-7.154-2.836-15.008,0.174-22.113c3.007-7.108,8.605-12.619,15.76-15.516
c5.504-2.229,11.469-2.715,17.241-1.398C154.012,46.849,155.147,48.652,154.733,50.464z"
      />
    </g>
    {/*       Rain drops */}
    <g className="rain-drops">
      <path
        fill="#43647E"
        d="M37.69,141.629c-0.852,6.32-11.666,18.842-11.666,27.824c0,6.443,5.225,11.664,11.666,11.664
c6.443,0,11.666-5.221,11.666-11.664C49.356,160.07,38.444,148.1,37.69,141.629z"
      />
      <path
        fill="#43647E"
        d="M77.874,141.629c-0.854,6.32-11.666,18.842-11.666,27.824c0,6.443,5.223,11.664,11.666,11.664
s11.666-5.221,11.666-11.664C89.54,160.07,78.626,148.1,77.874,141.629z"
      />
      <path
        fill="#43647E"
        d="M118.056,141.629c-0.854,6.32-11.664,18.842-11.664,27.824c0,6.443,5.223,11.664,11.664,11.664
c6.445,0,11.666-5.221,11.666-11.664C129.722,160.07,118.81,148.1,118.056,141.629z"
      />
    </g>
    {/*       Cloud offset */}
    <g className="cloud-offset">
      <path
        fill="#43647E"
        d="M113.903,143.264c-6.173,0-12.273-1.229-17.931-3.585c-6.062,2.515-12.218,3.585-19.999,3.585
c-8.325,0-16.356-1.866-23.959-5.559c-5.329,2.711-11.262,4.119-17.492,4.119c-21.27,0-38.574-17.306-38.574-38.576
c0-15.344,9.325-29.175,22.996-35.269c6.653-25.268,29.615-42.96,57.029-42.96c19.873,0,38.259,9.958,49.18,26.313
c20.532,5.085,35.406,23.653,35.406,45.276C160.56,122.334,139.63,143.264,113.903,143.264z"
      />
    </g>
    {/*       Main cloud */}
    <g className="rain-cloud">
      <path
        fill="#43647E"
        d="M118.294,61.231c-8.359-15.388-24.715-25.212-42.32-25.212c-24.457,0-44.283,17.108-47.506,40.333
c-12.301,2.767-21.52,13.771-21.52,26.896c0,15.205,12.369,27.576,27.574,27.576c6.396,0,12.348-2.078,17.133-5.917
c7.713,4.944,15.705,7.356,24.318,7.356c8.145,0,13.68-1.295,20.043-4.816c5.418,3.152,11.541,4.816,17.887,4.816
c19.662,0,35.656-15.996,35.656-35.656C149.56,78.432,135.888,63.401,118.294,61.231z"
      />
    </g>
  </svg>
)

const Snowy = () => (
  <svg className="icon icon-sunshower" viewBox="0 0 220 220">
    <g className="snowflakes">
      <path
        fill="#43647E"
        d="M84.535,166.239l-5.663,1.73l-3.644-2.104c0.089-0.392,0.141-0.798,0.141-1.218
c0-0.418-0.052-0.824-0.141-1.216l3.645-2.104l5.662,1.729c0.156,0.048,0.314,0.071,0.47,0.071c0.688,0,1.324-0.445,1.536-1.138
c0.26-0.849-0.218-1.747-1.067-2.006l-2.795-0.854l1.482-0.856c0.769-0.443,1.032-1.426,0.588-2.194s-1.426-1.032-2.195-0.589
l-1.483,0.856l0.658-2.848c0.2-0.865-0.339-1.728-1.204-1.928c-0.865-0.2-1.728,0.339-1.927,1.204l-1.333,5.769l-3.648,2.106
c-0.595-0.553-1.309-0.979-2.104-1.224v-4.204l4.33-4.039c0.649-0.605,0.685-1.621,0.079-2.271
c-0.605-0.648-1.622-0.685-2.271-0.078l-2.138,1.993v-1.712c0-0.888-0.72-1.607-1.606-1.607c-0.888,0-1.607,0.72-1.607,1.607v1.712
l-2.138-1.993c-0.648-0.606-1.666-0.57-2.271,0.078c-0.605,0.649-0.57,1.665,0.079,2.271l4.33,4.039v4.204
c-0.795,0.245-1.509,0.67-2.104,1.224l-3.649-2.106l-1.332-5.77c-0.2-0.864-1.062-1.403-1.927-1.203
c-0.865,0.199-1.403,1.063-1.204,1.927l0.658,2.849l-1.483-0.856c-0.769-0.443-1.752-0.18-2.195,0.589
c-0.444,0.768-0.18,1.751,0.588,2.194l1.483,0.856l-2.796,0.854c-0.849,0.26-1.326,1.158-1.067,2.006
c0.212,0.693,0.848,1.139,1.537,1.139c0.155,0,0.313-0.023,0.47-0.071l5.662-1.729l3.645,2.104
c-0.09,0.393-0.142,0.798-0.142,1.217s0.052,0.825,0.142,1.218l-3.646,2.104l-5.662-1.73c-0.848-0.259-1.747,0.218-2.006,1.067
c-0.259,0.849,0.219,1.746,1.067,2.006l2.796,0.854l-1.483,0.856c-0.769,0.443-1.032,1.427-0.588,2.195
c0.298,0.515,0.838,0.804,1.393,0.804c0.273,0,0.549-0.07,0.802-0.216l1.483-0.856l-0.658,2.849
c-0.2,0.864,0.339,1.728,1.204,1.927c0.121,0.028,0.243,0.042,0.362,0.042c0.731,0,1.393-0.503,1.564-1.245l1.333-5.769
l3.649-2.107c0.595,0.553,1.31,0.979,2.104,1.224v4.204l-4.329,4.039c-0.649,0.604-0.685,1.622-0.079,2.271
c0.605,0.649,1.623,0.685,2.271,0.079l2.137-1.994v1.712c0,0.888,0.72,1.607,1.606,1.607c0.887,0,1.607-0.72,1.607-1.607v-1.712
l2.138,1.994c0.31,0.289,0.703,0.432,1.095,0.432c0.431,0,0.859-0.171,1.176-0.511c0.605-0.648,0.57-1.666-0.079-2.271l-4.33-4.039
v-4.204c0.795-0.245,1.509-0.671,2.104-1.224l3.649,2.107l1.333,5.769c0.171,0.743,0.833,1.245,1.564,1.245
c0.12,0,0.241-0.014,0.362-0.042c0.865-0.199,1.404-1.063,1.205-1.927l-0.658-2.849l1.482,0.856
c0.253,0.146,0.529,0.216,0.802,0.216c0.556,0,1.096-0.288,1.393-0.804c0.444-0.769,0.181-1.751-0.588-2.194l-1.483-0.857
l2.796-0.854c0.849-0.259,1.327-1.157,1.067-2.006C86.281,166.457,85.382,165.979,84.535,166.239z M69.906,167.54
c-1.594,0-2.892-1.297-2.892-2.893c0-1.594,1.297-2.892,2.892-2.892c1.595,0,2.893,1.298,2.893,2.892
C72.798,166.243,71.501,167.54,69.906,167.54z"
      />
      <path
        fill="#43647E"
        d="M123.582,166.239l-5.662,1.73l-3.645-2.104c0.09-0.392,0.142-0.798,0.142-1.218
c0-0.418-0.052-0.824-0.142-1.216l3.645-2.104l5.662,1.729c0.156,0.048,0.314,0.071,0.471,0.071c0.688,0,1.324-0.445,1.535-1.138
c0.26-0.849-0.218-1.747-1.066-2.006l-2.795-0.854l1.482-0.856c0.768-0.443,1.031-1.426,0.588-2.194s-1.426-1.032-2.195-0.589
l-1.482,0.856l0.658-2.848c0.2-0.865-0.339-1.728-1.203-1.928c-0.865-0.2-1.729,0.339-1.928,1.204l-1.333,5.769l-3.648,2.106
c-0.595-0.553-1.31-0.979-2.104-1.224v-4.204l4.33-4.039c0.648-0.605,0.685-1.621,0.078-2.271c-0.604-0.648-1.621-0.685-2.27-0.078
l-2.138,1.993v-1.712c0-0.888-0.72-1.607-1.606-1.607c-0.888,0-1.607,0.72-1.607,1.607v1.712l-2.138-1.993
c-0.648-0.606-1.666-0.57-2.271,0.078c-0.605,0.649-0.57,1.665,0.079,2.271l4.33,4.039v4.204c-0.795,0.245-1.509,0.67-2.104,1.224
l-3.649-2.106l-1.332-5.77c-0.2-0.864-1.062-1.403-1.927-1.203c-0.865,0.199-1.403,1.063-1.204,1.927l0.658,2.849l-1.483-0.856
c-0.769-0.443-1.752-0.18-2.195,0.589c-0.444,0.768-0.18,1.751,0.588,2.194l1.483,0.856l-2.796,0.854
c-0.849,0.26-1.326,1.158-1.067,2.006c0.212,0.693,0.848,1.139,1.537,1.139c0.155,0,0.313-0.023,0.47-0.071l5.662-1.729
l3.645,2.104c-0.09,0.393-0.142,0.798-0.142,1.217s0.052,0.825,0.142,1.218l-3.646,2.104l-5.662-1.73
c-0.848-0.259-1.747,0.218-2.006,1.067c-0.259,0.849,0.219,1.746,1.067,2.006l2.796,0.854l-1.483,0.856
c-0.769,0.443-1.032,1.427-0.588,2.195c0.298,0.515,0.838,0.804,1.393,0.804c0.273,0,0.549-0.07,0.802-0.216l1.483-0.856
l-0.658,2.849c-0.2,0.864,0.339,1.728,1.204,1.927c0.121,0.028,0.243,0.042,0.362,0.042c0.731,0,1.393-0.503,1.564-1.245
l1.333-5.769l3.649-2.107c0.595,0.553,1.31,0.979,2.104,1.224v4.204l-4.329,4.039c-0.649,0.604-0.685,1.622-0.079,2.271
c0.605,0.649,1.623,0.685,2.271,0.079l2.137-1.994v1.712c0,0.888,0.72,1.607,1.606,1.607c0.887,0,1.607-0.72,1.607-1.607v-1.712
l2.138,1.994c0.31,0.289,0.703,0.432,1.095,0.432c0.432,0,0.859-0.171,1.176-0.511c0.605-0.648,0.57-1.666-0.078-2.271l-4.33-4.039
v-4.204c0.795-0.245,1.51-0.671,2.104-1.224l3.65,2.107l1.332,5.769c0.172,0.743,0.832,1.245,1.564,1.245
c0.119,0,0.24-0.014,0.361-0.042c0.865-0.199,1.404-1.063,1.205-1.927l-0.658-2.849l1.482,0.856
c0.254,0.146,0.529,0.216,0.802,0.216c0.556,0,1.097-0.288,1.394-0.804c0.443-0.769,0.18-1.751-0.588-2.194l-1.483-0.857
l2.796-0.854c0.849-0.259,1.326-1.157,1.066-2.006C125.328,166.457,124.43,165.979,123.582,166.239z M108.954,167.54
c-1.594,0-2.892-1.297-2.892-2.893c0-1.594,1.297-2.892,2.892-2.892c1.595,0,2.892,1.298,2.892,2.892
C111.846,166.243,110.549,167.54,108.954,167.54z"
      />
      <path
        fill="#43647E"
        d="M162.632,166.239l-5.662,1.73l-3.645-2.104c0.09-0.392,0.142-0.798,0.142-1.218
c0-0.418-0.052-0.824-0.142-1.216l3.645-2.104l5.662,1.729c0.156,0.048,0.314,0.071,0.471,0.071c0.688,0,1.324-0.445,1.535-1.138
c0.26-0.849-0.218-1.747-1.066-2.006l-2.795-0.854l1.482-0.856c0.768-0.443,1.031-1.426,0.588-2.194s-1.426-1.032-2.195-0.589
l-1.482,0.856l0.658-2.848c0.2-0.865-0.339-1.728-1.203-1.928c-0.865-0.2-1.729,0.339-1.928,1.204l-1.333,5.769l-3.648,2.106
c-0.595-0.553-1.31-0.979-2.104-1.224v-4.204l4.329-4.039c0.648-0.605,0.685-1.621,0.078-2.271
c-0.604-0.648-1.621-0.685-2.27-0.078l-2.138,1.993v-1.712c0-0.888-0.721-1.607-1.607-1.607s-1.606,0.72-1.606,1.607v1.712
l-2.138-1.993c-0.648-0.606-1.666-0.57-2.271,0.078c-0.605,0.649-0.57,1.665,0.08,2.271l4.329,4.039v4.204
c-0.795,0.245-1.509,0.67-2.104,1.224l-3.648-2.106l-1.332-5.77c-0.2-0.864-1.063-1.403-1.928-1.203
c-0.865,0.199-1.403,1.063-1.203,1.927l0.658,2.849l-1.483-0.856c-0.769-0.443-1.752-0.18-2.195,0.589
c-0.444,0.768-0.181,1.751,0.589,2.194l1.482,0.856l-2.796,0.854c-0.849,0.26-1.326,1.158-1.067,2.006
c0.212,0.693,0.848,1.139,1.537,1.139c0.154,0,0.313-0.023,0.469-0.071l5.662-1.729l3.646,2.104
c-0.09,0.393-0.142,0.798-0.142,1.217s0.052,0.825,0.142,1.218l-3.646,2.104l-5.662-1.73c-0.848-0.259-1.746,0.218-2.006,1.067
c-0.259,0.849,0.219,1.746,1.067,2.006l2.796,0.854l-1.482,0.856c-0.77,0.443-1.033,1.427-0.589,2.195
c0.298,0.515,0.838,0.804,1.394,0.804c0.272,0,0.549-0.07,0.802-0.216l1.483-0.856l-0.658,2.849
c-0.201,0.864,0.338,1.728,1.203,1.927c0.121,0.028,0.243,0.042,0.362,0.042c0.731,0,1.394-0.503,1.564-1.245l1.333-5.769
l3.648-2.107c0.595,0.553,1.31,0.979,2.104,1.224v4.204l-4.328,4.039c-0.65,0.604-0.686,1.622-0.08,2.271
c0.605,0.649,1.623,0.685,2.271,0.079l2.137-1.994v1.712c0,0.888,0.721,1.607,1.607,1.607s1.606-0.72,1.606-1.607v-1.712
l2.138,1.994c0.31,0.289,0.703,0.432,1.095,0.432c0.432,0,0.859-0.171,1.176-0.511c0.605-0.648,0.57-1.666-0.078-2.271l-4.33-4.039
v-4.204c0.795-0.245,1.51-0.671,2.104-1.224l3.65,2.107l1.332,5.769c0.172,0.743,0.832,1.245,1.564,1.245
c0.119,0,0.24-0.014,0.361-0.042c0.865-0.199,1.404-1.063,1.205-1.927l-0.658-2.849l1.482,0.856
c0.254,0.146,0.529,0.216,0.802,0.216c0.556,0,1.097-0.288,1.394-0.804c0.443-0.769,0.18-1.751-0.588-2.194l-1.483-0.857
l2.796-0.854c0.849-0.259,1.326-1.157,1.066-2.006C164.378,166.457,163.479,165.979,162.632,166.239z M148.004,167.54
c-1.595,0-2.893-1.297-2.893-2.893c0-1.594,1.298-2.892,2.893-2.892s2.892,1.298,2.892,2.892
C150.896,166.243,149.599,167.54,148.004,167.54z"
      />
    </g>
    <g className="cloud-offset">
      <path
        fill="#43647E"
        d="M144.979,144.945c-6.177,0-12.277-1.229-17.934-3.585c-6.06,2.515-12.216,3.585-19.997,3.585
c-8.326,0-16.357-1.866-23.96-5.56c-5.329,2.71-11.261,4.118-17.491,4.118c-21.271,0-38.576-17.305-38.576-38.575
c0-15.344,9.325-29.173,22.996-35.267c6.651-25.269,29.614-42.96,57.032-42.96c19.87,0,38.255,9.958,49.176,26.31
c20.533,5.087,35.41,23.656,35.41,45.278C191.635,124.016,170.705,144.945,144.979,144.945z"
      />
    </g>
    <g className="snow-cloud">
      <path
        fill="#43647E"
        d="M149.365,62.911c-8.359-15.386-24.712-25.209-42.316-25.209c-24.461,0-44.287,17.107-47.508,40.333
c-12.299,2.766-21.52,13.77-21.52,26.894c0,15.206,12.369,27.575,27.576,27.575c6.395,0,12.346-2.076,17.133-5.916
c7.713,4.945,15.701,7.357,24.318,7.357c8.141,0,13.678-1.293,20.041-4.818c5.419,3.156,11.542,4.818,17.89,4.818
c19.658,0,35.655-15.994,35.655-35.656C180.635,80.114,166.961,65.083,149.365,62.911z"
      />
    </g>
  </svg>
)

const Rainbow = () => (
  <svg className="icon icon-rainbow" viewBox="0 0 220 220">
    <g className="rainbows">
      <path
        fill="none"
        stroke="#42637D"
        strokeMiterlimit={10}
        d="M40.5,130c0-38.388,31.117-69.5,69.5-69.5
c38.379,0,69.5,31.112,69.5,69.5"
      />
      <path
        fill="none"
        stroke="#42637D"
        strokeMiterlimit={10}
        d="M52,130c0-32.036,25.968-58,58-58c32.027,0,58,25.964,58,58"
      />
      <path
        fill="none"
        stroke="#42637D"
        strokeMiterlimit={10}
        d="M64.5,130c0-25.132,20.371-45.5,45.5-45.5
c25.126,0,45.5,20.368,45.5,45.5"
      />
      <path
        fill="none"
        stroke="#42637D"
        strokeMiterlimit={10}
        d="M80,130c0-16.568,13.432-30,30-30s30,13.432,30,30"
      />
    </g>
    <g className="cloud-offset">
      <path
        fill="#42637D"
        d="M80.718,169.467c-3.213,0-6.389-0.605-9.355-1.771c-3.163,1.24-6.401,1.771-10.438,1.771
c-4.333,0-8.519-0.927-12.494-2.762c-2.809,1.322-5.901,2.01-9.138,2.01c-11.795,0-21.392-9.595-21.392-21.389
c0-8.301,4.92-15.803,12.198-19.301c3.809-13.434,16.143-22.788,30.826-22.788c10.629,0,20.476,5.245,26.439,13.89
c11.024,2.955,18.961,13.028,18.961,24.731C106.325,157.979,94.838,169.467,80.718,169.467z"
      />
    </g>
    <g className="main-cloud">
      <path
        fill="#42637D"
        d="M83.01,125.395c-4.363-8.026-12.899-13.155-22.085-13.155c-12.766,0-23.111,8.93-24.795,21.053
c-6.418,1.442-11.229,7.187-11.229,14.035c0,7.934,6.457,14.389,14.392,14.389c3.336,0,6.441-1.082,8.94-3.086
c4.027,2.578,8.195,3.838,12.691,3.838c4.246,0,7.137-0.676,10.461-2.516c2.824,1.646,6.02,2.516,9.332,2.516
c10.26,0,18.607-8.348,18.607-18.606C99.325,134.373,92.19,126.527,83.01,125.395z"
      />
    </g>
    <g className="cloud-offset">
      <path
        fill="#42637D"
        d="M175.244,169.467c-3.212,0-6.389-0.605-9.355-1.771c-3.162,1.24-6.402,1.771-10.44,1.771
c-4.333,0-8.519-0.927-12.492-2.762c-2.81,1.324-5.901,2.01-9.14,2.01c-11.795,0-21.393-9.595-21.393-21.389
c0-8.301,4.922-15.803,12.202-19.301c3.81-13.435,16.142-22.788,30.821-22.788c10.631,0,20.479,5.246,26.439,13.89
c11.026,2.955,18.965,13.028,18.965,24.731C200.852,157.979,189.363,169.467,175.244,169.467z"
      />
    </g>
    <g className="main-cloud">
      <path
        fill="#42637D"
        d="M177.533,125.395c-4.361-8.026-12.896-13.155-22.086-13.155c-12.762,0-23.107,8.93-24.791,21.053
c-6.42,1.442-11.232,7.187-11.232,14.035c0,7.934,6.457,14.389,14.393,14.389c3.338,0,6.443-1.082,8.941-3.086
c4.025,2.578,8.195,3.838,12.689,3.838c4.25,0,7.141-0.676,10.461-2.516c2.828,1.646,6.023,2.516,9.336,2.516
c10.26,0,18.607-8.348,18.607-18.606C193.852,134.373,186.715,126.527,177.533,125.395z"
      />
    </g>
  </svg>
)
