import React, { useState } from "react";
import "./contact.css";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    help: "",
  });

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <div className="contact-main-container">
      <section className="contact-form-section">
        <div className="contact-leftsection contact-section">
          <div className="contact-about-div">
            <h2>Contact Bitcs</h2>
            <p>
              We're here to help and answer any question you might have. We look
              forward to hearing from you 🙂
            </p>
            <p>Make a step towards Bitcs your business deserves!</p>
          </div>
        </div>
        <div className="contact-rightsection contact-section">
          <div className="form-heading">
            <h2 className="heading-secondary">Contact team</h2>
            <p>
              Our team is happy to answer your sales questions. Fill out the
              form and we’ll be in touch as soon as possible.
            </p>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                required=""
                value={formData.name}
                onChange={handleChange}
              />
              <label htmlFor="input" className="control-label">
                Your name <span className="red">*</span>
              </label>
              <i className="bar"></i>
            </div>
            <div className="form-group">
              <input
                type="text"
                name="email"
                required=""
                value={formData.email}
                onChange={handleChange}
              />
              <label htmlFor="input" className="control-label">
                {" "}
                Email <span className="red">*</span>
              </label>
              <i className="bar"></i>
            </div>
            <div className="form-group">
              <input
                type="text"
                name="phone"
                required=""
                value={formData.phone}
                onChange={handleChange}
              />
              <label htmlFor="input" className="control-label">
                Phone number<span className="red">*</span>
              </label>
              <i className="bar"></i>
            </div>
            <div className="form-group">
              <input
                type="text"
                name="company"
                required=""
                value={formData.company}
                onChange={handleChange}
              />
              <label htmlFor="input" className="control-label">
                {" "}
                Company / Organisation
              </label>
              <i className="bar"></i>
            </div>
            <div className="form-group">
              <input
                type="text"
                name="help"
                required=""
                value={formData.help}
                onChange={handleChange}
              />
              <label htmlFor="input" className="control-label">
                How can we help you? <span className="red">*</span>
              </label>
              <i className="bar"></i>
            </div>
            <button type="submit" className="form-btn">
              submit
            </button>
          </form>
        </div>
      </section>
      <section className="address-section">
        <div className="address-col col-lg-6 col-md-6 col-sm-12">
          <h3>USA Development Center</h3>
          <p>
            1324 hidden ridge apt#1124,
            <br />
            Irving, TX 75038, USA
            <br /> Tel:
            <a href="tel:74280 13133">7428013133</a>
            <br />
            Mail:
            <a href="mailto:contact@bitcs.in">info@bitcs.in</a>
          </p>
        </div>
        <div className="address-col col-lg-6 col-md-6 col-sm-12">
          <h3>India Development Center</h3>
          <p>
            Gurugram DLF phase 4,
            <br /> third floor,Zink Fitness Studio, India
            <br />
            Tel:
            <a href="tel:+74280 13133">7428013133</a>
            <br />
            Mail:
            <a href="mailto:info@bitcs.in">info@bitcs.in</a>
          </p>
        </div>
      </section>
    </div>
  );
};
