const Button = (props) => {
  const {
    classname = "bg-red-600",
    children = "Buynow",
    type = "button",
    onClick = () => {},
  } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${classname}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
