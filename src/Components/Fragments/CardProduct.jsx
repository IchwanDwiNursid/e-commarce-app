import { Link } from "react-router-dom";
import Button from "../Elements/Button/index.jsx";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux /slices/cartSlice.js";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-sm  bg-fuchsia-500  border border-slate-500 rounded-lg shadow my-2 mx-2">
      {children}
    </div>
  );
};

const Body = (props) => {
  const { name, children } = props;
  return (
    <div className="px-5 pb-5">
      <Link href="">
        <h5 className="text-xl font-semibold tracking-tight text-black">
          {name.substring(0, 20)}...
        </h5>
        <p className="text-m text-green-700">{children.substring(0, 100)}</p>
      </Link>
    </div>
  );
};

const Footer = (props) => {
  const { price, id } = props;
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-blue-700">
        {price.toLocaleString("id-ID", {
          style: "currency",
          currency: "USD",
        })}
      </span>
      <Button
        classname="bg-blue-700"
        onClick={() => dispatch(addToCart({ id, qty: 1 }))}
      >
        Add To Cart
      </Button>
    </div>
  );
};

const Header = (props) => {
  const { images, id } = props;
  return (
    <Link to={`/product/${id}`}>
      <img
        src={images}
        alt="product"
        className="p-8 rounded-t-lg h-60 w-full object-cover"
      />
    </Link>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
