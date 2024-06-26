import React from 'react'
import './Footer2.css';

const Footer2 = () => {
    return (
<footer class="footer-area footer--light">
  <div class="footer-big">
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-sm-12">
          <div class="footer-widget">
            <div class="widget-about">
            <h4 class="footer-widget-title"> Medicon</h4>
              <ul class="contact-details">
                <li>
                  <span class="icon-earphones"></span> Call Us:
                  <a href="tel:344-755-111">+917620576648</a>
                </li>
                <li>
                  <span class="icon-envelope-open"></span>
                  <a href="mailto:support@aazztech.com">medicon.healthcare76@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-4">
          <div class="footer-widget">
            <div class="footer-menu footer-menu--1">
              <h4 class="footer-widget-title">Hospital Specialist</h4>
              <ul>
                <li>
                  <a >Gynacologist</a>
                </li>
                <li>
                  <a >PhysioTherapist</a>
                </li>
                <li>
                  <a >Diabetics</a>
                </li>
                <li>
                  <a >Oncologist</a>
                </li>
                <li>
                  <a >Nuerologist</a>
                </li>
                <li>
                  <a >Pediatric</a>
                </li>
                <li>
                  <a >Dentist</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="col-md-3 col-sm-4">
          <div class="footer-widget">
            <div class="footer-menu">
              <h4 class="footer-widget-title">Our Company</h4>
              <ul>
                <li>
                  <a href="/about">About Us</a>
                </li>
                <li>
                  <a >How It Works</a>
                </li>
                <li>
                  <a >Contact Us</a>
                </li>
                <li>
                  <a >Blog</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="col-md-3 col-sm-4">
          <div class="footer-widget">
            <div class="footer-menu no-padding">
              <h4 class="footer-widget-title">Help Support</h4>
              <ul>
                <li>
                  <a href="#">Support Forum</a>
                </li>
                <li>
                  <a href="#">Terms &amp; Conditions</a>
                </li>
                <li>
                  <a href="#">Support Policy</a>
                </li>
                <li>
                  <a href="#">Refund Policy</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>  
  </div>

  <div class="mini-footer">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="copyright-text">
            <p>&copy; 2024 Medicon. All RIghts Reserved | Terms and Condition.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

)
}

export default Footer2;