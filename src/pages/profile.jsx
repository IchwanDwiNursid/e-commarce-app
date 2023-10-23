import Navbar from "../Components/Layouts/Navbar.jsx";
import { useLogin } from "../Hooks/useLogin.jsx";

const ProfilePage = () => {
  const username = useLogin();
  return (
    <div>
      <Navbar></Navbar>
      <h1>Profile</h1>
      <h1>Username : {username}</h1>
    </div>
  );
};

export default ProfilePage;
