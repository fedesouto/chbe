import baseUrl from "../config"


export const getCart = async (cartId: string = null) => {
    const data = fetch(`${baseUrl}api/carritos/${cartId}/productos`)
    const json = await (await data).json()
    return json;
}

export const addProductToCart = async (data: object, cartId: string = null) => {
    const body = JSON.stringify(data)
    const response = await fetch(`${baseUrl}api/carritos/${cartId}/productos`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Role': 'admin'
        },
        body: body
    })
    const json = await response.json()
    return json
}

export const deleteProductFromCart = async (id_producto: string, cartId: string = null) => {
    const response = await fetch(`${baseUrl}api/carritos/${cartId}/productos/${id_producto}`, { method: 'DELETE' })
    const json = await response.json();
    console.log(json)
}