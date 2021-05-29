import axios from "axios";

export function startLoading() {
  return {
    type: "products/startLoading",
  };
}

export function productsFetched(allProducts) {
  return {
    type: "products/productsFetched",
    payload: allProducts,
  };
}

export async function fetchProducts(dispatch, getState) {
  try {
    dispatch(startLoading());
    const response = await axios.get(`http://localhost:4000/products`);

    const allProducts = response.data;
    console.log(allProducts);
    dispatch(productsFetched(allProducts));
  } catch (error) {
    console.log("error:", error.message);
  }
}
