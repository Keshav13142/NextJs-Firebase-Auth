import { createUserWithEmailAndPassword } from "firebase/auth";
import Auth from "../components/Auth";
import { auth } from "../utils/firebase_auth";

const Home = () => {
  const handleEmailLogin = async (email, password) => {
    try {
      const response = await createUserWithEmailAndPassword(
        email,
        auth,
        password
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Auth title="Login here!!" handleSubmit={handleEmailLogin} type="Login" />
  );
};

export default Home;
