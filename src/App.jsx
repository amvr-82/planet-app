import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
// import PlantType from "./pages/PlantType.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="PalntType" element={<PlantType />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
