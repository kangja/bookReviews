import api from "./api-helper"

export const readAllReviews = async (id) => {
  const resp = await api.get(`books/${id}/reviews`);
  return resp.data;
}

export const readOneReview = async (id, review_id) => {
  const resp = await api.get(`/books/${id}/reviews/${review_id}`);
  return resp.data;
}

// export const postReview = async (id, review_id, reviewData) => {
//   const resp = await api.post(`books/${id}/reviews/${review_id}`, { review: reviewData });
//   return resp.data;
// }

export const postReview = async (id, reviewData) => {
  const resp = await api.post(`books/${id}/reviews`, { review: reviewData });
  return resp.data;
}

export const putReview = async (id, review_id, reviewData) => {
  const resp = await api.put(`/books/${id}/reviews/${review_id}`, { review: reviewData });
  return resp.data;
}

export const destroyReview = async (id, review_id) => {
  const resp = await api.delete(`books/${id}/reviews/${review_id}`);
  return resp;
}