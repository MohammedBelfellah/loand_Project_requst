import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Link } from 'react-router-dom';
export default function NavBar() {
    return (
        <div >
            <nav   class="navbar navbar-expand-lg bg-body-tertiary">
                <div  class="container">
                    <Link style={{ textDecoration: 'none' }} to="/"><a class="navbar-brand">BELFELLAH BANK</a></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link style={{ textDecoration: 'none' }} to="/form"><a class="nav-link mx-3">Form</a></Link>
                            <Link style={{ textDecoration: 'none' }} to="/contactUs"><a class="nav-link mx-3">Contact us</a></Link>
                            <Link style={{ textDecoration: 'none' }} to="/aboutUs"><a class="nav-link mx-3">About us</a></Link>
                        </div>
                    </div>
                </div>
            </nav>






        </div>
    )
}
