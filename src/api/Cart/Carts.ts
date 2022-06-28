import baseUrl from "../config"

export const getCart = async () => {
    const id_carrito = localStorage.getItem('id_carrito') || null
    const data = fetch(`${baseUrl}api/carritos/${id_carrito}/productos`)
    const json = await (await data).json()
    return json;
}

export const addProductToCart = async (data:object) => {
    const id_carrito = localStorage.getItem('id_carrito') || null
    const body = JSON.stringify(data)
    const response = await fetch(`${baseUrl}api/carritos/${id_carrito}/productos`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Role': 'admin'
        }, 
        body: body
    })
    const json = await response.json()
    localStorage.setItem('id_carrito', json)
}

export const deleteProductFromCart = async (id_producto:string) => {
    const id_carrito = localStorage.getItem('id_carrito') || null
    const response = await fetch(`${baseUrl}api/carritos/${id_carrito}/productos/${id_producto}`, {method: 'DELETE'})
    const json = await response.json();
    console.log(json)
}