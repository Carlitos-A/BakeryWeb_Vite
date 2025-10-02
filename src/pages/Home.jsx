
import Header from '../components/header'
import Footer from '../components/footer'
import '../styles/style.css'
import { masVendidos } from '../constantes/masVendidos'
import { reviews } from '../constantes/reviews'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import React, { useState, useEffect } from 'react';





export default function App() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;
  const total = masVendidos.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % total);
    }, 2000); 
      return () => clearInterval(interval);
    }, [total]);

  const visibleProducts = [];
  
  for (let i = 0; i < visibleCount; i++) {
    visibleProducts.push(masVendidos[(startIndex + i) % total]);
  }



  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      <hr />

      {/* Hero */}
      <div
        className="w-100 hero-section position-relative"
        aria-label="Imagen de fondo - Bakery"
      >
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active mj-hero slide-1" data-bs-interval="2000"></div>
            <div className="carousel-item mj-hero slide-2" data-bs-interval="2000"></div>
            <div className="carousel-item mj-hero slide-3" data-bs-interval="2000"></div>
          </div>
        </div>


        <div className="position-absolute top-50 start-50 translate-middle w-100 d-flex justify-content-center">
          <div className="position-relative d-flex flex-column justify-content-center align-items-center h-100">
            <div className="col-md-8 col-lg-6 bg-dark bg-opacity-50 p-5 rounded">
              <h1 className="mb-4 display-4 fw-bold text-white text-center">
                Mil sabores en un solo lugar
              </h1>
              <p className="mb-4 text-white text-center">
                Disfruta de pasteles, tortas y panes recién horneados, elaborados
                con ingredientes frescos y mucho amor. Haz tu pedido online y
                recíbelo en la comodidad de tu hogar
              </p>
              <div className="text-center">
                <a href="register.html" className="btn btn-color btn-lg">
                  Registrarse
                </a>
              </div>
            </div>
          </div>
        </div>


      </div>

      {/* Productos y reseñas */}
      <main className="container my-5">
        <h2 className="text-center mb-4">Productos más vendidos</h2>

        <section>
          {/* <div className="container py-5">
            <div className="row">
              {masVendidos.map((p) => (
                <div key={p.id} className="col-md-12 col-lg-4 mb-4 mb-lg-0">
                  <div className="card h-100">
                    <img src={p.img} className="card-img-top" alt={p.alt} />
                    <div className="card-body d-flex flex-column">
                      <div className="d-flex justify-content-between">
                        <p className="small">
                          <a href="#" className="text-muted">
                            {p.category}
                          </a>
                        </p>
                        <p className="small text-danger">
                          <s>{p.originalPrice}</s>
                        </p>
                      </div>

                      <div className="d-flex justify-content-between mb-3 align-items-center mt-auto">
                        <h5 className="mb-0">{p.title}</h5>
                        <h5 className="text-dark mb-0">{p.price}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
          <div className="d-flex gap-3 overflow-hidden my-5">
            {visibleProducts.map((p) => (
              <div key={p.id} className="card" style={{ minWidth: '30%' }}>
                <img src={p.img} className="card-img-top" alt={p.alt} />
                <div className="card-body">
                  <h5>{p.title}</h5>
                  <p>{p.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <h2 className="text-center mb-4">Reseñas de clientes</h2>
        <div className="d-flex flex-column gap-3">
          {reviews.map((r) => (
            <div className="card shadow-sm" key={r.id}>
              <div className="card-body">
                <p className="card-text">"{r.text}"</p>
                <h6 className="fw-bold">- {r.author}</h6>
              </div>
            </div>
          ))}
        </div>

      </main>

      <Footer />
    </div>
  )
}
