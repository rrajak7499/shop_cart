import React from "react";
import logo from "./source/logo.png";

export default function Navbar() {
  return (
    <>
      <nav className="d-flex navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-center">
        <div className="d-flex justify-content-center">
          <img className="appLogo" src={logo} alt="logo" />
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="input-group mb-0 width=302px">
              <input
                type="text"
                class="form-control width=302px"
                placeholder="Search for products, brand and more"
                aria-label="Search for products, brand and more"
                aria-describedby="basic-addon2"
              />
              <div class="input-group-append">
                <button class="btn btn-secondary" type="button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="d-flex-inline">
            <button type="button"  class="button btn btn-primary h-40px w-125px">Login</button>
            </div>

            <div className="d-flex cart-box">
                <img
                  className="cart-icon"
                  src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
                  alt="20*20"
                />
                <div className="d-flex cart-box">
                    <p className="cart-text">Cart</p>
                </div>
            </div>

            
          </div>
        </div>
      </nav>
    </>
  );
}
