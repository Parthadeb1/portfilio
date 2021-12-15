import React, { useRef, useState } from "react";
import email from "../../../img/email.png";
import phone from "../../../img/phone.png";
import Address from "../../../img/address.png";
import emailjs from 'emailjs-com';
const Contact = () => {
  const form = useRef();
  const [done, setDone] =useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rvajznj', 'template_vrcpf49', form.current, 'user_bnuEQeCfomD9CHeuMhKPm')
    .then((result) => {
        console.log(result.text);
        setDone(true);
    }, (error) => {
        console.log(error.text);
    });

  }
  return (
    <div className="container my-3">
      <div className="position-relative d-flex justify-content-center align-items-center">
        <h1 className="display-1 text-uppercase about">Get In touch</h1>
        <h1 className="position-absolute text-uppercase text-dark">
          Contact Me
        </h1>
      </div>
      {/* =========contact========= */}
      <div className="c my-4">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <p className="fs-5 mt-4 fw-bold"><span className="text-danger">Don't be SHY!!</span> Feel free to DM Me</p>
          <div className="c-info">
            <div className="c-info-item">
              <img src={phone} alt="" className="c-icon" />
              +8801851247354
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={email} alt="" />
              Parthadebj07@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Dhanmondi 4, Dhaka, Bangladesh
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="fs-4">
            <span className="text-primary fw-bold">Get in touch.</span> Always available for
            Web Site Design if the right project comes along. me.
          </p>
          <form ref={form} onSubmit={handleSubmit}>
            <input  type="text" placeholder="Name" name="user_name" />
            <input className="subject" type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea  rows="5" placeholder="Message" name="message" />
            <button className="button fs-5">Submit</button>
            {done && <span className="text-success fs-6 fw-bold">Sent successfully!!</span> }
          </form>
          
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;
