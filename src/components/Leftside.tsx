import { useState } from "react";

const Leftside = () => {
  const [navst, setNavst] = useState(true);
  const Menus = [
    { title: "ข้อมูลส่วนบุคคล", src: "Chart_fill" },
    { title: "ข้อมูลแผนก", src: "Chat" },
    { title: "Accounts", src: "User", gap: false },
    { title: "Schedule ", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: false },
    { title: "Setting", src: "Setting" },
  ];
  return (
    <div
      className={`${
        navst ? "min-w-0" : "min-w-2"
      } duration-300 h-screen bg-nav-theme relative`}
    >
      <img
        src="./src/assets/control.png"
        className={`absolute cursor-pointer rounded-full 
        -right-3 top-9 w-7 border-2 border-nav-image
        ${!navst && "rotate-180"}`}
        onClick={() => setNavst(!navst)}
      />
      <div className="flex gap-x-4 items-center">
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-gray-100 text-black text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-gray-100"} `}
            >
              <img src={`./src/assets/${Menu.src}.png`} />
              <span className={`${!navst && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Leftside;
