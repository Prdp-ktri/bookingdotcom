import React from 'react'

function Stays() {

  const allStays = [
    { stay: "Homestays", href: "" },
    { stay: "Resorts", href: "" },
    { stay: "Hostels", href: "" },
    { stay: "Cheap Hotels", href: "" },
    { stay: "Beach Hotels", href: "" },
    { stay: "Villas", href: "" },
    { stay: "5-Star Hotels", href: "" },
    { stay: "Serviced Apartments", href: "" },
    { stay: "Pet-Friendly Hotels", href: "" },
    { stay: "Family Hotels", href: "" },
    { stay: "Luxury Hotels", href: "" },
    { stay: "Guest Houses", href: "" },
    { stay: "Apartments", href: "" },
    { stay: "Boats", href: "" },
    { stay: "3-Star Hotels", href: "" },
    { stay: "4-Star Hotels", href: "" },
    { stay: "Luxury Tents", href: "" },
    { stay: "Cottages", href: "" },
    { stay: "Hotels with Pools", href: "" },
    { stay: "Romantic Hotels", href: "" },
  ];

  return (
    <div className="grid grid-cols-5 gap-y-2 text-left">
      {allStays.map((link, index) => (
        <a key={index} href={link.href} className="text-xs">
          {link.stay}
        </a>
      ))}
    </div>
  );
}

export default Stays
