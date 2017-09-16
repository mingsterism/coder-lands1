import React from 'react'
import scriptLoader from 'react-async-script-loader'

const APIKEY = "AIzaSyA0lNuI8pwpbEgsDZbmuIlSLfY7GB1GyMM"
const MAPSTYLE = {
  height: "100vh", 
  width: "100%", 
  padding: '0px',
  margin: '0ps',
}

class NewComponent extends React.Component {
  constructor(props){
    super(props);
    this.map = null; 
    this.variableX = false;
  }

  componentDidMount() {
    if (this.props.isScriptLoaded && !this.variable) {
      this.loadMap()
   }
    console.log("FRONTEND Did mount -----------")
    console.log(this.props.isScriptLoaded)
    console.log(this.props.isScriptLoadSucceed)
  }

  componentDidUpdate() {
    if (this.props.isScriptLoaded && !this.variable) {
     this.loadMap()
   }
    console.log("FRONTEND Did update -----------")
    console.log(this.props.isScriptLoaded)
    console.log(this.props.isScriptLoadSucceed)
  }

  loadMap() {
    this.variableX = true;
    this.map = new window.google.maps.Map(this.refs.map, { 
      center: {lat: 3.1328, lng: 101.629}, 
      zoom: 4
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
          console.log('navigator disabled -----');
        const pos = {
          lat: 3.14, 
          lng: 101.3
        };
        const marker = new window.google.maps.Marker({
          position: pos, 
          map: this.map,
          title: "Hello map"
        });
        console.log("$$$$$$$$: ", marker)
        marker.setMap(this.map);
        });
      } else {
        // Browser doesn't support Geolocation
        console.log('navigator disabled');
        const pos = {
          lat: 3.14, 
          lng: 101.3
        };
        const marker = new window.google.maps.Marker({
          position: pos, 
          map: this.map,
          title: "Hello map"
        });
        console.log("$$$$$$$$: ", marker)
        marker.setMap(map);
      }
    }
  render() {
    // console.log('Rendering herer from client ========================')
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
) (NewComponent);
