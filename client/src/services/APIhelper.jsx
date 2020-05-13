import axios from 'axios';

const baseUrl = 'http://localhost:3000';

const api = axios.create({
  baseURL: baseUrl
});


// LOGIN //

export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', { auth: loginData });
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
}

export const registerUser = async (registerData) => {
  const resp = await api.post('/users', { user: registerData });
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const resp = await api.get('/auth/verify');
    return resp.data;
  }
  return null;
}

export const removeToken = () => {
  api.defaults.headers.common.authorization = null;
}


// CATEGORIES

export const getAllCategories = async (user_id) => {
  const resp = await axios.get(`${BASE_URL}/users/${user_id}/categorys`);
  return resp.data;
};

export const getOneCategory = async (user_id,category_id) => {
  const resp = await api.get(`/users/${user_id}/categorys/${category_id}`);
  return resp.data;
}

export const postCategory = async (user_id,categoryData) => {
  const resp = await api.post(`/users/${user_id}/categorys`, categoryData);
  return resp.data;
}

export const putCategory = async (user_id,categoryID,categoryData) => {
  const resp = await api.put(`/users/${user_id}/categorys/${categoryID}`, categoryData);
  return resp.data;
}

export const destroyCategory = async (user_id,category_id) => {
  const resp = await api.delete(`/users/${user_id}/categorys/${category_id}`);
  return resp;
}
