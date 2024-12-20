import { GiHamburgerMenu } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";
import logo from "/logo.jpeg";
import { ItemsSidebar } from "./ItemsSidebar";
import { useState } from "react";

export const Sidebar = () => {
  const [showItems, setShowItems] = useState<boolean>(false);

  const classItem: string = "bg-secundary text-white text-gray-500";

  return (
    <div className="bg-slate-150 flex h-screen">
      <div className="w-28 rounded-r-3xl shadow-md">
        <div className="flex justify-center items-center m-5">
          <img
            src={logo}
            alt="Logo de Masco Plus"
            className="w-16 rounded-full"
          />
        </div>
        <div className="flex flex-col items-center">
          <div
            onClick={() => setShowItems(!showItems)}
            className={`${
              showItems ? classItem : ""
            } bg-slate-150 p-2 rounded-md shadow-2xl cursor-pointer hover:p-5 transition-all hover:bg-secundary hover:text-white`}
          >
            <GiHamburgerMenu size={45} />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showItems && (
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-72 flex flex-col items-center p-5"
          >
            <ItemsSidebar />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
