import React from "react";

function Offers() {
  return (
    <div>
      <div className="px-45 pt-25 text-start">
        <h3 className="text-2xl font-bold">Offers</h3>
        <p className="text-gray-500 pb-2">
          Promotions, deals, and special offers for you
        </p>
        <div className="flex justify-between">
          <div
            className=""
            style={{ border: "1px solid lightgray", borderRadius: "5px" }}
          >
            <div className="relative">
              <img
                src="./images/offers/book-stays-1.jpg"
                alt=""
                className=""
                style={{ border: "1px solid lightgray", borderRadius: "5px" }}
              />
            </div>
            <div className="absolute top-170">
              <div className="pl-4">
                <p className="text-xs text-white">Vacation rentals</p>
                <p className="text-xl font-medium text-white">
                  Live the dream in a vacation home
                </p>
                <p className="text-white font-light">
                  Choose from houses, villas, cabins, and more
                </p>
                <button
                  className="p-2 mt-2 rounded-md text-sm font-medium bg-[#007480] hover:bg-[#005580] cursor-pointer"
                  style={{ color: "white" }}
                >
                  Book yours
                </button>
              </div>
            </div>
          </div>
          <div
            className="mt-2 flex justify-evenly p-3"
            style={{
              border: "1px solid lightgray",
              borderRadius: "5px",
              height: "130px",
            }}
          >
            <div className="pr-53">
              <p className="text-xl font-bold">Quick excape, quality time</p>
              <p className="text-gray-500">
                Save up to 20% with a Getaway Deal
              </p>
              <button
                className="p-2 mt-2 rounded-md text-sm font-medium bg-[#007480] hover:bg-[#005580] cursor-pointer"
                style={{ color: "white" }}
              >
                Save on stays
              </button>
            </div>
            <div>
              <img
                src="./images/offers/quick-escape.jpeg"
                style={{ width: "100px", height: "100px" }}
                alt=""
                className="rounded-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offers;
