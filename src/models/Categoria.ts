export interface Categoria {
    id: number
    nome: string
    descricao: string | null
    produto: Produto[]
}

export interface Produto {
    id: number
    nome: string
    descricao: string
    quantidade: number
    laboratorio: string
    preco: number
    foto: string
}