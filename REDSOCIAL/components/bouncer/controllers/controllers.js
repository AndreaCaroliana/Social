const url = "http://192.168.1.103:3000";

export const getRegister = async (user) => {
  const response = await fetch(url + "/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body:JSON.stringify(user)
  });

  return response.json()
};

export const getLogin = async (user) => {
  const response = await fetch(url + "/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body:JSON.stringify(user)
  });
  const responseBody=await response.json()
  responseBody.status=response.status
  return responseBody
};

