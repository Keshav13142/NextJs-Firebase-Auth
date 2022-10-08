import Auth from "../../components/Auth";
const Register = () => {
  const handleEmailSignUp = (email, password) => {};

  return (
    <Auth
      handleSubmit={handleEmailSignUp}
      title="Sign Up and Get started"
      type="Register"
    />
  );
};

export default Register;
