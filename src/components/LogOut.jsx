import React from 'react';
import { useAuth } from '../hooks/useAuth';

function lOut() {
    const { isAuthenticated, user, logout } = useAuth();

    const handleLogout = () => {
        if (window.confirm('¿Estás seguro de que quieres cerrar sesión?')) {
            logout();
        }
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Mi App</a>
                
                <div className="navbar-nav ms-auto">
                    {isAuthenticated ? (
                        <div className="d-flex align-items-center">
                            <span className="navbar-text me-3">
                                Bienvenido, {user}
                            </span>
                            <button 
                                className="btn btn-outline-danger btn-sm"
                                onClick={handleLogout}
                            >
                                Cerrar Sesión
                            </button>
                        </div>
                    ) : (
                        <a className="nav-link" href="/login">
                            Iniciar Sesión
                        </a>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default lOut;