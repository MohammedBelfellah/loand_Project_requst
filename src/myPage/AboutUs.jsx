import React from 'react'

export default function AboutUs() {
  const employees = [
    {
      name: "David Wong",
      position: "Financial Analyst",
      imageUrl: "https://blog.hubspot.com/hs-fs/hubfs/employee-retention-rate.jpg?width=595&height=400&name=employee-retention-rate.jpg"
    },
    {
      name: "Emily Rodriguez",
      position: "Loan Officer",
      imageUrl: "https://images.idgesg.net/images/article/2022/07/serene-worker-happy-employee-studio-romantic-shutterstock-100930716-large.jpg?auto=webp&quality=85,70"
    },
    {
      name: "Michael Patel",
      position: "Risk Manager",
      imageUrl: "https://fj-employer-blog.s3.amazonaws.com/employer-blog/wp-content/uploads/2020/08/25093203/benefits-of-flexible-work-for-companies-and-employees_.jpg"
    },
    {
      name: "Ava Williams",
      position: "Investment Banker",
      imageUrl: "https://assets.website-files.com/611648b6262a801811180f6c/622a840a298a8bda4133dba2_Untitled%20design%20(7)%20(2).png"
    }
  ];
  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center">About Us</h1>

        <div className="row">
          <div className="col-md-6">
            <div className="card mb-4">
              <img
                width="300px"
                height="365px"
                src="https://www.kurz-banknotes.com/fileadmin/_processed_/e/e/csm_Kurz-Banknotes-Anticounterfeiting-Solutions-1280px_8c68794ad3.jpg"
                className="card-img-top"
                alt="Secure Banknotes"
              />
              <div className="card-body">
                <h5 className="card-title">Secret #1: Secure Banknotes</h5>
                <p className="card-text">
                  We take pride in producing some of the most secure banknotes in the world. Our cutting-edge technology and commitment to security ensure that your money is safe.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card mb-4">
              <img
                width="300px"
                height="365px"
                src="https://knowledge.wharton.upenn.edu/wp-content/uploads/2023/05/5.3.23-joao-gomes-financial-stability-policy-GettyImages-853891122-600x500.jpg"
                className="card-img-top"
                alt="Stable Prices"
              />
              <div className="card-body">
                <h5 className="card-title">Secret #2: Stable Prices</h5>
                <p className="card-text">
                  One of our secrets to success is maintaining stable prices. We work diligently to keep inflation in check, ensuring your purchasing power remains strong.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
      {/* our scrol  section  */}
      <section className="my-5 container">
        <h2 className="text-center">Our Employees</h2>
        <div id="employeeCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
          <div className="carousel-inner rounded bg-primary">
            {employees.map((employee, index) => (
              <div className={`carousel-item bg-primary ${index === 0 ? 'active ' : ''}`} key={index}>
                <div className="d-flex justify-content-center align-items-center">
                  <div className="text-center mx-3">
                    <img
                      width="160px"
                      height="160px"
                      src={employee.imageUrl}
                      className="rounded-circle mb-3 mt-3"
                      alt={`Employee ${index + 1}`}
                    />
                    <h4>{employee.name}</h4>
                    <p>{employee.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#employeeCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#employeeCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

    </>
  )
}

