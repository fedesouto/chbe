import baseUrl from "../config";

export const login = async (data: object, callback: any) => {
  const body = JSON.stringify(data);
  const response = await fetch(`${baseUrl}api/session/login`, {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: body,
  });
  if (response.ok) {
    const data = await response.json();
    callback(data);
  } else {
    console.log("login error");
  }
};

export const logout = async () => {
  const response = await fetch(`${baseUrl}api/session/logout`, {
    method: "POST",
  });

  if (response.ok) {
    const data = await response.text();
    return data;
  } else {
    console.log("logout error");
  }
};

export const register = async (data: object, callback: any) => {
    const body = JSON.stringify(data);
    const response = await fetch(`${baseUrl}api/session/signup`, {
      method: "POST",
      headers: { Accept: "application/json", "Content-Type": "application/json" },
      body: body,
    });
    if (response.ok) {
      const data = await response.json();
      callback(data);
    } else {
      const data = await response.text()
      console.log(data)
    }
  };