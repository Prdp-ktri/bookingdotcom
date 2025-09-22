import React, { useState } from "react";

const destinations = [
  {
    src: "/images/06-popular-destinations/1-delhi.jpg",
    name: "New Delhi",
    properties: "4,450 properties",
  },
  {
    src: "/images/06-popular-destinations/2-bangalore.jpg",
    name: "Bangalore",
    properties: "3,079 properties",
  },
  {
    src: "/images/06-popular-destinations/3-mumbai.jpg",
    name: "Mumbai",
    properties: "1,980 properties",
  },
  {
    src: "/images/06-popular-destinations/4-chennai.jpg",
    name: "Chennai",
    properties: "1,327 properties",
  },
  {
    src: "/images/06-popular-destinations/5-varanasi.jpg",
    name: "Varanasi",
    properties: "2,174 properties",
  },
  {
    src: "/images/06-popular-destinations/6-hyderabad.jpg",
    name: "Hyderabad",
    properties: "1,849 properties",
  },
  {
    src: "/images/06-popular-destinations/7-gurgaon.jpg",
    name: "Gurgaon",
    properties: "1,622 properties",
  },
  {
    src: "/images/06-popular-destinations/8-pondicherry.jpg",
    name: "Pondicherry",
    properties: "959 properties",
  },
  {
    src: "/images/06-popular-destinations/9-jaipur.jpg",
    name: "Jaipur",
    properties: "1,881 properties",
  },
  {
    src: "/images/06-popular-destinations/10-pune.jpg",
    name: "Pune",
    properties: "1,222 properties",
  },
];

const PopularDestinations = () => {
  const visibleCount = 6;
  const [startIndex, setStartIndex] = useState(0);
  const canPrev = startIndex > 0;
  const canNext = startIndex + visibleCount < destinations.length;

  const prevClick = () => {
    if (canPrev) setStartIndex((i) => Math.max(0, i - 1));
  };

  const nextClick = () => {
    if (canNext) setStartIndex((i) => i + 1);
  };

  const visibleImgs = destinations.slice(startIndex, startIndex + visibleCount);

  return (
    <div>
      <div className="px-45">
        <h3 className="text-2xl font-bold flex justify-start pt-12">
          Explore popular destinations in India
        </h3>
        <div className="flex items-center">
          <button
            onClick={prevClick}
            disabled={!canPrev}
            className="text-2xl h-15 w-15 rounded-[50%] cursor-pointer shadow-[0px_0px_10px_1px_gray] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            &lt;
          </button>
          {visibleImgs.map((v, i) => (
            <div key={`${v.name}-${startIndex + i}`} className="p-1">
              <img
                src={v.src}
                alt={v.name}
                className="rounded-lg object-cover"
                width={220}
                height={220}
                loading="lazy"
              />
              <p className="font-bold flex justify-start">{v.name}</p>
              <p className="flex justify-start text-xs">{v.properties}</p>
            </div>
          ))}
          <button
            onClick={nextClick}
            className="text-2xl h-15 w-15 rounded-[50%] cursor-pointer shadow-[0px_0px_10px_1px_gray]"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularDestinations;
