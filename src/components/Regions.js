import React from "react";

function Regions() {
  const allRegions = [
    { region: "Goa", href: "" },
    { region: "Delhi", href: "" },
    { region: "North Goa", href: "" },
    { region: "South Goa", href: "" },
    { region: "Coorg", href: "" },
    { region: "Pondicherry", href: "" },
    { region: "Chandigarh Region", href: "" },
    { region: "Bali", href: "" },
    { region: "Delhi NCR", href: "" },
    { region: "Jim Corbett National Park", href: "" },
    { region: "Wayanad", href: "" },
    { region: "Phuket Province", href: "" },
    { region: "Kabini River", href: "" },
    { region: "Ranthambore National Park", href: "" },
    { region: "Jammu & Kashmir", href: "" },
    { region: "Gurugram Region", href: "" },
    { region: "Dubai Emirate", href: "" },
    { region: "Pattaya", href: "" },
    { region: "Kerala", href: "" },
    { region: "Krabi Province", href: "" },
  ];

  return (
    <div className="grid grid-cols-5 gap-y-2 text-left">
      {allRegions.map((link, index) => (
        <a key={index} href={link.href} className="text-sm">
          {link.region}
        </a>
      ))}
    </div>
  );
}

export default Regions;
