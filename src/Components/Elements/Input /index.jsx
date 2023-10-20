import { forwardRef } from "react";
import Input from "./Input.jsx";
import Label from "./Label.jsx";

const InputForm = forwardRef((props, ref) => {
  const { name, label, type, placeholder } = props;
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{label}</Label>
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        ref={ref}
      ></Input>
    </div>
  );
});

export default InputForm;
