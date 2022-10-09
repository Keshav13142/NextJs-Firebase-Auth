import { useContext, useEffect, useState } from "react";
import { BsEmojiSunglasses, BsInfoCircle } from "react-icons/bs";
import { VscError } from "react-icons/vsc";
import { AppContext } from "../context/AppContext";

const Toast = () => {
  const { showToast, setShowToast } = useContext(AppContext);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (showToast) {
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
        setShowToast(null);
      }, showToast.duration);
    }
  }, [showToast]);

  if (isVisible)
    return (
      <div
        className={`flex max-w-xl mx-auto mt-5 items-center gap-5 text-lg border-2 
        ${showToast?.type === "error" && "border-red-400 bg-red-300"}
          ${showToast?.type === "info" && "border-blue-300 bg-blue-300"}
          ${showToast?.type === "success" && "border-green-400 bg-green-300"}
         p-2 rounded-md animate-pulse ease-in`}
      >
        {showToast?.type === "error" && <VscError className="text-xl" />}
        {showToast?.type === "info" && <BsInfoCircle className="text-xl" />}
        {showToast?.type === "success" && (
          <BsEmojiSunglasses className="text-xl" />
        )}
        <VscError className="text-xl" />
        <span>{showToast?.message}</span>
      </div>
    );
};

export default Toast;
