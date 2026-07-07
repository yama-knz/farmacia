import { deletarCategoria } from "../../services/CategoriaService"

interface DeletarCategoriaProps {
    id: number
}

function DeletarCategoria({ id }: DeletarCategoriaProps) {

    async function removerCategoria() {

        try {
            await deletarCategoria(id)

            alert("Categoria deletada com sucesso!")

        } catch (error) {
            console.log(error)
            alert("Erro ao deletar categoria")
        }

    }

    return (
        <button
            className="bg-red-600 text-white p-2 rounded"
            onClick={removerCategoria}
        >
            Deletar
        </button>
    )
}

export default DeletarCategoria