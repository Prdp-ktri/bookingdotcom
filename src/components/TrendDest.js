import React from "react";

function TrendDest() {
  return (
    <div>
      <div className="px-45 pt-20 text-start">
        <h3 className="text-2xl font-bold">Trending destinations</h3>
        <p className="text-gray-500 pt-2 pb-2">
          Most popular choice for travelers from India
        </p>
      </div>
      <div className="grid-container px-45 flex flex-wrap">
        <div className="p-3">
          <div
            className="relative rounded-lg overflow-hidden shadow-[inset_0_50px_25px_rgba(0,0,0,0.7)]"
            style={{
              height: "15rem",
              width: "33rem",
              backgroundImage: `url(/images/trend-destinations/delhi.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute top-1 z-1 flex p-2">
              <p className="text-2xl text-white font-extrabold">New Delhi</p>
              <img
                src="/images/trend-destinations/flag.png"
                style={{ width: "25px" }}
                alt=""
                className="ml-2"
              />
            </div>
          </div>
        </div>
        <div className="p-3">
          <div
            className="relative rounded-lg overflow-hidden shadow-[inset_0_50px_25px_rgba(0,0,0,0.7)]"
            style={{
              height: "15rem",
              width: "33rem",
              backgroundImage: `url(/images/trend-destinations/bangalore.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute top-1 z-1 flex p-2">
              <p className="text-2xl text-white font-extrabold">Bangalore</p>
              <img
                src="/images/trend-destinations/flag.png"
                style={{ width: "25px" }}
                alt=""
                className="ml-2"
              />
            </div>
          </div>
        </div>
        <div className="p-3">
          <div
            className="relative rounded-lg overflow-hidden shadow-[inset_0_50px_25px_rgba(0,0,0,0.7)]"
            style={{
              height: "15rem",
              width: "22rem",
              backgroundImage: `url(/images/trend-destinations/mumbai.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute top-1 z-1 flex p-2">
              <p className="text-2xl text-white font-extrabold">Mumbai</p>
              <img
                src="/images/trend-destinations/flag.png"
                style={{ width: "25px" }}
                alt=""
                className="ml-2"
              />
            </div>
          </div>
        </div>
        <div className="p-3">
          <div
            className="relative rounded-lg overflow-hidden shadow-[inset_0_50px_25px_rgba(0,0,0,0.7)]"
            style={{
              height: "15rem",
              width: "22rem",
              backgroundImage: `url(/images/trend-destinations/chennai.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute top-1 z-1 flex p-2">
              <p className="text-2xl text-white font-extrabold">Chennai</p>
              <img
                src="/images/trend-destinations/flag.png"
                style={{ width: "25px" }}
                alt=""
                className="ml-2"
              />
            </div>
          </div>
        </div>
        <div className="p-3">
          <div
            className="relative rounded-lg overflow-hidden shadow-[inset_0_50px_25px_rgba(0,0,0,0.7)]"
            style={{
              height: "15rem",
              width: "22rem",
              backgroundImage: `url(/images/trend-destinations/varanasi.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute top-1 z-1 flex p-2">
              <p className="text-2xl text-white font-extrabold">Varanasi</p>
              <img
                src="/images/trend-destinations/flag.png"
                style={{ width: "25px" }}
                alt=""
                className="ml-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrendDest;
