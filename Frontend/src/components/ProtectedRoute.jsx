import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children, requireAuth = true }) {
    const token = localStorage.getItem('token');
    const usuario = localStorage.getItem('USUARIO');

    const isLoggedIn = token && usuario;

    if (requireAuth && !isLoggedIn) {
        // Rota requer autenticação mas usuário não está logado
        return <Navigate to="/login" replace />;
    }

    if (!requireAuth && isLoggedIn) {
        // Rota é para não logados mas usuário está logado
        return <Navigate to="/inicio" replace />;
    }

    return children;
}
