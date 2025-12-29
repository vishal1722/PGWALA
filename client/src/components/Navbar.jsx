import React from "react";


const Navbar = () => {
  return (
    <div className="header-sticky bg-dark px-0">
      <div className="row gx-0">
        {/* Left Logo (Desktop) */}
        <div className="col-lg-3 bg-dark d-none d-lg-block">
          <a
            href="/"
            className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center"
          >
            <img
              src="/icon.png"
              width="100"
              alt="PG Wala"
            />
          </a>
        </div>

        {/* Right Section */}
        <div className="col-lg-9">
          {/* Top Contact Bar */}
          <div className="row gx-0 bg-white d-none d-lg-flex">
            <div className="col-lg-7 px-5 text-start">
              <div className="h-100 d-inline-flex align-items-center py-2 me-4">
                <i className="fa fa-envelope text-primary me-2"></i>
                <p className="mb-0">info@pgwala.com</p>
              </div>
              <div className="h-100 d-inline-flex align-items-center py-2">
                <i className="fa fa-phone text-primary me-2"></i>
                <p className="mb-0">+91 9322271889</p>
              </div>
            </div>

            <div className="col-lg-5 px-5 text-end">
              <div className="d-inline-flex align-items-center py-2">
                <a
                  className="me-3"
                  href="https://www.facebook.com/people/PG-Wala"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  className="me-3"
                  href="https://www.instagram.com/pgwala/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  className="me-3"
                  href="https://youtube.com/@pgwala"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Main Navbar */}
          <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">
            {/* Mobile Logo */}
            <a href="/" className="navbar-brand d-block d-lg-none">
              <img
                src="/icon.png"
                width="80"
                alt="PG Walaah"
              />
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarCollapse"
            >
              <div className="navbar-nav me-auto py-0">
                <a href="#home" className="nav-item nav-link active">
                  Home
                </a>
                <a href="#locations" className="nav-item nav-link">
                  Locations
                </a>
                <a href="#amenities" className="nav-item nav-link">
                  Amenities
                </a>
                <a href="#rooms" className="nav-item nav-link">
                  Rooms & Pricing
                </a>
                <a href="#about" className="nav-item nav-link">
                  About Us
                </a>
                <a href="#contact" className="nav-item nav-link">
                  Contact Us
                </a>
              </div>

              <a
                href="https://wa.me/9322271889/?text=Hii%20I%20am%20interested%20?"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary rounded-0 py-4 px-md-5 d-none d-lg-block"
              >
                GET FREE QUOTE
                <i className="fa fa-arrow-right ms-3"></i>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
