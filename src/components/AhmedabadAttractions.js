import React, { useState } from "react";

const offerDetails = [
  {
    src: "/images/07-ahmedabad-attractions/01-Gujarat-Tour.jpg",
    name: "Individual Gujarat Tour 2024-2025 (nature and places)",
    offer: "Starting from",
    prize: "₹2,44,731.16",
  },
  {
    src: "/images/07-ahmedabad-attractions/02-Heritage-Tours.jpg",
    name: "Heritage Tour in Ahmedabad for an Immersive Experience",
    offer: "Starting from",
    prize: "₹6,108.33",
  },
  {
    src: "/images/07-ahmedabad-attractions/03-Gujarat-Temples.jpg",
    name: "Across The Temples of Gujarat",
    offer: "Starting from",
    prize: "₹2,56,375.38",
  },
  {
    src: "/images/07-ahmedabad-attractions/04-Vibrant-Gujarat.jpg",
    name: "Vibrant Gujarat",
    offer: "Starting from",
    prize: "₹3,71,212",
  },
  {
    src: "/images/07-ahmedabad-attractions/05-Sanctuaries.jpg",
    name: "Historical Sights, Regal Cities & Wildlife Sanctuaries of Gujarat",
    offer: "Starting from",
    prize: "₹2,74,525.84",
  },
  {
    src: "/images/07-ahmedabad-attractions/06-Legendary-Past.jpg",
    name: "Gujarat Historical Tour That Uncover A Legendary Past",
    offer: "Starting from",
    prize: "₹2,51,314.20",
  },
  {
    src: "/images/07-ahmedabad-attractions/07-Ahmedabad-To-Bhuj.jpg",
    name: "Ahmedabad to Bhuj, Uncover the Gujarat's Best Kept Secret",
    offer: "Starting from",
    prize: "₹2,07,159.69",
  },
  {
    src: "/images/07-ahmedabad-attractions/08-Modhera-n-Patan.jpg",
    name: "Full Day Modhera and Patan Tour from Ahmedabad by Car",
    offer: "Starting from",
    prize: "₹16,949.70",
  },
  {
    src: "/images/07-ahmedabad-attractions/09-Modhera-Sun-Temple.jpg",
    name: "Private Tour of Modhera Sun Temple and Rani ki Vav",
    offer: "Starting from",
    prize: "₹15,968.92",
  },
  {
    src: "/images/07-ahmedabad-attractions/10-Aravali-Hills.jpg",
    name: "6 Days Private Journey Exploring the Hills of Aravali",
    offer: "Starting from",
    prize: "₹18,777.36",
  },
];

const AhmedabadAttractions = () => {
  const [visibleOffers, setVisibleOffers] = useState(offerDetails.slice(0, 4));
  const [offerIndex, setOfferIndex] = useState(4);

  const prevOffer = () => {
    if (offerIndex > 0) {
      const newVisibleOffers = [
        offerDetails[offerIndex],
        ...visibleOffers.slice(0, visibleOffers.length - 1),
      ];
      setVisibleOffers(newVisibleOffers);
      setOfferIndex(offerIndex - 1);
    }
  };

  const nextOffer = () => {
    if (offerIndex < offerDetails.length) {
      const newVisibleOffers = [
        ...visibleOffers.slice(1),
        offerDetails[offerIndex],
      ];
      setVisibleOffers(newVisibleOffers);
      setOfferIndex(offerIndex + 1);
    }
  };

  return (
    <div className="px-45">
      <h3 className="text-2xl font-bold flex justify-start pt-12">
        Popular Attractions in Ahmedabad
      </h3>
      <p className="text-gray-500 pt-2 pb-2 flex justify-start">
        Experience everything this city has to offer
      </p>
      <div className="flex items-center">
        <button
          onClick={prevOffer}
          className="text-2xl h-15 w-15 rounded-[50%] cursor-pointer shadow-[0px_0px_10px_1px_gray]"
        >
          &lt;
        </button>
        {visibleOffers.map((v, i) => (
          <div key={i} className="p-2">
            <div className="relative">
              <img
                src={v.src}
                alt={`Images ${i + 1}`}
                className="rounded-lg"
                width={"300px"}
                height={"300px"}
              />
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 via-black/50 to-transparent text-white rounded-b-lg">
                <h4 className="text-sm font-bold">{v.name}</h4>
                <div className="flex items-center gap-2 p-4">
                  <p className="text-xs font-medium">{v.offer}</p>
                  <h4 className="text-sm font-bold">{v.prize}</h4>
                </div>
              </div>
            </div>
          </div>
        ))}
        <button
          onClick={nextOffer}
          className="text-2xl h-15 w-15 rounded-[50%] cursor-pointer shadow-[0px_0px_10px_1px_gray]"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default AhmedabadAttractions;
