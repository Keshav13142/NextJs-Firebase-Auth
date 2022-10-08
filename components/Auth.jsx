import Link from "next/link";
import { useState } from "react";
import { BsGoogle } from "react-icons/bs";
import { SiGithub } from "react-icons/si";

const Login = ({ handleSubmit, title, type }) => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  return (
    <div className="max-w-lg mx-auto mt-10 flex flex-col p-10 shadow-xl rounded-xl dark:bg-slate-700">
      <h1 className="text-3xl text-blue-500 font-medium font-mono">{title}</h1>
      <p className="text-lg my-5">
        If you're interested in learning new things, feel free to use this
        app...
      </p>
      <div
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="flex flex-col gap-4 px-2"
      >
        <input
          value={email}
          className="border-gray-300 border-2 rounded-xl p-2  text-black dark:bg-gray-100 placeholder:font-lg placeholder:font-medium"
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          value={password}
          className="border-gray-300 border-2 rounded-xl p-2 text-black dark:bg-gray-100 placeholder:font-lg placeholder:font-medium"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          id="submit"
          className="bg-blue-400 rounded-xl p-2 font-medium text-white mt-4"
          onClick={() => handleSubmit(email, password)}
        >
          Get started 🚀
        </button>
        {type === "Login" ? (
          <p className="self-center font-medium">
            New user?{" "}
            <Link href="/register">
              <span className="text-blue-700 cursor-pointer dark:text-blue-500">
                Sign Up
              </span>
            </Link>
          </p>
        ) : (
          <p className="self-center font-medium">
            Alderady have an account?{" "}
            <Link href="/">
              <span className="text-blue-700 cursor-pointer dark:text-blue-500">
                Login
              </span>
            </Link>
          </p>
        )}
      </div>
      <span className="border-4 rounded-full self-center p-2 border-red-200 my-5">
        OR
      </span>
      <button className="flex justify-evenly items-center p-2 bg-violet-300 rounded-lg text-white font-medium text-lg mb-5 ">
        <BsGoogle />
        Login with Google
      </button>
      <button className="flex justify-evenly items-center p-2 bg-violet-300 rounded-lg text-white font-medium text-lg">
        <SiGithub />
        Login with Github
      </button>
    </div>
  );
};

export default Login;
