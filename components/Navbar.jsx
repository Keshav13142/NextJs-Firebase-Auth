import Head from "next/head";
import { useState } from "react";
import { MdDarkMode } from "react-icons/md";

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
            <h1 className="text-4xl">Next-Firebase-Demo</h1>
            <MdDarkMode
              className="text-2xl cursor-pointer"
              onClick={() => setIsDarkMode(!isDarkMode)}
            />
          </div>
          {children}
        </div>
      </main>
    </div>
  );
};

export default Navbar;
