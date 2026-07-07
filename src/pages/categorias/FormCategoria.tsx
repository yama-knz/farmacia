import { useState } from "react"
import type { Categoria } from "../../models/Categoria"
import { cadastrarCategoria, atualizarCategoria } from "../../services/CategoriaService"


function FormCategoria() {

    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        nome: "",
        descricao: "",
        produto: []
    })

    function atualizarEstado(e: React.ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        })
    }

    async function enviarFormulario(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        try {
            if (categoria.id === 0) {
                await cadastrarCategoria(categoria)
            } else {
                await atualizarCategoria(categoria)
            }

            alert("Categoria cadastrada com sucesso!")

            setCategoria({
                id: 0,
                nome: "",
                descricao: "",
                produto: []
            })

        } catch (error) {
            console.log(error)
            alert("Erro ao cadastrar categoria")
        }
    }

    return (
        <form onSubmit={enviarFormulario} className="flex flex-col gap-4 p-4">

            <input
                className="border p-2 rounded"
                type="text"
                placeholder="Nome da categoria"
                name="nome"
                value={categoria.nome}
                onChange={atualizarEstado}
            />

            <input
                className="border p-2 rounded"
                type="text"
                placeholder="Descrição"
                name="descricao"
                value={categoria.descricao ?? ""}
                onChange={atualizarEstado}
            />

            <button
                className="bg-blue-600 text-white p-2 rounded"
                type="submit"
            >
                {categoria.id === 0 ? "Cadastrar" : "Atualizar"}
            </button>

        </form>
    )
}

export default FormCategoria