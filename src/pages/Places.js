import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Tabs from "../components/Tabs";
import PlacesGrid from "../components/PlacesGrid";
import { Footer } from "../components/Footer";

class PlacesPage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="lg:px-40 lg:py-20">
          <Tabs />
          <PlacesGrid />
        </div>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default PlacesPage;