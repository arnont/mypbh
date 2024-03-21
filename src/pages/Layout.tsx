import { Outlet } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Leftside from "../components/Leftside";
import Login from "./Login";

const Layout = () => {
    let token = localStorage.getItem("itoken");
    if (!token) {
      return <Login />;
    } else {
      return (
        <>
          <Header />
          <div className="flex">
            <Leftside />
            <Outlet />
          </div>
          <Footer />
        </>
      );
    }
};

export default Layout;