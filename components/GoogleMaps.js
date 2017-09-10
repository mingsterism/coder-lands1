import React from 'react'
import scriptLoader from 'react-async-script-loader'

const API_KEY = '';
const MAPSTYLE = {
  height: "100vh", 
  width: "100%", 
  padding: '0px',
  margin: '0ps',
}

class GoogleMaps extends React.Component {
  constructor(props){
    super(props);
    this.map = null;    
  }

  componentDidMount = () => {
      document.body.style.margin = 0
    }
  componentWillUnmount = () => {
      document.body.style.margin = 8;
  }

  componentWillReceiveProps ({ isScriptLoaded, isScriptLoadSucceed }) {
    if (isScriptLoaded && !this.props.isScriptLoaded) { // load finished
      console.log("Script is loadaed...")
      if (isScriptLoadSucceed) {
        this.map = new window.google.maps.Map(this.refs.map, {
          center: {lat: 10.794234, lng: 106.706341},
          zoom: 15
        });

        if (navigator.geolocation) {
          console.log("Navigator geolocation: ", navigator.geolocation)
          navigator.geolocation.getCurrentPosition((position) => {
            const pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            this.map.setCenter(pos);

            const marker = new window.google.maps.Marker({
              position: pos,
              map: this.map,
              title: 'Hello World!'
            });                
          }, () => {
            console.log('navigator disabled');
          });
        } else {
          // Browser doesn't support Geolocation
          console.log('navigator disabled');
        }
      }
      else this.props.onError()
    }
  }

  render(){
    return (    
      <div>
        <div ref="map" style={ MAPSTYLE }></div>
        { !this.map && <div className="center-md">Loading...</div> } 
      </div>
      
    )
  }
}
export default scriptLoader(
  ['https://maps.googleapis.com/maps/api/js?key=' + API_KEY]
) (GoogleMaps);
