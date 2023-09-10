import React from 'react'

export default function ContactUs() {
    return (
        <div className="container mt-5">
            <section className="my-5 container">
                <h2 className="text-center">Contact Us</h2>
                <p className="text-center">Feel free to get in touch with us.</p>

                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Your Name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="Your Email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea className="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}
