import React from 'react';
import '../styles/style.css'

function login() {

    return(

       <main class="d-flex justify-content-center align-items-center">
        <div class="w-50 w-md-25 text-center">
            <h2>Inicio de sesión</h2>
            <div class="mb-3">
                <label for="usuario">Usuario:</label>
                <input type="text" name="usuario" id="usuario" class="form-control"/>
            </div>
            <div class="mb-3">
                <label for="contraseña">Contraseña:</label>
                <input type="password" name="contraseña" id="contraseña" class="form-control"/>
            </div>
            <div class="mb-3">
                <button type="button" id="btnLogin" class="btn btn-secondary">Login</button>
            </div>
        </div>


    </main>
)}

export default login;