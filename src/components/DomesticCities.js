import React, { useState } from "react";

function DomesticCities() {
  const [itemsToShow, setItemsToShow] = useState(24);
  const [showMore, setShowMore] = useState(true);

  const allIndianCities = [
    { text: "Srinagar hotels", href: "" },
    { text: "Mumbai hotels", href: "" },
    { text: "Bangalore hotels", href: "" },
    { text: "Ooty hotels", href: "" },
    { text: "Jaipur hotels", href: "" },
    { text: "Hyderabad hotels", href: "" },
    { text: "Puri hotels", href: "" },
    { text: "Chennai hotels", href: "" },
    { text: "Varanasi hotels", href: "" },
    { text: "Lonavala hotels", href: "" },
    { text: "Varkala hotels", href: "" },
    { text: "Munnar hotels", href: "" },
    { text: "Ayodhya hotels", href: "" },
    { text: "Rishikesh hotels", href: "" },
    { text: "Mysore hotels", href: "" },
    { text: "Cochin hotels", href: "" },
    { text: "Pune hotels", href: "" },
    { text: "Alleppey hotels", href: "" },
    { text: "New Delhi hotels", href: "" },
    { text: "Shimla hotels", href: "" },
    { text: "Udaipur hotels", href: "" },
    { text: "Gokarna hotels", href: "" },
    { text: "Kolkata hotels", href: "" },
    { text: "Gurgaon hotels", href: "" },
    { text: "Mussoorie hotels", href: "" },
    { text: "Manali hotels", href: "" },
    { text: "Kodaikanal hotels", href: "" },
    { text: "Amritsar hotels", href: "" },
    { text: "Mahabaleshwar hotels", href: "" },
    { text: "Jaisalmer hotels", href: "" },
    { text: "Chikmagalur hotels", href: "" },
    { text: "Ahmedabad hotels", href: "" },
    { text: "Tirupati hotels", href: "" },
    { text: "Agra hotels", href: "" },
    { text: "Darjeeling hotels", href: "" },
    { text: "Baga hotels", href: "" },
    { text: "Jodhpur hotels", href: "" },
    { text: "Thiruvananthapram hotels", href: "" },
    { text: "Nainital hotels", href: "" },
    { text: "Madurai hotels", href: "" },
    { text: "Yercaud hotels", href: "" },
    { text: "Trivandrum hotels", href: "" },
    { text: "Madikeri hotels", href: "" },
    { text: "Alibaug hotels", href: "" },
    { text: "Daman hotels", href: "" },
    { text: "Ujjain hotels", href: "" },
    { text: "Coimbatore hotels", href: "" },
    { text: "Palolem hotels", href: "" },
    { text: "Vrindavan hotels", href: "" },
    { text: "Kasauli hotels", href: "" },
    { text: "Lucknow hotels", href: "" },
    { text: "Udupi hotels", href: "" },
    { text: "Mangalore hotels", href: "" },
    { text: "Kozhikode hotels", href: "" },
    { text: "Vagamon hotels", href: "" },
    { text: "Calangute hotels", href: "" },
    { text: "Noida hotels", href: "" },
    { text: "Mahabalipuram hotels", href: "" },
  ];

  const handleShowMore = () => {
    const nextItemsToShow = itemsToShow + 15;
    setItemsToShow(nextItemsToShow);
    if (nextItemsToShow >= allIndianCities.length) {
      setShowMore(false);
    }
  };

  return (
    <div className="grid grid-cols-5 gap-y-2 text-left">
      {allIndianCities.slice(0, itemsToShow).map((link, index) => (
        <a key={index} href={link.href} className="text-xs">
          {link.text}
        </a>
      ))}

      {showMore && (
        <button
          onClick={handleShowMore}
          className="color-blue col-span-full text-blue"
        >
          + Show More
        </button>
      )}
    </div>
  );
}

export default DomesticCities;
