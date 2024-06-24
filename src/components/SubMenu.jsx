import { useState } from "react";
import { triangle } from "../assets";

export const SubMenu = () => {
  const [visible, setVisible] = useState(false);
  const [rotate, setRotate] = useState("rotate-0");

  const handleToggle = () => {
    setVisible(!visible);
    setRotate(visible ? "rotate-0" : "rotate-180");
  };

  return (
    <div>
      <div className="p-1.5 hover:bg-BG_DARK rounded-md cursor-pointer flex items-center" onClick={handleToggle}>
        Proteccion contra robo
        <img src={triangle} alt="" width={15} className={`ms-2 transition-transform duration-300 ${rotate}`} />
      </div>
      <ul
        className={`absolute flex flex-col mt-3 bg-BG_LIGHT rounded p-1 min-w-[12.5rem] border border-gray-400 transition-all duration-300 ease-in-out transform ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        style={{ maxHeight: visible ? "1000px" : "0px", overflow: "hidden" }}
      >
        <li className="p-2 hover:bg-BG_DARK rounded">lorem</li>
        <li className="p-2 hover:bg-BG_DARK rounded">lorem</li>
        <li className="p-2 hover:bg-BG_DARK rounded">lorem</li>
        <li className="p-2 hover:bg-BG_DARK rounded">lorem</li>
      </ul>
    </div>
  );
};
