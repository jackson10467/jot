import axios from 'axios';

const baseUrl = process.env.NODE_ENV === 'production' ? /* link to your heroku app. Example:*/'https://jot-jv.herokuapp.com/' : 'http://localhost:3000' 

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
  const resp = await api.get(`/users/${user_id}/categorys`);
  return resp.data;
};

export const getOneCategory = async (user_id,category_id) => {
  const resp = await api.get(`/users/${user_id}/categorys/${category_id}`);
  return resp.data;
}

export const postCategory = async (user_id, categoryData) => {
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

//JOTS

export const getAllJots = async (user_id,categoryID) => {
  const resp = await api.get(`/users/${user_id}/categorys/${categoryID}/jots`);
  return resp.data;
};

export const getOneJot = async (user_id,categoryID,jotID) => {
  const resp = await api.get(`/users/${user_id}/categorys/${categoryID}/jots/${jotID}`);
  return resp.data;
}

export const postJot = async (user_id,categoryID,jotData) => {
  const resp = await api.post(`/users/${user_id}/categorys/${categoryID}/jots/`, jotData);
  return resp.data;
}

export const putJot = async (user_id,categoryID,jotID,jotData) => {
  const resp = await api.put(`/users/${user_id}/categorys/${categoryID}/jots/${jotID}`, jotData);
  return resp.data;
}

export const destroyJot = async (user_id,category_id,jotID) => {
  const resp = await api.delete(`/users/${user_id}/categorys/${category_id}/jots/${jotID}`);
  return resp;
}
export const destroyAllJots = async (user_id,category_id) => {
  const resp = await api.delete(`/users/${user_id}/categorys/${category_id}/jots/`);
  return resp;
}
