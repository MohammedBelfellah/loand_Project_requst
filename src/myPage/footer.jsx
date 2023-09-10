import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
    return (
        <footer style={{ height: "250px"}} className="bg-light text-light text-center py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h5 className='text-dark'>Contact Us</h5>
                        <p className='text-dark'>Email: mohammed@belfellah.com</p>
                        <p className='text-dark'>Phone: +0 (212) 456-7890</p>
                    </div>
                    <div className="col-md-6">
                        <h5 className='text-dark'>Follow Us</h5>
                        <div className="social-icons">
                            <a href="#" className="text-light me-3"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="text-light me-3"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="text-light me-3"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-12">
                        <Link to="/contactUs" className="text-light me-3 text-dark">Contact Us</Link>
                        <Link to="/aboutUs" className="text-light me-3 text-dark">About Us</Link>
                        <Link to="/form" className="text-light me-3 text-dark">Form</Link>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-6 text-dark">
                        <p>&copy; Mohammed Belfellah 2023</p>
                    </div>
                    <div className="col-md-6 text-dark">
                        <p>Trusted Payment Provider : Bank Of Morocco</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
