import {
  GoogleAuthProvider,
  isSignInWithEmailLink,
  sendSignInLinkToEmail,
  signInWithEmailLink,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { BsGoogle } from "react-icons/bs";
import { SiGithub } from "react-icons/si";
import { AppContext } from "../context/AppContext";
import { auth } from "../utils/firebase_auth";

const actionCodeSettings = {
  url: "http://localhost:3000/",
  handleCodeInApp: true,
};

const Auth = () => {
  const googleProvider = new GoogleAuthProvider();

  const [email, setEmail] = useState("");

  const [isMobile, setIsMobile] = useState(false);

  const [isDumb, setIsDumb] = useState(false);

  const [isEmailSent, setIsEmailSent] = useState(false);

  const [error, setError] = useState(null);

  const router = useRouter();

  const { user, setShowToast, setUser } = useContext(AppContext);

  const [showInput, setShowEmailInput] = useState(false);

  const handleEmailLogin = async (email, password) => {};

  const checkUserSignIn = async () => {
    // if (isSignInWithEmailLink(auth, window.location.href)) {
    //   let email = localStorage.getItem("emailForSignIn");
    //   if (!email) {
    //     // set;
    //   }
    //   signInWithEmailLink(auth, email, window.location.href)
    //     .then((result) => {
    //       localStorage.removeItem("emailForSignIn");
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
  };

  const sendEmailLink = async () => {
    if (
      email.trim() === "" ||
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    ) {
      setError("Enter a valid email");
      return;
    }
    const response = await sendSignInLinkToEmail(
      auth,
      email,
      actionCodeSettings
    )
      .then(() => {
        localStorage.setItem("emailForSignIn", email);
      })
      .catch((error) => {
        console.log(error.message);
      });
    // setShowToast({
    //   duration: 2000,
    //   message: "Registration sucessfull !! ",
    //   type: "success",
    // });
    setIsEmailSent(true);
  };

  const importantStuff = () => {
    let details = navigator.userAgent;

    let regexp = /android|iphone|kindle|ipad/i;

    let isMobileDevice = regexp.test(details);

    if (isMobileDevice) {
      setIsMobile(true);
    }
  };

  const googleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      setShowToast({
        duration: 3000,
        message: "Wow you did it 😮",
        type: "success",
      });
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    // checkUserSignIn();
    importantStuff();
  }, []);

  return (
    <div className="max-w-lg mx-auto mt-10 flex flex-col p-10 shadow-xl rounded-xl dark:bg-slate-700">
      <h1 className="text-3xl text-blue-500 font-medium font-mono">
        Hello there !!
      </h1>
      <p className="text-lg my-5">
        This app is just me trying out new things... :)
      </p>
      {isEmailSent ? (
        <div className="self-center text-lg flex flex-col items-center">
          <p>
            An link has been sent to{" "}
            <span className="text-blue-600">{email}</span>
          </p>
          <p>(please check the spam folder too)</p>
          <button
            className="bg-blue-400 rounded-xl p-2 font-medium text-white mt-4"
            onClick={() => setIsEmailSent(false)}
          >
            Go back
          </button>
        </div>
      ) : (
        <>
          <div
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="flex flex-col gap-4 px-2"
          >
            <div className="w-full">
              <input
                value={email}
                className={`w-full border-gray-300 border-2 rounded-md p-2  text-black dark:bg-gray-100 placeholder:font-lg placeholder:font-medium ${
                  error && "border-red-400"
                }`}
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError(null);
                }}
              />
              <p className="text-red-500">{error}</p>
            </div>
            <button
              id="submit"
              className="bg-blue-400 rounded-xl p-2 font-medium text-white"
              onClick={sendEmailLink}
            >
              Get started 🚀
            </button>
          </div>
          <span className="border-4 rounded-full self-center p-2 border-red-200 my-5">
            OR
          </span>
          <button
            onClick={googleSignIn}
            className="flex justify-evenly items-center p-2 bg-violet-300 rounded-lg text-white font-medium text-lg mb-5 "
          >
            <BsGoogle />
            Login with Google
          </button>
          <button className="flex justify-evenly items-center p-2 bg-violet-300 rounded-lg text-white font-medium text-lg">
            <SiGithub />
            Login with Github
          </button>
        </>
      )}
      <p className="text-lg self-center mt-5">
        Click here to test your IQ{" "}
        {isMobile ? (
          <a
            className="text-blue-500 underline font-medium cursor-pointer"
            href="https://youtu.be/j5a0jTc9S10"
            target="_blank"
          >
            Go ahead
          </a>
        ) : (
          <a
            className="text-blue-500 underline font-medium"
            onClick={() => {
              window.open("https://youtu.be/dQw4w9WgXcQ", "_blank");
            }}
          >
            Go ahead
          </a>
        )}
      </p>
    </div>
  );
};

export default Auth;
