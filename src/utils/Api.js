export const BASE_URL = `http://localhost:8000/pack_order/user.id`;

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return res.json().then((data) => {
    throw new Error(data.message);
  });
};

export const finishOrder = (order) =>
  fetch(`${BASE_URL}/pack_order/${order.id}`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      is_completed: order.is_completed,
      user_id: order.user_id,
      comment: order.comment,
      used_cartons: order.used_cartons,
    }),
  }).then(checkResponse);

export const getOrder = () =>
  fetch(`${BASE_URL}/pack_order`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then(checkResponse);