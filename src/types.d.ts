export interface Product {
    _id:  string
    name: string
    description: string
    image: string
    price: number
    stock: number
  }

export interface Cart {
  id:  string
  timestamp: number
  productos: Array<Product>
}

export type Chat = {
  message: string,
  type: string,
  email: string,
  _id: string
}