import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/products/actions";
import {
  selectProductsLoading,
  selectProductsFetched,
} from "../store/products/selectors";
import "./Products.css";

export default function ProductFeed() {
  const dispatch = useDispatch();
  const loading = useSelector(selectProductsLoading);
  const products = useSelector(selectProductsFetched);

  useEffect(() => {
    if (!products.length) {
      dispatch(fetchProducts);
    }
  }, [dispatch, products.length]);

  return (
    <div>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <div>
          {products.map((product) => {
            return (
              <div key={product.id}>
                <div className="flexContainer">
                  <div className="BoxStyle">
                    <h3>{product.name}</h3>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="ImgStyle"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
