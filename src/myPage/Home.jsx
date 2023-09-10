import React from 'react'
import { Link } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css'
export default function Home() {
    const partners = [
        [
            { name: "Bank of Morocco", icon: "fas fa-university" },
            { name: "Global Bank", icon: "fas fa-globe" },
            { name: "Mohammed Tech", icon: "fas fa-code" }
        ],
        [
            { name: "Nextlp", icon: "fas fa-cogs" },
            { name: "LG", icon: "fas fa-tv" },
            { name: "Wolstrite", icon: "fas fa-industry" }
        ],
        [
            { name: "USA Visa", icon: "fas fa-globe" },
            { name: "Mastercard", icon: "fas fa-credit-card" },
            { name: "CIH Bank", icon: "fas fa-university" }
        ]
    ];
    return (
        <>
            <div className="container text-center d-flex justify-content-center">
                <div id="texteHero" style={{ marginTop: "50px" }}>
                    <h1 className="text-start">Unlock Your Financial Potential</h1>
                    <h1 className="text-primary text-start">
                        <span className="text-dark">With:</span> BELFELLAH BANK'S
                    </h1>
                    <h2 className="text-secondary text-start" style={{ padding: "10px", marginTop: "50px", color: "red" }}>
                        We make loan applications easy and hassle-free <span style={{ marginLeft: "20px" }}></span>
                    </h2>
                    <div className="d-inline  ">
                        <Link to="/form">
                            <button style={{ fontSize: "20px", }} type="button" className="btn btn-primary mx-2 mt-5 px-5">
                                Go Form
                            </button>
                        </Link>
                        <Link to="/aboutUs">
                            <button style={{ fontSize: "20px" }} type="button" className="btn btn-primary mx-2 mt-5 px-5">
                                More Info
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='d-none d-md-block' id="imageHero" >
                    <img 
                        className='shadow mt-5'
                        width="425px"
                        height="345px"
                        src="https://img.freepik.com/free-vector/investment-data-concept-illustration_114360-5159.jpg?w=740&t=st=1694289910~exp=1694290510~hmac=bc3c1cfeff56f6f14cb64705601a20356f2523ee0a08764ba06b256dea986a4c"
                        alt=""
                    />
                </div>
            </div>
            {/* section of cards */}
            <div className="container mt-5">
                <section>
                    <h2 className="text-center mb-4">Our Services</h2>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="card text-center">
                                <div className="card-body">
                                    <i style={{ color: 'green' }} className="fas fa-wallet fa-4x mb-3"></i>
                                    <h5 className="card-title">Financial Solutions</h5>
                                    <p className="card-text">Explore our range of financial services.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card text-center">
                                <div className="card-body">
                                    <i style={{ color: 'green' }} className="fas fa-chart-line fa-4x mb-3"></i>
                                    <h5 className="card-title">Investment Opportunities</h5>
                                    <p className="card-text">Discover investment options for your future.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card text-center">
                                <div className="card-body">
                                    <i style={{ color: 'green' }} className="fas fa-credit-card fa-4x mb-3"></i>
                                    <h5 className="card-title">Credit Solutions</h5>
                                    <p className="card-text">Learn about our credit and loan offerings.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {/* our partener  */}
            <div className="container mt-5">
                <section className="my-5 container">
                    <h2 className="text-center">Our Partners</h2>
                    <div id="partnerCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
                        <div className="carousel-inner bg-primary rounded">
                            {partners.map((partnerGroup, groupIndex) => (
                                <div className={`bg-primary carousel-item ${groupIndex === 0 ? 'active' : ''}`} key={groupIndex}>
                                    <div className="d-flex justify-content-center align-items-center">
                                        {partnerGroup.map((partner, partnerIndex) => (
                                            <div style={{ padding: "10px" }} className="text-center mx-3" key={partnerIndex}>
                                                <i  className={`${partner.icon} fa-4x mb-3`}></i>
                                                <h5>{partner.name}</h5>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#partnerCarousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#partnerCarousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </section>
            </div>

        </>

    )
}
