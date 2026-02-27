import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";
import "./index.css";
import "./App.css";

function layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default layout;
