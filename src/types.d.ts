export interface Product {
    _id:  string
    timestamp: number
    name: string
    description: string
    code: number
    image: string
    price: number
    stock: number
  }

export interface Cart {
  id:  string
  timestamp: number
  productos: Array<Product>
}