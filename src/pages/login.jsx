import AuthLayouts from "../Components/Layouts/AuthLayouts.jsx";
import FormLogin from "../Components/Fragments/FormLogin.jsx";

const LoginPage = () => {
  return (
    <AuthLayouts
      title="Login"
      hello="Welcome,Please enter your details"
      type="login"
    >
      <FormLogin></FormLogin>
    </AuthLayouts>
  );
};

export default LoginPage;
