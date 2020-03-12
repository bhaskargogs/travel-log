import React, { useState, useEffect } from "react";
import ReactMapGL from "react-map-gl";

import { listLogEntries } from "./Api";

const App = () => {
 const [viewport, setViewport] = useState({
  width: "100vw",
  height: "100vh",
  latitude: 37.7577,
  longitude: -122.4376,
  zoom: 3
 });

 useEffect(() => {
   (async () => {
     const logEntries = await listLogEntries();
     console.log(logEntries);
   })();
 }, []);

 return (
  <ReactMapGL
   {...viewport}
   onViewportChange={setViewport}
   mapStyle="mapbox://styles/sbrueck/ck5u5v1bt184i1il6mpii6l4r"
   mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
  />
 );
};

export default App;
