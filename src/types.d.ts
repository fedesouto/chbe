export interface Product {
    id: number
    timestamp: number
    name: string
    description: string
    code: number
    image: string
    price: number
    stock: number
  }

export interface Cart {
  id: number
  timestamp: number
  productos: Array<Product>
}