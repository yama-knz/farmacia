import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="bg-blue-600 text-white p-4 flex gap-4">

            <Link to="/">
                Home
            </Link>

            <Link to="/categorias">
                Categorias
            </Link>

            <Link to="/cadastrar-categoria">
                Nova Categoria
            </Link>

        </nav>
    )
}

export default Navbar