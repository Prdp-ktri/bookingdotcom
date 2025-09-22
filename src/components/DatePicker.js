import { DateRangePicker } from "react-date-range";
import { useContext, useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { enGB } from "date-fns/locale";
import { createDate } from "../App";

export default function MyDatePicker() {
  const { state, setState } = useContext(createDate);

  return (
    <div
      className="bg-white"
      style={{
        width: "600px",
        height: "400px",
        border: "2px solid gray",
        position: "absolute",
        top: "530px",
        left: "350px",
        borderRadius: "10px",
        backgroundColor: "white",
        boxShadow: "0 4px 100px rgba(0, 0, 0, 0.2)",
        zIndex: "2",
      }}
    >
      <DateRangePicker
        locale={enGB}
        ranges={state}
        onChange={(item) => setState([item.selection])}
      />
    </div>
  );
}
