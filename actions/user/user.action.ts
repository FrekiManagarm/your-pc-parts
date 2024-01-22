"use server";

const apiUrl = process.env.API_URL;

async function login(formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  const response = await fetch(apiUrl + "/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });

  const data = await response.json();

  return Response.json({
    statusCode: 201,
    data: data,
  });
}

async function register(formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");
  const lastname = formData.get("lastname");
  const firstname = formData.get("firstname");

  const response = await fetch(apiUrl + "/user/register", {
    method: "POST",
    body: JSON.stringify({
      lastname: lastname,
      firstname: firstname,
      emailAddress: email,
      password: password,
    }),
  });

  const data = await response.json();

  return Response.json({
    statusCode: 201,
    data: data,
  });
}

async function logOut() {}
