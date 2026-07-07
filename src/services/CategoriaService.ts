import axios from "axios"
import type { Categoria } from "../models/Categoria"

const api = axios.create({
    baseURL: "https://farmacia-jjxo.onrender.com"
})

export async function listarCategorias() {
    return await api.get<Categoria[]>("/categorias")
}

export async function cadastrarCategoria(categoria: Categoria) {
    return await api.post<Categoria>("/categorias", categoria)
}

export async function atualizarCategoria(categoria: Categoria) {
    return await api.put<Categoria>(`/categorias/${categoria.id}`, categoria)
}

export async function deletarCategoria(id: number) {
    return await api.delete(`/categorias/${id}`)
}