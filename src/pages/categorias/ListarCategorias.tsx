import { useEffect, useState } from "react"
import type { Categoria } from "../../models/Categoria"
import { listarCategorias } from "../../services/CategoriaService"
import CardCategoria from "./CardCategoria"

function ListarCategorias() {

    const [categorias, setCategorias] = useState<Categoria[]>([])

    async function buscarCategorias() {
        try {
            const resposta = await listarCategorias()

            console.log("Dados recebidos:", resposta.data)

            setCategorias(resposta.data)

        } catch (error) {
            console.log("Erro ao buscar categorias:", error)
        }
    }

    useEffect(() => {
        buscarCategorias()
    }, [])

    return (
        <>
            <h1>Lista de Categorias</h1>

            {
                categorias.map((categoria) => (
                    <CardCategoria
                        key={categoria.id}
                        categoria={categoria}
                    />
                ))
            }

        </>
    )
}

export default ListarCategorias