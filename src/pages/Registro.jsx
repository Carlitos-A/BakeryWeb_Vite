import React from "react";
import '../styles/style.css'

function registrar() {
  
  return (
   
  <main class="flex-grow-1 d-flex align-items-center justify-content-center">

    <div class="bg-dark bg-opacity-50 p-5 rounded text-white w-100" >

     
      <h1 class="mb-4 text-center">Registro</h1>

   
      <form>

        <div class="mb-3">
          <label for="usuario" class="form-label">Nombre de usuario</label>
          <input type="text" class="form-control" id="usuario" required placeholder="Nombre de usuario"
            pattern="[A-Za-z][A-Za-z0-9\-]*" minlength="3" maxlength="30" title="Solo letras, números o guión"/>
        </div>

  
        <div class="mb-3">
          <label for="correo" class="form-label">Correo electrónico</label>
          <input type="email" class="form-control" id="correo" placeholder="mail@site.com" required/>

        </div>


        <div class="mb-3">
          <label for="contrasena" class="form-label">Contraseña</label>
          <input type="password" class="form-control" id="contrasena" placeholder="Contraseña" minlength="6"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
            title="Debe contener más de 6 caracteres, incluyendo número, mayúscula y minúscula" required/>
        </div>

     
        <div class="mb-4">
          <label for="confirmarcontrasena" class="form-label">Confirmar contraseña</label>
          <input type="password" class="form-control" id="confirmarcontrasena" placeholder="Confirmar contraseña"
            minlength="6" required/>
        </div>


        <div class="d-grid">
          <button id="btnRegister" type="submit" class="btn btn-color btn-outline-dark">Registrarse</button>
        </div>

      </form>
    </div>
  </main>


    
    ) }

export default registrar;