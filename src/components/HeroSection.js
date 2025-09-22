import React, { useContext, useState } from "react";
import GuestDetails from "./GuestDetails";
import Offers from "./Offers";
import TrendDest from "./TrendDest";
import PropType from "./PropType";
import PopularDestinations from "./PopularDestinations";
import MyDatePicker from "./DatePicker";
import { createDate } from "../App";
import { format } from "date-fns";
import AhmedabadAttractions from "./AhmedabadAttractions";
import CitiesRegionsCountries from "./CitiesRegionsCountries";

function HeroSection() {
  const [showGuest, setShowGuest] = useState(false);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [datePicker, setDatePicker] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const { state } = useContext(createDate);

  const showPicker = () => {
    setDatePicker(!datePicker);
  };

  const showGuests = () => {
    setShowGuest(!showGuest);
  };

  return (
    <div className="">
      <div className="relative">
        <img
          src="./images/hero/hero-image-1.png"
          alt="hero-image"
          className="block w-full h-auto"
          style={{ boxShadow: "" }}
        />
      </div>
      <div className="px-45 absolute top-10" style={{ color: "white" }}>
        <h3
          className="text-5xl pl-1 pt-35 font-bold text-left"
          style={{ width: "540px", color: "white" }}
        >
          A place to call home
          <br /> on your next adventure
        </h3>
        <p className="absolute top-63 text-2xl">
          Choose from houses, cabins, villas, and more
        </p>
        <button className="p-3 z-10 rounded-sm absolute top-[340px] left-[180px] bg-[#007480] hover:bg-[#005580] cursor-pointer">
          Find yours
        </button>
        <div
          className="absolute top-100 flex bg-white pl-8 rounded-2 mt-5 justify-between"
          style={{
            border: "5px solid orange",
            width: "75vw",
            borderRadius: "10px",
          }}
        >
          <div
            className="flex p-1 gap-2"
            style={{ borderRight: "5px solid orange", width: "325px" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="25px"
              className=""
            >
              <path d="M2.75 12h18.5c.69 0 1.25.56 1.25 1.25V18l.75-.75H.75l.75.75v-4.75c0-.69.56-1.25 1.25-1.25m0-1.5A2.75 2.75 0 0 0 0 13.25V18c0 .414.336.75.75.75h22.5A.75.75 0 0 0 24 18v-4.75a2.75 2.75 0 0 0-2.75-2.75zM0 18v3a.75.75 0 0 0 1.5 0v-3A.75.75 0 0 0 0 18m22.5 0v3a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0m-.75-6.75V4.5a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 2.25 4.5v6.75a.75.75 0 0 0 1.5 0V4.5a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 0 1.5 0m-13.25-3h7a.25.25 0 0 1 .25.25v2.75l.75-.75h-9l.75.75V8.5a.25.25 0 0 1 .25-.25m0-1.5A1.75 1.75 0 0 0 6.75 8.5v2.75c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75V8.5a1.75 1.75 0 0 0-1.75-1.75z"></path>
            </svg>
            <input
              type="text"
              name=""
              placeholder="Where are you going?"
              id=""
              style={{
                color: "black",
                height: "50px",
                border: "none",
                outline: "none",
              }}
              value={inputValue}
              className="pl-1 pr-10"
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
          </div>
          <div
            className="flex p-4 gap-2"
            style={{
              borderRight: "5px solid orange",
              color: "black",
              width: "300px",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="25px"
              className=""
            >
              <path d="M22.5 13.5v8.25a.75.75 0 0 1-.75.75H2.25a.75.75 0 0 1-.75-.75V5.25a.75.75 0 0 1 .75-.75h19.5a.75.75 0 0 1 .75.75zm1.5 0V5.25A2.25 2.25 0 0 0 21.75 3H2.25A2.25 2.25 0 0 0 0 5.25v16.5A2.25 2.25 0 0 0 2.25 24h19.5A2.25 2.25 0 0 0 24 21.75zm-23.25-3h22.5a.75.75 0 0 0 0-1.5H.75a.75.75 0 0 0 0 1.5M7.5 6V.75a.75.75 0 0 0-1.5 0V6a.75.75 0 0 0 1.5 0M18 6V.75a.75.75 0 0 0-1.5 0V6A.75.75 0 0 0 18 6M5.095 14.03a.75.75 0 1 0 1.06-1.06.75.75 0 0 0-1.06 1.06m.53-1.28a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5m-.53 6.53a.75.75 0 1 0 1.06-1.06.75.75 0 0 0-1.06 1.06m.53-1.28a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5m5.845-3.97a.75.75 0 1 0 1.06-1.06.75.75 0 0 0-1.06 1.06m.53-1.28A1.125 1.125 0 1 0 12 15a1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5m-.53 6.53a.75.75 0 1 0 1.06-1.06.75.75 0 0 0-1.06 1.06M12 18a1.125 1.125 0 1 0 0 2.25A1.125 1.125 0 0 0 12 18a.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5m5.845-3.97a.75.75 0 1 0 1.06-1.06.75.75 0 0 0-1.06 1.06m.53-1.28a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5m-.53 6.53a.75.75 0 1 0 1.06-1.06.75.75 0 0 0-1.06 1.06m.53-1.28a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5"></path>
            </svg>
            <div
              className="pt-1"
              style={{ cursor: "pointer" }}
              onClick={showPicker}
            >
              {`${format(state[0].startDate, "dd/MM/yyyy")}-${format(
                state[0].endDate,
                "dd/MM/yyyy"
              )}`}
            </div>
          </div>
          <div
            className="flex p-4 gap-2"
            style={{
              borderRight: "5px solid orange",
              width: "300px",
              color: "black",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="25px"
            >
              <path d="M16.5 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0M18 6A6 6 0 1 0 6 6a6 6 0 0 0 12 0M3 23.25a9 9 0 1 1 18 0 .75.75 0 0 0 1.5 0c0-5.799-4.701-10.5-10.5-10.5S1.5 17.451 1.5 23.25a.75.75 0 0 0 1.5 0"></path>
            </svg>
            <div
              className="pt-1"
              style={{ cursor: "pointer" }}
              onClick={showGuests}
            >
              {adults} adults · {children} children · {rooms} room
            </div>
          </div>
          <button
            className="p-5 bg-[#007480] hover:bg-[#005580] cursor-pointer"
            style={{ width: "120px" }}
          >
            Search
          </button>
        </div>
        <div
          style={{ color: "black", position: "absolute" }}
          className="pt-68 pl-1"
        >
          <input type="checkbox" name="" id="" />
          <span className="pl-2">
            I'm looking for an entire home or apartment
          </span>
        </div>
        <div
          style={{ color: "black", position: "absolute" }}
          className="pt-68 pl-95"
        >
          <input type="checkbox" name="" id="" />
          <span className="pl-2">I'm looking for flights</span>
        </div>
      </div>
      <div>
        {showGuest && (
          <GuestDetails
            adults={adults}
            setAdults={setAdults}
            children={children}
            setChildren={setChildren}
            rooms={rooms}
            setRooms={setRooms}
            setShowGuest={setShowGuest}
          />
        )}
      </div>
      <div>{datePicker && <MyDatePicker />}</div>
      <Offers></Offers>
      <TrendDest></TrendDest>
      <PopularDestinations />
      <PropType></PropType>
      <AhmedabadAttractions></AhmedabadAttractions>
      <CitiesRegionsCountries />
    </div>
  );
}

export default HeroSection;
