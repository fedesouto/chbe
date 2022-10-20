export const baseUrl = "http://192.168.1.132:8080/";
export const setBasicHeaders = () => {
  const token = sessionStorage.getItem("userdata");
  if (token) {
    return {
      Accept: "application/json",
      "Content-Type": "application/json",
      auth: JSON.parse(token),
    };
  } else {
    return {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
  }
};

export interface CartProductDto {
  product: String,
  quantity: Number
}