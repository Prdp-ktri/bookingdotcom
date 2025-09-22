import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Header() {
  const [newUser, setNewUser] = useState(false);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const registerNewUser = () => {
    setNewUser(!newUser);
    navigate("/newuser");
  };

  const loginUser = () => {
    navigate("/loginpage");
    setIsLoggedIn(true);
  };

  const logoutUser = () => {
    navigate("/");
    setIsLoggedIn(false);
  };

  return (
    <>
      <header
        style={{
          backgroundColor: "#003580",
          color: "#fff",
          position: "relative",
          zIndex: 50,
        }}
      >
        {" "}
        <div className="upper-nav px-45 flex justify-between pt-4">
          {" "}
          <div className="cursor-pointer">
            {" "}
            <h1 style={{ fontSize: "25px", fontWeight: "bold" }}>
              Booking.com
            </h1>{" "}
          </div>{" "}
          <div className="">
            {" "}
            <button className="p-4 cursor-pointer bg-[#003580] hover:bg-[#005580] cursor-pointer rounded-sm">
              INR
            </button>{" "}
            <button className="p-4 cursor-pointer bg-[#003580] hover:bg-[#005580] cursor-pointer rounded-sm">
              {" "}
              <img src="./images/header/india.png" width={"20px"} alt="" />{" "}
            </button>{" "}
            <button className="p-4 cursor-pointer bg-[#003580] hover:bg-[#005580] cursor-pointer rounded-sm">
              {" "}
              <img
                src="./images/header/question.png"
                width={"20px"}
                alt=""
              />{" "}
            </button>{" "}
            <button className="p-4 cursor-pointer bg-[#003580] hover:bg-[#005580] cursor-pointer rounded-sm">
              List your property
            </button>{" "}
            {!isLoggedIn ? (
              <>
                <button
                  className="bg-white p-2 m-2 rounded-sm cursor-pointer hover:bg-[#ffff55] cursor-pointer"
                  style={{ color: "#006affff" }}
                  onClick={registerNewUser}
                >
                  {" "}
                  Register{" "}
                </button>{" "}
                <button
                  className="bg-white p-2 m-2 rounded-sm cursor-pointer hover:bg-[#ffff55] cursor-pointer"
                  style={{ color: "#006affff" }}
                  onClick={loginUser}
                >
                  {" "}
                  Sign in{" "}
                </button>{" "}
              </>
            ) : (
              <button
                className="bg-white p-2 m-2 rounded-sm hover:bg-[#ffdddd]"
                style={{ color: "#d00000" }}
                onClick={logoutUser}
              >
                Logout
              </button>
            )}
          </div>{" "}
        </div>{" "}
        <div className="lower-nav px-45">
          {" "}
          <div className=" flex justify-start">
            {" "}
            <button
              className="border-1 rounded-full flex border-solid pl-3 pr-3 p-2 m-1 cursor-pointer"
              style={{ backgroundColor: "#004580" }}
            >
              {" "}
              <img
                src="./images/header/stays-icon.png"
                className="m-1"
                width={"20px"}
                alt=""
              />{" "}
              Stays{" "}
            </button>{" "}
            <button className="rounded-full flex border-solid pl-3 pr-3 p-2 m-1 hover:bg-[#004580] cursor-pointer">
              {" "}
              <img
                src="./images/header/flight.png"
                className="m-1 hover:bg-[#004580] cursor-pointer"
                width={"20px"}
                alt=""
              />{" "}
              Flights
            </button>{" "}
            <button className="rounded-full flex border-solid pl-3 pr-3 p-2 m-1 hover:bg-[#004580] cursor-pointer">
              {" "}
              <img
                src="./images/header/flight-hotel-icon.png"
                className="m-1"
                width={"20px"}
                alt=""
              />{" "}
              Flight + Hotel{" "}
            </button>{" "}
            <button className="rounded-full flex border-solid pl-3 pr-3 p-2 m-1 hover:bg-[#004580] cursor-pointer">
              {" "}
              <img
                src="./images/header/car-rental-icon.png"
                className="m-1"
                width={"20px"}
                alt=""
              />{" "}
              Car Rental{" "}
            </button>
            <button className="rounded-full flex border-solid pl-3 pr-3 p-2 m-1 hover:bg-[#004580] cursor-pointer">
              {" "}
              <img
                src="./images/header/activities-icon.png"
                className="m-1"
                width={"20px"}
                alt=""
              />{" "}
              Activities{" "}
            </button>{" "}
            <button className="rounded-full flex border-solid pl-3 pr-3 p-2 m-1 hover:bg-[#004580] cursor-pointer">
              {" "}
              <img
                src="./images/header/airport-taxis-icon.png"
                className="m-1"
                width={"20px"}
                alt=""
              />{" "}
              Airport Taxis{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </header>
    </>
  );
}
export default Header;
