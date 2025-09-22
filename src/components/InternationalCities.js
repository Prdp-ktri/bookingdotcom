import React from "react";

function InternationalCities() {
  const allInternationalCities = [
    { hotels: "Dubai hotels", country: "United Arab Emirates" },
    { hotels: "Singapore hotels", country: "Singapore" },
    { hotels: "Bangkok hotels", country: "Thailand" },
    { hotels: "Paris hotels", country: "France" },
    { hotels: "London hotels", country: "United Kingdom" },
    { hotels: "Amsterdam hotesl", country: "Netherlands" },
    { hotels: "Colombo hotels", country: "Sri Lanka" },
    { hotels: "Abu Dhabi Hotels", country: "United Arab Emirates" },
    { hotels: "Kuala Lumpur hotels", country: "Malaysia" },
    { hotels: "New York hotels", country: "United States" },
    { hotels: "Tokyo hotels", country: "Japan" },
    { hotels: "Ho Chi Minh City Hotels", country: "Vietnam" },
    { hotels: "Frankfurt hotels", country: "Germany" },
    { hotels: "Hanoi hotels", country: "Vietanm" },
    { hotels: "Rome hotels", country: "Italy" },
    { hotels: "Baku hotels", country: "Azerbaijan" },
    { hotels: "Zurich hotels", country: "Switzerland" },
    { hotels: "Munich hotels", country: "Germany" },
    { hotels: "Seoul hotels", country: "South Korea" },
    { hotels: "Barcelona hotels", country: "Spain" },
  ];
  return (
    <div className="grid grid-cols-5 gap-y-2 text-left">
      {allInternationalCities.map((link, index) => (
        <a key={index} href={link.href}>
          <span className="text-sm p-1">{link.hotels}</span>
          <br />
          <span className="text-sm p-1 font-medium">{link.country}</span>
        </a>
      ))}
    </div>
  );
}

export default InternationalCities;
