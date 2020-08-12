import api from "./api-helper"

export const readAllBooks = async () => {
  const resp = await api.get('/books');
  return resp.data;
}

export const readOneBook = async (id) => {
  const resp = await api.get(`/books/${id}`);
  return resp.data;
}
