import React, { Component } from "react";

class PlaceCard extends Component {
  state = {};
  render() {
    const { place } = this.props;
    return (
      <div className="lg:w-1/4 mx-auto mb-4 items-center">
        <img
          className="p-2"
          src={place.source}
          alt="product d"
        />
      </div>
    );
  }
}

export default PlaceCard;