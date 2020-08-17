import React from "react"
import "../layout.css"

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-item">
        <h1 className="footer-item-title">get to know us</h1>
        <div className="footer-subtitles">
          <h3>About Us</h3>
          <h3>Help Center</h3>
          <h3>Blog</h3>
          <h3>Honor Code</h3>
          <h3>Careers</h3>
        </div>
      </div>
      <div className="footer-item">
        <h1 className="footer-item-title">Learn with Us </h1>
        <div className="footer-subtitles">
          <h3>Demo Lesson Space</h3>
          <h3>Subjects</h3>
          <h3>Brpwse Online Tutors</h3>
          <h3>Test Prep Courses</h3>
          <h3>Writing Resources</h3>
        </div>
      </div>
      <div className="footer-item">
        <h1 className="footer-item-title">Partner With Us</h1>
        <div className="footer-subtitles">
          <h3>Ambassadors</h3>
          <h3>Academic Partners</h3>
          <h3>Corporate Partners</h3>
          <h3>Honor Code</h3>
          <h3>Become a Tutor</h3>
        </div>
      </div>
      <div className="footer-item">
        <div className="footer-icons">
          <i className="fab fa-facebook fa-2x"></i>
          <i className="fab fa-twitter fa-2x"></i>
          <i className="fab fa-instagram fa-2x"></i>
          <i className="fab fa-linkedin fa-2x"></i>
        </div>
        <div className="footer-subtitles">
          <h3>Terms of Service</h3>
          <h3>Privacy Policy</h3>
          <h3>&copy; 2020 Docere</h3>
        </div>
      </div>
    </footer>
  )
}

export default Footer
