import React, { useState } from 'react';

const BookNowSection = () => {
    const [showMsg, setShowMsg] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        await fetch("https://formsubmit.co/ajax/nitesh861sharma@gmail.com", {
            method: "POST",
            headers: {
                'Accept': 'application/json'
            },
            body: formData
        })
            .then(response => {
                if (response.ok) {
                    setShowMsg(true);
                    form.reset();
                    setTimeout(() => setShowMsg(false), 3000);
                } else {
                    alert("❌ Something went wrong!");
                }
            })
            .catch(error => {
                console.error(error);
                alert("Error submitting form.");
            });
    };

    return (
        <section className="py-5 bg-light" id="bookNow">
            <div className="container">
                <h2 className="text-center mb-4 fw-bold text-dark">Book Your Appointment</h2>
                <div className="row align-items-stretch">
                    {/* Form */}
                    <div className="col-md-6 d-flex">
                        <form
                            onSubmit={handleSubmit}
                            className="bg-white p-4 rounded shadow w-100 h-100"
                        >
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_subject" value="New Appointment Booking" />

                            <div className="mb-3">
                                <label className="form-label">Full Name</label>
                                <input type="text" name="name" className="form-control" required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" name="email" className="form-control" required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Phone Number</label>
                                <input type="tel" name="phone" className="form-control" required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Select Service</label>
                                <select name="service" className="form-select" required>
                                    <option>Car Wash - ₹300</option>
                                    <option>Engine Service - ₹1500</option>
                                    <option>AC Repair - ₹800</option>
                                    <option>Wheel Alignment - ₹500</option>
                                    <option>Oil Change - ₹700</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Preferred Date & Time</label>
                                <input type="datetime-local" name="datetime" className="form-control" required />
                            </div>
                            <button type="submit" className="btn btn-primary w-100 fw-semibold">
                                Book Now
                            </button>

                            {/* Alert */}
                            {showMsg && (
                                <div className="alert alert-success mt-3 text-center fw-semibold">
                                    ✅ Thank you! Your appointment request has been sent.
                                </div>
                            )}
                        </form>
                    </div>

                    {/* Image */}
                    <div className="col-md-6 d-flex align-items-center justify-content-center mt-4 mt-md-0">
                        <img
                            src="/Book.jpg"
                            alt="Appointment"
                            className="img-fluid w-100 rounded shadow"
                            style={{ height: "100%", objectFit: "cover", borderRadius: "0.5rem" }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookNowSection;
