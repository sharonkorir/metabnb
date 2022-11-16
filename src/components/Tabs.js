import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";

class Tabs extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="flex justify-center mb-8">
          <div className="w-2/12 flex justify-center">
            <span className="text-gray-700 hover:cursor-pointer hover:text-blue-500 hover:underline">
              Restaurant
            </span>
          </div>
          <div className="w-2/12 flex justify-center">
            <span className="text-gray-700 hover:cursor-pointer hover:text-blue-500 hover:underline">
              Cottage
            </span>
          </div>
          <div className="w-2/12 flex justify-center">
            <span className="text-gray-700 hover:cursor-pointer hover:text-blue-500 hover:underline">
              Castle
            </span>
          </div>
          <div className="w-2/12 flex justify-center">
            <span className="text-gray-700 hover:cursor-pointer hover:text-blue-500 hover:underline">
              Beach
            </span>
          </div>
          <div className="w-2/12 flex justify-center">
            <span className="text-gray-700 hover:cursor-pointer hover:text-blue-500 hover:underline">
              Off-Grid
            </span>
          </div>
          <div className="w-2/12 flex justify-center">
            <button className="border border-gray-500 text-gray-900 px-2 py-1 rounded">
              <span className="font-bold mr-2">Location</span>
              <FontAwesomeIcon icon={faSliders}></FontAwesomeIcon>
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Tabs;