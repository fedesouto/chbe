import { baseUrl, setBasicHeaders } from "../config";

export const login = async (data: object, callback: any) => {
  const body = JSON.stringify(data);
  console.log(body);
  const response = await fetch(`${baseUrl}api/session/login`, {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: body,
  });
  if (response.ok) {
    const data = await response.json();
    sessionStorage.setItem("userdata", JSON.stringify(data.token));
    callback(data.user);
  } else {
    throw new Error("Datos incorrectos");
  }
};

export const logout = async () => {
  const response = await fetch(`${baseUrl}api/session/logout`, {
    method: "POST",
  });

  if (response.ok) {
    const data = await response.text();
    sessionStorage.removeItem("userdata");
    return data;
  } else {
    console.log("logout error");
  }
};

export const register = async (data: object, callback: any) => {
  const body = new FormData();
  const bodyKeys = Object.keys(data);

  for (let i = 0; i < bodyKeys.length; i++) {
    const currentKey = bodyKeys[i];
    body.append(currentKey, data[currentKey as keyof typeof data]);
  }
  console.log(body);
  const response = await fetch(`${baseUrl}api/session/signup`, {
    method: "POST",
    body: body,
  });
  if (response.ok) {
    const data = await response.json();
    callback(data);
    console.log(data);
  } else {
    const data = await response.text();
    console.log(data);
  }
};

export const getUserData = async (callback: any) => {
  try {
    const response = await fetch(`${baseUrl}api/session/user`, {
      headers: setBasicHeaders(),
    });
    const json = await response.json();
    console.log(json);
    callback(json);
  } catch (error) {
    throw error;
  }
};
