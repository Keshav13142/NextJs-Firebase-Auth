import Head from "next/head";
import { useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { SiGithub } from "react-icons/si";
import Toast from "./Toast";

const Navbar = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div>
      <Head>
        <title>Next-Firebase-Demo</title>
        <meta
          name="description"
          content="Trying out NextJS and Firebase authentication"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={isDarkMode ? "dark" : ""}>
        <div className="dark:bg-slate-800 h-screen dark:text-white">
          <div className="w-screen flex p-3 justify-evenly items-center">
            <h1 className="2xl:text-4xl lg:text-2xl xl:text-3xl text-xl font-medium">
              Next-Firebase-Demo
            </h1>
            <div className="flex gap-10 items-center">
              <MdDarkMode
                className="text-2xl cursor-pointer"
                onClick={() => setIsDarkMode(!isDarkMode)}
              />
              <a
                href="https://github.com/Keshav13142/NextJs-Firebase-Auth"
                target={"_blank"}
              >
                <SiGithub className="text-2xl cursor-pointer" />
              </a>
            </div>
          </div>
          <Toast />
          {children}
        </div>
      </main>
    </div>
  );
};

export default Navbar;
