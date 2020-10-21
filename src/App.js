import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      coords: {
        latitude: 0,
        longitude: 0,
      },
    };
  }
  componentDidMount() {
    const { latitude, longitude } = this.state.coords;
    let apiUrl = `http://api.weatherstack.com/current?access_key=dee5627cc85a3d99ce9de01bc45a9129&query=${latitude},${longitude}`;

    //get geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        let newCoords = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        this.setState({
          coords: newCoords,
        });

        const response = await axios.get(apiUrl);
        console.log(response.data);
      });
    } else {
      console.log("Not supported");
    }
  }
  render() {
    return <div className="App"></div>;
  }
}

export default App;
