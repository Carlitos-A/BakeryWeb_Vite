import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './styles/style.css'
import Home from './pages/Home'
import CartPage from './pages/CartPage'
import Catalogo from './pages/catalogo' 
import { CartProvider } from './components/CartContext'




const root = createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
        <CartProvider>
            <BrowserRouter>
                <Routes>
                    
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/catalogo" element={<Catalogo />} />
                    <Route path="/catalogo/:categoria" element={<Catalogo />} />

                </Routes>
            </BrowserRouter>
        </CartProvider>
    </React.StrictMode>)
