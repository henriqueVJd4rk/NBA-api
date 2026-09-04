import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Players from "./pages/Players";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/jogadores"
          element={<Players />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
