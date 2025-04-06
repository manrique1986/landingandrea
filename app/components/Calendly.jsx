import React from "react";

const Calendly = () => {
  return (
    <div className="mt-10 w-full flex justify-center">
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/andreapaolatomatis/60min"
        style={{
          width: "100%",
          maxWidth: "500px",
          height: "500px",
          borderRadius: "10px",
        }}
      ></div>
    </div>
  );
};

export default Calendly;

