import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode.jsx";
import { useContext } from "react";

const AuthLayouts = (props) => {
  const { children, title, hello, type } = props;
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

  console.log(isDarkMode);
  return (
    <div
      className={`flex justify-center min-h-screen items-center ${
        isDarkMode && "bg-slate-900"
      }`}
    >
      <div className="w-full max-w-xs">
        <button
          className="absolute right-2 top-2 bg-blue-600 p-2 text-white rounded"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? "Light" : "Dark"}
        </button>
        <h1 className="text-3xl text-red-600 font-bold mb-2">{title}</h1>
        <p className="font-medium text-slate-400 mb-8">{hello}</p>
        {children}
        <p
          className={`text-sm mt-5 text-center ${
            isDarkMode && "text-amber-400"
          }`}
        >
          {type == "login"
            ? "Don't Have an Account ?  "
            : "Alredy Have an Account ? "}
          {type == "login" && (
            <Link to="/register" className="font-bold text-red-600">
              Sign Up
            </Link>
          )}
          {type == "register" && (
            <Link to="/login" className="font-bold text-red-600">
              Sign In
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthLayouts;
