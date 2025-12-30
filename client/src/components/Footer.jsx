import React from "react";

const Footer = () => {
  return (
    <div
      className="container-fluid bg-dark text-light footer wow fadeIn"
      data-wow-delay="0.1s"
      style={{
        visibility: "visible",
        animationDelay: "0.1s",
        animationName: "fadeIn",
      }}
    >
      <div className="container pb-5">
        <div className="row g-5">
          {/* Logo & Description */}
          <div className="col-md-12 col-lg-5">
            <div className="text-center rounded p-4">
              <a href="/">
                <img
                  src="/icon.png"
                  width="120"
                  alt="PG Wala"
                />
              </a>
              <h6 className="text-white pt-3 px-4 mb-0">
                Discover your ideal PG experience with PG Wala – where comfort
                meets convenience.
              </h6>
            </div>
          </div>

          {/* Contact */}
          <div className="col-md-6 col-lg-3">
            <h6 className="section-title text-start text-primary text-uppercase mb-4">
              Contact
            </h6>
            
            <p className="mb-2">
              <i className="fa fa-phone me-3"></i>
              +91 9322271889
            </p>
            <p className="mb-2">
              <i className="fa fa-envelope me-3"></i>
              info@pgwala.com
            </p>

            <div className="d-flex pt-2">
              <a
                className="btn btn-outline-light btn-social me-2"
                href="https://www.facebook.com/people/PG-Wala/61559264057877/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                className="btn btn-outline-light btn-social me-2"
                href="https://youtube.com/@pgwala"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-youtube"></i>
              </a>
              <a
                className="btn btn-outline-light btn-social"
                href="https://www.instagram.com/pgwala/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-4 col-md-6">
            <div className="row gy-5 g-4">
              <div className="col-md-6">
                <h6 className="section-title text-start text-primary text-uppercase mb-4">
                  Quick Links
                </h6>
                <a className="btn btn-link" href="#about">
                  About Us
                </a>
                <a className="btn btn-link" href="#contact">
                  Contact Us
                </a>
                <a
                  className="btn btn-link"
                  href="http://pgwala.com/privacy-policy"
                  target="_blank"
                  rel="noreferrer"
                >
                  Privacy Policy
                </a>
                <a
                  className="btn btn-link"
                  href="http://pgwala.com/terms-condition"
                  target="_blank"
                  rel="noreferrer"
                >
                  Terms & Condition
                </a>
                <a
                  className="btn btn-link"
                  href="http://pgwala.com/gallery"
                  target="_blank"
                  rel="noreferrer"
                >
                  Gallery
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-12 text-center mb-3 mb-md-0">
              © {new Date().getFullYear()}{" "}
              <a className="border-bottom" href="http://pgwala.com/">
                PG Wala
              </a>{" "}
              | All Right Reserved. T&amp;C apply.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
