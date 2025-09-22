import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import { createContext, useState } from "react";
// import CitiesRegionsCountries from "./components/CitiesRegionsCountries";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import NewUser from "./components/NewUser";
import LoginPage from "./components/LoginPage";

export const createDate = createContext();

function App() {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  return (
    <div className="App">
      <ToastContainer position="top-right" autoClose={3000} />
      <createDate.Provider value={{ state, setState }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HeroSection />}></Route>
            <Route path="/newuser" element={<NewUser />} />
            <Route path="/loginpage" element={<LoginPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </createDate.Provider>
    </div>
  );
}

export default App;
