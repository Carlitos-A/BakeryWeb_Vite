import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'  
import 'bootstrap-icons/font/bootstrap-icons.css'
import './styles/style.css'
import Home from './pages/Home'




const root = createRoot(document.getElementById('root'))

root.render(  
<React.StrictMode>
    <Home />
</React.StrictMode>)
