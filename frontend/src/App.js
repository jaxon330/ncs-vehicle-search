import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Search from "./shared/components/Search/index";
import VehicleDetails from "./shared/components/VehicleDetails/index";
import { Container } from "./generalStyles.js";

const App = () => {
  const [vehicleInfo, setVehicleInfo] = useState(null);
  const [vehicleImage, setVehicleImage] = useState(null);
  const [vehicleVideo, setVehicleVideo] = useState(null);



  return (
    <Container>

        <Routes>
          <Route
            path="/"
            element={
              <Search
                vehicleInfo={vehicleInfo}
                setVehicleInfo={setVehicleInfo}
                setVehicleImage={setVehicleImage}
                setVehicleVideo={setVehicleVideo}
              />
            }
          />
          <Route
            path="details"
            element={
              <VehicleDetails
                vehicleInfo={vehicleInfo}
                setVehicleInfo={setVehicleInfo}
                vehicleImage={vehicleImage}
                vehicleVideo={vehicleVideo}
              />
            }
          />
        </Routes>

    </Container>
  );
};

export default App;
