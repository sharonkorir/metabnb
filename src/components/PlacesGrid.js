import React, { Component } from "react";

import place1 from "../assets/places/one.png";
import place2 from "../assets/places/two.png";
import place3 from "../assets/places/three.png";
import place4 from "../assets/places/four.png";
import place5 from "../assets/places/five.png";
import place6 from "../assets/places/six.png";
import place7 from "../assets/places/seven.png";
import place8 from "../assets/places/eight.png";
import place9 from "../assets/places/nine.png";
import place10 from "../assets/places/ten.png";
import place11 from "../assets/places/eleven.png";
import place12 from "../assets/places/twelve.png";
import place13 from "../assets/places/thirteen.png";
import place14 from "../assets/places/fourteen.png";
import place15 from "../assets/places/fifteen.png";
import place16 from "../assets/places/sixteen.png";
import PlaceCard from "./PlaceCard";

class PlacesGrid extends Component {
  state = {
    places: [
      {
        place: "one",
        source: place1,
      },
      {
        place: "one",
        source: place2,
      },
      {
        place: "one",
        source: place3,
      },
      {
        place: "one",
        source: place4,
      },
      {
        place: "one",
        source: place5,
      },
      {
        place: "one",
        source: place6,
      },
      {
        place: "one",
        source: place7,
      },
      {
        place: "one",
        source: place8,
      },
      {
        place: "one",
        source: place9,
      },
      {
        place: "one",
        source: place10,
      },
      {
        place: "one",
        source: place11,
      },
      {
        place: "one",
        source: place12,
      },
      {
        place: "one",
        source: place13,
      },
      {
        place: "one",
        source: place14,
      },
      {
        place: "one",
        source: place15,
      },
      {
        place: "one",
        source: place16,
      },
    ],
  };
  render() {
    const { places } = this.state;
    return (
      <div className="flex flex-wrap justify-start">
        {places.map((place, index) => (
          <PlaceCard place={place} key={index} />
        ))}
      </div>
    );
  }
}

export default PlacesGrid;