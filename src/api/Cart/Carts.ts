import { baseUrl, CartProductDto, setBasicHeaders } from "../config";

export const getCart = async (cartId: string = null) => {
  if (!cartId) {
    const newCart = await fetch(`${baseUrl}api/carritos/`, {
      headers: setBasicHeaders(),
      method: "POST",
    });
    cartId = await newCart.json();
  }
  const data = await fetch(`${baseUrl}api/carritos/${cartId}/productos`, {
    headers: setBasicHeaders(),
  });
  const json = await data.json();
  return json;
};

export const addProductToCart = async (
  data: CartProductDto,
  cartId: string = null
) => {
  const body = JSON.stringify(data);
  const response = await fetch(`${baseUrl}api/carritos/${cartId}/productos`, {
    method: "POST",
    headers: setBasicHeaders(),
    body: body,
  });
  const json = await response.json();
  return json;
};

export const deleteProductFromCart = async (
  id_producto: string,
  cartId: string = null
) => {
  const response = await fetch(
    `${baseUrl}api/carritos/${cartId}/productos/${id_producto}`,
    { method: "DELETE", headers: setBasicHeaders() }
  );
  const json = await response.json();
};

export const createOrder = async (cartId: string) => {
  try {
    const newOrder = await fetch(`${baseUrl}api/carritos/${cartId}/checkout`, {
      method: "POST",
      headers: setBasicHeaders(),
    });
    const response = await newOrder.json();
    return response;
  } catch (error) {
    throw error;
  }
};
