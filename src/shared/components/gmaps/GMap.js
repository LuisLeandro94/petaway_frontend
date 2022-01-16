import React from 'react'

import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({text}) => <div>{text}</div>

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 41.440156907797935,
      lng: -8.47898214622394
    },
    zoom: 17,
    key: process.env.REACT_APP_MAPS
  }

  console.log(defaultProps)

  return (
    <div style={{height: '100vh', width: '100%'}}>
      <GoogleMapReact
        bootstrapURLKeys={{key: defaultProps.key}}
        defaultCenter={defaultProps.center}
        yesIWantToUseGoogleMapApiInternals
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={41.440156907797935}
          lng={-8.47898214622394}
          text='IPCA Famalicão'
        />
      </GoogleMapReact>
    </div>
  )
}
