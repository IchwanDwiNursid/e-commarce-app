import AuthLayouts from "../Components/Layouts/AuthLayouts.jsx";
import FormRegister from "../Components/Fragments/FormRegister.jsx";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <AuthLayouts title="Register" hello="Register Your Account" type="register">
      <FormRegister></FormRegister>
    </AuthLayouts>
  );
};

export default RegisterPage;
