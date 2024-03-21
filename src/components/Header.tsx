import { useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userInfo } from "../store/Store";

const Header = () => {
  const [userData, setUserData] = useRecoilState(userInfo);
  //-- Recoil
  if (!userData.userid) {
    setUserData({
      ...userData,
      userid: "arnont",
      usernm: "นายอานนท์ ขันติกิจ",
      off_id: "69",
      off_nm: "ศูนย์คอมพิวเตอร์",
      adm_lv: true,
    });
  }
  //--
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const Menus = [
    { title: "ข้อมูลส่วนบุคคล", link: "/person" },
    { title: "ผู้ป่วยนอก", link: "/ipd" },
    { title: "ผู้ป่วยใน", link: "/ipd" },
    { title: "การเงินบัญชี ", link: "/account" },
    { title: "บริหารจัดการ ", link: "/other" },
    { title: "ผู้ยริหาร ", link: "/boss" },
    { title: "ผู้ดูแลระบบ ", link: "/admin" },
  ];
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const iLogout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <nav className="bg-nav-theme p-4">
      <div className="flex items-center justify-between">
        <div className="text-white text-sxl font-bold">
          {import.meta.env.VITE_APP_TITLE}
        </div>
        {/* Toggle Menu Button */}
        <div className="md:hidden">
          <button id="menu-toggle" className="tet-white" onClick={toggleMenu}>
            +
          </button>
        </div>

        <ul className="hidden md:flex space-x-4">
          {Menus.map((Menu, index) => (
            <li>
              <Link key={index} className="text-white" to={Menu.link}>{Menu.title}</Link>
            </li>
          ))}
          <li>
            <a href="#" className="text-white" onClick={iLogout}>
              Logout
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen ? (
        <ul className="flex-col  md:hidden space-x-4">
          {Menus.map((Menu, index) => (
            <li>
              <Link key={index} className="text-white" to={Menu.link}>{Menu.title}</Link>
            </li>
          ))}
          <li>
            <span className="text-white" onClick={iLogout}>
              { "("+ userData.usernm +")"}Logout
            </span>
          </li>
        </ul>
      ) : null}
    </nav>
  );
};

export default Header;
