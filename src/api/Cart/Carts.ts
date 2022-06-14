const baseUrl:string = 'http://192.168.1.132:8080/'
const id_carrito = 2;

export const getCart = async () => {
    const data = fetch(`${baseUrl}api/carrito/${id_carrito}/productos`)
    const json = await (await data).json()
    return json;
}

export const addProductToCart = async (data:object) => {
    const body = JSON.stringify(data)
    const response = await fetch(`${baseUrl}api/carrito/${id_carrito}/productos`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Role': 'admin'
        }, 
        body: body
    })
    const json = await response.json()
    console.log(json)
}