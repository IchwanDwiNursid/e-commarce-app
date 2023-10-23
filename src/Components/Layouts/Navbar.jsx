import { useSelector } from "react-redux";
import { useLogin } from "../../Hooks/useLogin.jsx";
import Button from "../Elements/Button/index.jsx";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { DarkMode } from "../../context/DarkMode.jsx";
import { useTotalPrice } from "../../context/TotalPriceContext.jsx";

const Navbar = () => {
  const username = useLogin();
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);
  const { total } = useTotalPrice();

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  }, [cart]);

  const HandleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  return (
    <div className="flex justify-end h-20 bg-red-500 text-white items-center px-10 ">
      {username}
      <Button classname="ml-5 bg-blue-600" onClick={HandleLogout}>
        Logout
      </Button>
      <div className="flex items-center bg-blue-600 p-2 rounded-md ml-5">
        item : {totalCart} | price : ${total}
      </div>
      <Button
        classname={`px-10 mx-5 bg-black  ${
          isDarkMode && "bg-white text-blue-600"
        }`}
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </Button>
    </div>
  );
};

export default Navbar;
