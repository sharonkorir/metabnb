import React, { Component } from "react";
import Filter from '../assets/filterIcon.png'

import { PlaceToStayFilters } from "./PlacesToStay";
import { Link } from "react-router-dom";

class Tabs extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="py-8 lg:py-[3rem] px-2 lg:px-8 max-w-[1200px] mx-auto">
			    <div className="flex flex-col lg:flex-row items-center text-sm lg:w-[90%] mx-auto mb-[2rem]">
				    <div className="flex justify-between flex-nowrap w-full overflow-x-scroll md:scrollbar-hide scroll-smooth mb-4 lg:mb-0 py-4">
					    {PlaceToStayFilters.map((item, id) => (
                <Link key={id} to={item.link} className='text-xs whitespace-nowrap mx-4'>{item.name}</Link>
              ))}
            </div>
            <div className="ml-10 flex items-center border border-[#B4B4B4] px-4 py-1 rounded-[4px]">
                <span className="mr-6 text-xs">Location</span>
                <img src={Filter} alt="Filter" className="h-[15px]"/>
            </div>
          </div>
			</div>
      </React.Fragment>
    );
  }
}

export default Tabs;