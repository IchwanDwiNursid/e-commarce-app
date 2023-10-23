import { useState, useEffect } from "react";
import CardProduct from "../Components/Fragments/CardProduct.jsx";
import { getProducts } from "../services/product.service.js";
import { useLogin } from "../Hooks/useLogin.jsx";
import TableCart from "../Components/Fragments/TableCart.jsx";
import Navbar from "../Components/Layouts/Navbar.jsx";
import { DarkMode } from "../context/DarkMode.jsx";
import { useContext } from "react";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  useLogin();

  //-------useContext---------
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <div
        className={`flex justify-center py-5 ${isDarkMode && "bg-slate-900"}`}
      >
        <div className="w-4/6 flex flex-wrap">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header
                  images={product.image}
                  id={product.id}
                ></CardProduct.Header>
                <CardProduct.Body name={product.title}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer
                  price={product.price}
                  id={product.id}
                ></CardProduct.Footer>
              </CardProduct>
            ))}
        </div>
        <div className="w-2/6 ">
          <h1 className="text-3xl text-blue-700 font-bold ml-4">Cart</h1>
          <TableCart products={products}></TableCart>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
