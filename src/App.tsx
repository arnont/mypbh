import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import Service from "./pages/Service";
import Nopage from "./pages/Nopage";
import Contact from "./pages/Contact";
import Layout from "./pages/Layout";

const App = () => {
  let token = localStorage.getItem("itoken");
  if (!token) {
    return <Login />;
  } else {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/service" element={<Service />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Nopage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  }
};

export default App;
