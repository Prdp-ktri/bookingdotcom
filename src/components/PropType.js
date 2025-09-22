import React, { useState } from "react";
import "../css/PropType.css";

const allImages = [
  { src: "/images/05-property-types/1-hotels.jpeg", name: "Hotels" },
  { src: "/images/05-property-types/2-apartments.jpeg", name: "Apartments" },
  { src: "/images/05-property-types/3-resorts.jpeg", name: "Resorts" },
  { src: "/images/05-property-types/4-villas.jpeg", name: "Villas" },
  { src: "/images/05-property-types/5-cabins.jpeg", name: "Cabins" },
  { src: "/images/05-property-types/6-cottages.jpeg", name: "Cottages" },
  { src: "/images/05-property-types/7-glamping.jpeg", name: "Glamping" },
  {
    src: "/images/05-property-types/8-serviced-apartments.jpeg",
    name: "Serviced Apartments",
  },
  {
    src: "/images/05-property-types/9-vacation-homes.jpeg",
    name: "Vacation Homes",
  },
  {
    src: "/images/05-property-types/10-guest-houses.jpeg",
    name: "Guest Houses",
  },
  { src: "/images/05-property-types/11-hostels.jpeg", name: "Hostels" },
  { src: "/images/05-property-types/12-motels.jpeg", name: "Motels" },
  { src: "/images/05-property-types/13-b-n-bs.jpeg", name: "B & Bs" },
  { src: "/images/05-property-types/14-ryokans.jpeg", name: "Ryokans" },
  { src: "/images/05-property-types/15-riads.jpeg", name: "Riads" },
  {
    src: "/images/05-property-types/16-resort-villages.jpeg",
    name: "Resort Villages",
  },
  { src: "/images/05-property-types/17-homestays.jpeg", name: "Homestays" },
  { src: "/images/05-property-types/18-campgrounds.jpeg", name: "Campgrounds" },
  {
    src: "/images/05-property-types/19-country-houses.jpeg",
    name: "Country Houses",
  },
  { src: "/images/05-property-types/20-farm-stays.jpeg", name: "Farm Stays" },
  { src: "/images/05-property-types/21-boats.jpeg", name: "Boats" },
  {
    src: "/images/05-property-types/22-luxury-tents.jpeg",
    name: "Luxury Tents",
  },
  {
    src: "/images/05-property-types/23-self-catering-accomodations.jpeg",
    name: "Self-Catering Accomodations",
  },
  { src: "/images/05-property-types/24-tiny-houses.jpeg", name: "Tiny Houses" },
];

const PropType = () => {
  const [visibleImages, setVisibleImages] = useState(allImages.slice(0, 4));
  const [imageIndex, setImageIndex] = useState(4);

  const handlePrevClick = () => {
    if (imageIndex < allImages.length) {
      const newVisibleImages = [
        ...visibleImages.slice(1),
        allImages[imageIndex],
      ];
      setVisibleImages(newVisibleImages);
      setImageIndex(imageIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (imageIndex < allImages.length) {
      const newVisibleImages = [
        ...visibleImages.slice(1),
        allImages[imageIndex],
      ];
      setVisibleImages(newVisibleImages);
      setImageIndex(imageIndex + 1);
    }
  };
  return (
    <div>
      <div className="px-45">
        <h3 className="text-2xl font-bold flex justify-start pt-12">
          Browse by property type
        </h3>
        <div className="flex items-center">
          <button
            onClick={handlePrevClick}
            className="text-2xl h-15 w-15 rounded-[50%] cursor-pointer shadow-[0px_0px_10px_1px_gray]"
          >
            &lt;
          </button>
          {visibleImages.map((v, i) => (
            <div key={i} className="p-2">
              <img
                src={v.src}
                alt={`Images ${i + 1}`}
                className="rounded-lg"
                width="300px"
                height="300px"
              />
              <p className="font-bold flex justify-start">{v.name}</p>
            </div>
          ))}
          <button
            onClick={handleNextClick}
            className="text-2xl h-15 w-15 rounded-[50%] cursor-pointer shadow-[0px_0px_10px_1px_gray]"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropType;
