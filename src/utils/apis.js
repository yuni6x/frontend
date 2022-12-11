const BASE_URL = 'https://api.upik.dev';

function getAccessToken() {
  return localStorage.getItem('accessToken');
}

function putAccessToken(accessToken) {
  return localStorage.setItem('accessToken', accessToken);
}

function isTokenExpired(message){
  return message.toLowerCase().includes('expired') ? true : false
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
    return { error: responseJson.message, data: null };
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
    return { error: responseJson.message };
  }

  return { error: false };
}

async function getAllWorker(){
  const response = await fetchWithToken(`${BASE_URL}/tukang`);

  const responseJson = await response.json();
  console.log(responseJson.message)

  if (responseJson.status !== 'success') {     
    return { error: responseJson.message, data: null };
  }

  return { error: false, data: responseJson.data };
}

async function getUserById(id){
  const response = await fetchWithToken(`${BASE_URL}/user/${id}`);

  const responseJson = await response.json();
  console.log(responseJson)
  if (responseJson.status !== 'success') {
    return { error: responseJson.message, data: null };
  }

  return { error: false, data: responseJson.data };
}

async function postOrder({permintaan, workerId, biayaHarian, biayaPembangunan, estimasiWaktu}){
  console.log(biayaPembangunan)
  const response = await fetchWithToken(`${BASE_URL}/penyewa/order/${workerId}`,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ permintaan, biayaHarian, biayaPembangunan, estimasiWaktu })
  })

  const responseJson = await response.json();
  console.log(responseJson)
  if (responseJson.status !== 'success') {
    return { error: responseJson.message, feedback: null };
  }

  return { error: false, feedback: responseJson.message };
}

// Mendapatkan data list orderan yang telah dilakukan penyewa
async function getOrderPenyewa() {
  const response = await fetchWithToken(`${BASE_URL}/penyewa/order`);
  const responseJson = await response.json();

  console.log(responseJson)
  if (responseJson.status !== 'success') {
    return { error: responseJson.message, data: null };
  }

  return { error: false, data: responseJson.data };
}

// Mendapatkan data order yang masuk ke tukang/pekerja
async function getOrderWorker() {
  const response = await fetchWithToken(`${BASE_URL}/tukang/order`);
  const responseJson = await response.json();

  console.log(responseJson)
  if (responseJson.status !== 'success') {
    return { error: responseJson.message, data: null };
  }

  return { error: false, data: responseJson.data };
}

async function changeOrderStatus({id,status}) {
  console.log(JSON.stringify({ status }))
  const response = await fetchWithToken(`${BASE_URL}/tukang/order/${id}`,{
    method: "PUT",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ status })
  })
  const responseJson = await response.json()

  console.log(responseJson)
  if (responseJson.status !== 'success') {
    return { error: responseJson.message, data: null };
  }

  return { error: false, data: responseJson.data };
}

export {
  getAccessToken,
  putAccessToken,
  login,
  register,
  getAllWorker,
  getUserById,
  isTokenExpired,
  postOrder,
  getOrderPenyewa,
  getOrderWorker,
  changeOrderStatus
};