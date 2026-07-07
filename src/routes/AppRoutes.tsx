import { Routes, Route } from 'react-router-dom'
import Home from '../components/home/Home'
import ListarCategorias from '../pages/categorias/ListarCategorias'
import FormCategoria from '../pages/categorias/FormCategoria'

function AppRoutes() {
    return (
        <Routes>

            <Route
                path="/"
                element={<Home />}
            />

            <Route
                path="/categorias"
                element={<ListarCategorias />}
            />

            <Route
                path="/cadastrar-categoria"
                element={<FormCategoria />}
            />

        </Routes>
    )
}

export default AppRoutes