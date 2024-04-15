import { jwtDecode } from "jwt-decode";

function setToken(token){
  localStorage.setItem('access_token', token);
}

export function getToken(){
    return localStorage.getItem('access_token');
}

export function readToken() {
  try {
    const token = getToken();
    return token ? jwtDecode(token) : null;
  } catch (err) {
    return null;
  }
}

export function isAuthenticated(){
  const token = readToken();  
  return (token) ? true : false;
}

export function removeToken(){
  localStorage.removeItem('access_token');
}

export async function authenticateUser(user, password) {
  // Simulating server-side logic (Replace with your own logic)
  const validUsers = {
    "user1": "password1",
    "user2": "password2"
  };

  if (validUsers[user] && validUsers[user] === password) {
    const token = "simulated_jwt_token"; // You can generate a token here if needed
    setToken(token);
    console.log("true is returne")
    return true; // Return true upon successful authentication
  } else {
    throw new Error("Invalid username or password");
  }
}
