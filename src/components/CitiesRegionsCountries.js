import React, { useState } from "react";
import DomesticCities from "./DomesticCities";
import InternationalCities from "./InternationalCities";
import Regions from "./Regions";
import Countries from "./Countries";
import Stays from "./Stays";

function CitiesRegionsCountries() {
  const [domesticCities, setDomesticCities] = useState(false);
  const [internationalCities, setInternationalCities] = useState(false);
  const [regions, setRegions] = useState(false);
  const [countries, setCountries] = useState(false);
  const [stays, setStays] = useState(false);

  const showStays = () => {
    setStays(!stays);
  };

  const showCountries = () => {
    setCountries(!countries);
  };

  const showRegions = () => {
    setRegions(!regions);
  };

  const showInternationalCities = () => {
    setInternationalCities(!internationalCities);
  };

  const showDomesticCities = () => {
    setDomesticCities(!domesticCities);
  };

  return (
    <div>
      <div className="px-45">
        <h3 className="text-2xl font-bold flex justify-start pt-12">
          Popular with travelers from India
        </h3>
        <div className="p-3">
          <button
            onClick={showDomesticCities}
            className="p-4 border rounded-full hover:bg-gray-300 cursor-pointer"
          >
            Domestic Cities
          </button>
          <button
            className="p-4 m-2 rounded-full hover:bg-gray-300 cursor-pointer"
            onClick={showInternationalCities}
          >
            International Cities
          </button>
          <button
            className="p-3 m-2 rounded-full hover:bg-gray-300 cursor-pointer"
            onClick={showRegions}
          >
            Regions
          </button>
          <button
            className="p-3 m-2 rounded-full hover:bg-gray-300 cursor-pointer"
            onClick={showCountries}
          >
            Countries
          </button>
          <button
            className="p-3 m-2 rounded-full hover:bg-gray-300 cursor-pointer"
            onClick={showStays}
          >
            Places to stay
          </button>
        </div>
        <div>{domesticCities && <DomesticCities />}</div>
        <div>{internationalCities && <InternationalCities />}</div>
        <div>{regions && <Regions />}</div>
        <div>{countries && <Countries />}</div>
        <div>{stays && <Stays />}</div>
        <div className="text-sm pt-5">
          <a href="" className="p-2">
            Countries
          </a>
          <a href="" className="p-2">
            Regions
          </a>
          <a href="" className="p-2">
            Cities
          </a>
          <a href="" className="p-2">
            Districts
          </a>
          <a href="" className="p-2">
            Airports
          </a>
          <a href="" className="p-2">
            Hotels
          </a>
          <a href="" className="p-2">
            Places of Interest
          </a>
          <a href="" className="p-2">
            Vacation Homes
          </a>
          <a href="" className="p-2">
            Apartments
          </a>
          <a href="" className="p-2">
            Resorts
          </a>
          <a href="" className="p-2">
            Villas
          </a>
          <a href="" className="p-2">
            Hostels
          </a>
          <a href="" className="p-2">
            B&Bs
          </a>
          <a href="" className="p-2">
            Guest Houses
          </a>
          <a href="" className="p-2">
            Unique places to stay
          </a>
          <a href="" className="p-2">
            All destinations
          </a>
          <a href="" className="p-2">
            All flight destinations
          </a>
          <a href="" className="p-2">
            All car rental locations
          </a>
          <a href="" className="p-2">
            All vacation destinations
          </a>
          <a href="" className="p-2">
            Guides
          </a>
          <a href="" className="p-2">
            Discover
          </a>
          <a href="" className="p-2">
            Reviews
          </a>
          <a href="" className="p-2">
            Discover monthly stays
          </a>
        </div>
      </div>
    </div>
  );
}

export default CitiesRegionsCountries;
