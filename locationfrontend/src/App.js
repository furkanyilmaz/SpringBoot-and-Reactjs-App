import "./App.css";
import Appbar from "./components/Appbar";
import Location from "./components/Location";
import LocationList from "./components/LocationList";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Appbar />} />
        <Route exact path="/add" element={<Location />} />
        <Route exact path="/getAll" element={<LocationList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
