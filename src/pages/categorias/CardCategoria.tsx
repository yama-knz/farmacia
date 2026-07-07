import type { Categoria } from "../../models/Categoria"
import DeletarCategoria from "./DeletarCategoria"

interface CardCategoriaProps {
    categoria: Categoria
}

function CardCategoria({ categoria }: CardCategoriaProps) {
    return (
        <div className="border rounded-lg p-4 m-2 shadow">

            <h2 className="text-xl font-bold">
                {categoria.nome}
            </h2>

            <p>
                {categoria.descricao}
            </p>

            <DeletarCategoria id={categoria.id} />

        </div>
    )
}

export default CardCategoria