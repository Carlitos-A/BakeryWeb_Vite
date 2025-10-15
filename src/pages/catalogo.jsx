import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/style.css';
import { masVendidos } from '../constantes/masVendidos';
import { catalogoItems } from '../constantes/catalogoItems';
import { CartProvider, useCart } from '../components/CartContext.jsx';
import { useParams, useNavigate } from "react-router-dom";


export default function catalogo() {
    const { addToCart } = useCart();
    const navigate = useNavigate();
    const { categoria } = useParams();
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todos los productos");

    useEffect(() => {
        if (categoria) {

            const catNombre = categoria.replace(/-/g, " ");
            setCategoriaSeleccionada(catNombre);
        } else {
            setCategoriaSeleccionada("Todos los productos");
        }
    }, [categoria]);

    const productosFiltrados =
        categoriaSeleccionada === "Todos los productos"
            ? masVendidos
            : masVendidos.filter(
                (p) => p.category.toLowerCase() === categoriaSeleccionada.toLowerCase()
            );





    return (


        <div className="d-flex flex-column min-vh-100 bg-custom">


            <div className="container my-5">
                <div className="row">
                    {/* Barra lateral */}
                    <aside className="col-md-3 mb-4">
                        <div className="p-3 bg-white rounded shadow-sm">
                            <h5 className="mb-3 text-center">Filtrar por categoría</h5>
                            <ul className="list-group">
                                {catalogoItems.map((item) => (
                                    <li
                                        key={item.id}
                                        className={`list-group-item list-group-item-action ${categoriaSeleccionada.toLowerCase().trim() === item.name.toLowerCase().trim() ? "active" : ""
                                            }`}
                                        style={{ cursor: "pointer" }}
                                        onClick={() => {
                                            const ruta = item.name === "Todos los productos"
                                                ? "/catalogo"
                                                : `/catalogo/${item.name.toLowerCase().replace(/\s+/g, "-")}`;
                                            navigate(ruta);
                                        }}
                                    >
                                        {item.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>

                    {/* Productos */}

                    <div className="col-md-9">

                            <h4 className="mb-4 text-dark">
                                {categoriaSeleccionada === "Todos los productos"
                                    ? "Todos los productos"
                                    : `Categoría: ${categoriaSeleccionada}`}
                            </h4>

                        <div className="row g-4">
                            {productosFiltrados.length > 0 ? (
                                productosFiltrados.map((product) => (
                                    <div key={product.id} className="col-sm-6 col-md-4 col-lg-3">
                                        <div className="card h-100 shadow-sm border-0 hover-shadow">
                                            <img
                                                src={product.img}
                                                className="card-img-top rounded-top"
                                                alt={product.alt}
                                                style={{ objectFit: "cover", height: "180px" }}
                                            />
                                            <div className="card-body d-flex flex-column justify-content-between">
                                                <div>
                                                    <p className="small text-muted mb-1">{product.category}</p>
                                                    <h6 className="fw-bold">{product.title}</h6>
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        {product.originalPrice && (
                                                            <span className="text-decoration-line-through text-muted small">
                                                                {product.originalPrice} CLP
                                                            </span>
                                                        )}
                                                        <span className="fw-semibold text-dark">{product.price} CLP</span>
                                                    </div>
                                                </div>
                                                <div className="text-center mt-3">
                                                    <button
                                                        className="btn btn-color-car w-100 btn-sm"
                                                        onClick={() => addToCart(product)}
                                                    >
                                                        Agregar al carrito
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-muted">No hay productos en esta categoría.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
}
