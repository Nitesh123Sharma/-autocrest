import React, { useState } from 'react';
import './ContactForm.css';

const ContactSection = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    await fetch("https://formsubmit.co/ajax/nitesh861sharma@gmail.com", {
      method: "POST",
      headers: { 'Accept': 'application/json' },
      body: formData,
    })
      .then(response => {
        if (response.ok) {
          setShowAlert(true);
          form.reset();

          setTimeout(() => {
            setShowAlert(false);
          }, 3000);
        } else {
          alert("Something went wrong!");
        }
      })
      .catch(error => {
        console.error(error);
        alert("Submission failed!");
      });
  };

  return (
    <section className="contact-section bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">Contact Us</h2>
        <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
  <div className="ratio ratio-4x3 rounded-4 shadow overflow-hidden">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112095.27801278756!2d76.94752386691386!3d28.56790276047871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b5bb5ac3b45%3A0x98b51e3178fa76a!2sDwarka%20Sector%2025%2C%20Delhi%2C%20110077!5e0!3m2!1sen!2sin!4v1713151772100!5m2!1sen!2sin"
      width="100%"
      height="80%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Map"
    ></iframe>
  </div>
</div>


          <div className="col-md-6">
            <form onSubmit={handleSubmit} className="p-4 bg-white rounded-4 shadow-sm">
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-semibold">Name</label>
                <input type="text" className="form-control" name="name" required />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">Email</label>
                <input type="email" className="form-control" name="email" required />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label fw-semibold">Message</label>
                <textarea className="form-control" name="message" rows="5" required></textarea>
              </div>

              <button type="submit" className="btn btn-primary px-4">Send Message</button>

              {showAlert && (
                <div className="alert alert-success mt-3 mb-0" role="alert">
                  ✅ Thank you for contacting us!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
