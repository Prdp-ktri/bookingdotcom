import "../css/GuestDetails.css";

function GuestDetails({
  adults,
  setAdults,
  children,
  setChildren,
  rooms,
  setRooms,
  setShowGuest,
}) {
  
  const doneGuests = () => {
    setShowGuest(false);
  };

  return (
    <div>
      <div 
        style={{
          width: "400px",
          height: "375px",
          border: "2px solid lightgray",
          position: "absolute",
          top: "530px",
          left: "820px",
          borderRadius: "10px",
          backgroundColor: "white",
          boxShadow: "0 4px 100px rgba(0, 0, 0, 0.2)",
          zIndex: "2",
        }}
        className="pl-10 pr-10 pt-5 pb-5"
      >
        <div className="flex place-content-evenly pl-2 pr-2 pt-1 pb-1">
          <p>Adults</p>
          <div
            className="flex"
            style={{ border: "2px solid lightgray", borderRadius: "5px" }}
          >
            <button
              onClick={() => {
                setAdults(Math.max(1, adults - 1));
              }}
              className="hover:bg-gray-200"
              style={{ width: "30px", height: "30px" }}
            >
              -
            </button>
            <p className="">{adults}</p>
            <button
              onClick={() => {
                setAdults(adults + 1);
              }}
              className="hover:bg-gray-200"
              style={{ width: "30px", height: "30px" }}
            >
              +
            </button>
          </div>
        </div>
        <div className="flex place-content-evenly pl-2 pr-2 pt-1 pb-1">
          <p>Children</p>
          <div
            className="flex"
            style={{ border: "2px solid lightgray", borderRadius: "5px" }}
          >
            <button
              onClick={() => {
                setChildren(Math.max(0, children - 1));
              }}
              className="hover:bg-gray-200"
              style={{ width: "30px", height: "30px" }}
            >
              -
            </button>
            <p>{children}</p>
            <button
              onClick={() => {
                setChildren(children + 1);
              }}
              className="hover:bg-gray-200"
              style={{ width: "30px", height: "30px" }}
            >
              +
            </button>
          </div>
        </div>
        <div className="flex place-content-evenly pl-2 pr-2 pt-1 pb-1">
          <p>Rooms</p>
          <div
            className="flex"
            style={{ border: "2px solid lightgray", borderRadius: "5px" }}
          >
            <button
              onClick={() => {
                setRooms(Math.max(1, rooms - 1));
              }}
              className="hover:bg-gray-200"
              style={{ width: "30px", height: "30px" }}
            >
              -
            </button>
            <p>{rooms}</p>
            <button
              onClick={() => {
                setRooms(rooms + 1);
              }}
              className="hover:bg-gray-200"
              style={{ width: "30px", height: "30px" }}
            >
              +
            </button>
          </div>
        </div>
        <hr style={{ color: "gray" }} />
        <div className="flex flex-col pt-5">
          <div className="flex justify-between pb-5">
            <p>Traveling with pets? </p>
            <div className="toggle"></div>
          </div>
          <p style={{ fontSize: "13px" }} className="flex justify-start">
            Assistance animals are not considered pets.
          </p>
          <a
            href=""
            style={{ fontSize: "13px", color: "blue" }}
            className="flex justify-start"
          >
            Read more about traveling with assistance animals
          </a>
          <button
            className="mt-5 pt-1 pb-1"
            style={{
              border: "2px solid cyan",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={doneGuests}
          >
            <p style={{ color: "darkcyan" }}>Done</p>{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default GuestDetails;
