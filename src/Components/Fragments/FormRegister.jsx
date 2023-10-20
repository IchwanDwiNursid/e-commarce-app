import InputForm from "../Elements/Input /index.jsx";
import Button from "../Elements/Button/index.jsx";

const FormRegister = () => {
  return (
    <form>
      <InputForm
        name="FullName"
        label="FullName"
        type="text"
        placeholder="Insert Your Name ....."
      />
      {/* ------- */}
      <InputForm
        name="email"
        label="Email"
        type="email"
        placeholder="Example@mail.com"
      />
      <InputForm
        name="password"
        label="Password"
        type="text"
        placeholder="********"
      />
      <InputForm
        name="password"
        label="Confirm Password"
        type="text"
        placeholder="********"
      />
      <Button className="bg-red-500 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;
