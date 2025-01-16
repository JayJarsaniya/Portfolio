

import React, { useState } from "react";
import { db } from "../Firebase"; // Adjust path as necessary
import { collection, addDoc } from "firebase/firestore";
import "../style/contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "contacts"), formData);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error saving message: ", error);
    }
  };

  return (
    <div>
      <div
        className="st-section-heading st-style1 aos-init aos-animate"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <h4 className="st-section-heading-title">Contact</h4>
        <h2 className="st-section-heading-subtitle">Contact</h2>
      </div>
      <div className="contact-container">
        <div className="form-section">
          <h2>Just say Hello</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Your Subject"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
          {isSubmitted && <p className="submit-msg">Thank you! Your message has been sent.</p>}
        </div>
        <div className="info-section">
          <h2>Contact Info</h2>
          <div className="contact-details">
            <div className='contact-icon'>
              <i class="fa-regular fa-envelope"></i>
              <div>
                <span>Email:</span>
                <p>jayjarsaniya006@gmail.com</p>
              </div>
            </div>
            <div className='contact-icon'>
              <i class="fa-solid fa-phone"></i>
              <div>
                <span>Phone:</span>
                <p>+91 9737529450</p>
              </div>
            </div>
            <div className='contact-icon'>
              <i class="fa-solid fa-location-dot"></i>
              <div>
                <span>Address:</span>
                <p>Nikol Ahmedabad - Gujrat</p>
              </div>
            </div>
          </div>
          <h4>Visite my social profile and get connected</h4>
          <div className="icon">
            <div className='sub-icon'>
              <a href="https://www.instagram.com/jay_jarsaniya?igsh=eWV2bWtzd3llOW11" target='_blank'>
                <i class="fa-brands fa-instagram"></i>
                <p>Instagram</p>
              </a>
            </div>
            <div className='sub-icon'>
              <a href="https://www.facebook.com/share/15paCxW9bT/" target='_blank'>
                <i class="fa-brands fa-facebook-f"></i>
                <p>Facebook</p>
              </a>
            </div>
            <div className='sub-icon'>
              <a href="https://www.linkedin.com/in/jarsaniya-jay-901ba22aa" target='_blank'>
                <i class="fa-brands fa-linkedin-in"></i>
                <p>Linkedin</p>
              </a>
            </div>
            <div className='sub-icon'>
              <a href="https://github.com/JayJarsaniya" target='_blank'>
                <i class="fa-brands fa-github"></i>
                <p>Github</p>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
