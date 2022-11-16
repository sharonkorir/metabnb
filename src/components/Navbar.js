import metabnb from '../assets/metabnb.png'
import Modal from '../components/Modal'
import React, { Component } from "react";

class Navbar extends Component {
  state = {
    modalShow: false,
  };

  showModal = () => {
    this.setState({ modalShow: true });
  };

  closeModal = () => {
    this.setState({ modalShow: false });
  };
  render() {
    const { modalShow } = this.state;
    return (
      <React.Fragment>
        <Modal onCloseModal={this.closeModal} show={modalShow} />
        <div className="lg:px-40">
          <div className="navbar bg-base-100">
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/places">Place to stay</a>
                  </li>
                  <li>
                    <a href="/">NFTs</a>
                  </li>
                  <li>
                    <a href="/">Community</a>
                  </li>
                </ul>
              </div>
              <a href="/">
                <img
                  alt="metabnb logo"
                  src={metabnb}
                  className="h-[15px] md:h-[20px] lg:h-[30px]"
                />
              </a>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal p-0">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/places">Place to stay</a>
                </li>
                <li>
                  <a href="/">NFTs</a>
                </li>
                <li>
                  <a href="/">Community</a>
                </li>
              </ul>
            </div>
            <div className="navbar-end">
              <button
                onClick={this.showModal}
                className="btn normal-case w-44"
                id="wallet"
                href="/"
              >
                Connect wallet
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Navbar;
