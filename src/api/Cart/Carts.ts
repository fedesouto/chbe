import { baseUrl, CartProductDto, setBasicHeaders } from "../config";

export const getCart = async (cartId: string = null) => {
  const data = await fetch(`${baseUrl}api/carritos/${cartId}/productos`, {
    headers: setBasicHeaders(),
  });
  const json = await data.json();
  return json;
};

export const addProductToCart = async (data: CartProductDto, cartId: string = null) => {
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
