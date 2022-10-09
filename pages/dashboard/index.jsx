import { signOut } from "firebase/auth";
import { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { auth } from "../../utils/firebase_auth";

const Dashboard = () => {
  const { user, setUser } = useContext(AppContext);

  const handleSignOut = async () => {
    await signOut(auth);
    setUser(null);
    localStorage.clear();
  };

  return (
    <div className="flex flex-col max-w-xs mx-auto mt-10 gap-7">
      <h2 className=" flex gap-2 justify-center items-center text-2xl">
        Helloo!
        <span className="text-cyan-500">{user?.displayName}</span>
      </h2>
      <img
        src={user?.photoURL}
        alt="avatar"
        className="rounded-full max-w-xs self-center transition-transform translate scale-100 ease-in-out"
      />
      <button
        onClick={handleSignOut}
        className="bg-blue-400 rounded-xl p-2 font-medium text-white "
      >
        Sign Out
      </button>
    </div>
  );
};

export default Dashboard;
