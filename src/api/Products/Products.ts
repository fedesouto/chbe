import {baseUrl, setBasicHeaders} from "../config"

export const getAll = async () => {
    const data = await fetch(`${baseUrl}api/productos`, {
        headers: setBasicHeaders(), 
    })
    const json = await data.json()
    return json;
}

export const getSingleProduct = async (id:string | number) => {
    const data = fetch(`${baseUrl}api/productos/${id}`, {
        headers: setBasicHeaders()
    })
    const json = await (await data).json()
    return json;
}

export const addProduct = async (data:object) => {
    const body = JSON.stringify(data)
    const response = await fetch(`${baseUrl}api/productos`, {
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