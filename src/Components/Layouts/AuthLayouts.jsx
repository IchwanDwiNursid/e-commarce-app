import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
  const { children, title, hello, type } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl text-red-600 font-bold mb-2">{title}</h1>
        <p className="font-medium text-slate-400 mb-8">{hello}</p>
        {children}
        <p className="text-sm mt-5 text-center">
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
