import axios from "axios";

export const getProducts = (callback) => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((res) => callback(res.data))
    .catch((err) => {
      console.log(err);
    });
};

export const geDetailProducts = (id, callback) => {
  axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((res) => callback(res.data))
    .catch((err) => {
      console.log(err);
    });
};
