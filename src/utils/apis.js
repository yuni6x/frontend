const BASE_URL = 'http://localhost:3005';

function getAccessToken() {
  return localStorage.getItem('accessToken');
}

function putAccessToken(accessToken) {
  return localStorage.setItem('accessToken', accessToken);
}

async function fetchWithToken(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });
}

async function login({ email, password }) {
  const response = await fetch(`${BASE_URL}/user/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    alert(responseJson.message);
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

async function register({ fullName, email, password, phoneNumber, img, kecamatan, kelurahan, kota, provinsi, id_role }) {
  const response = await fetch(`${BASE_URL}/user/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ fullName, email, password, phoneNumber, img, kecamatan, kelurahan, kota, provinsi, id_role }),
  });

  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    alert(responseJson.message);
    return { error: true };
  }

  return { error: false };
}

async function getAllWorker(){
  const response = await fetchWithToken(`${BASE_URL}/tukang`);

  const responseJson = await response.json();
  console.log(responseJson.data)
  return responseJson.data;
}

async function getUserById(id){
  const response = await fetchWithToken(`${BASE_URL}/user/${id}`);

  const responseJson = await response.json();
  return responseJson.data;
}

export {
  getAccessToken,
  putAccessToken,
  login,
  register,
  getAllWorker,
  getUserById,
};