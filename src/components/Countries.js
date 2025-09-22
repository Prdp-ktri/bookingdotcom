import React from 'react'

function Countries() {

  const allCountries = [
    { country: "India", href: "" },
    { country: "United Arab Emirates", href: "" },
    { country: "Thailand", href: "" },
    { country: "United States", href: "" },
    { country: "Sri Lanka", href: "" },
    { country: "United Kingdom", href: "" },
    { country: "Germany", href: "" },
    { country: "Vietnam", href: "" },
    { country: "France", href: "" },
    { country: "Italy", href: "" },
    { country: "Singapore", href: "" },
    { country: "Japan", href: "" },
    { country: "Switzerland", href: "" },
    { country: "Australia", href: "" },
    { country: "Spain", href: "" },
    { country: "Netherlands", href: "" },
    { country: "Indonesia", href: "" },
    { country: "Malaysia", href: "" },
    { country: "Canada", href: "" },
    { country: "Nepal", href: "" },
  ];

  return (
    <div className="grid grid-cols-5 gap-y-2 text-left">
      {allCountries.map((link, index) => (
        <a key={index} href={link.href} className="text-xs">
          {link.country}
        </a> 
      ))}
    </div>
  );
}

export default Countries
