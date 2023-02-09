import axios from "axios";

const api = axios.create({
    baseURL:"https://viacep.com.br/ws/"
})

export default api;

// export async function api() {
//     const url = 'https://viacep.com.br/ws/';
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
//   }

  // https://viacep.com.br/ws/01001000/json/