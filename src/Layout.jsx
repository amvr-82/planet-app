import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./index.css";
import "./App.css";

function layout() {
  return (
    <React.Fragment classname="back-imgssss">
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
}

export default layout;
