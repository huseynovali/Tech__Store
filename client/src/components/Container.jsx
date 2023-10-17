import React from "react";

function Container({ children, color }) {
  console.log(color);
  return (
    <div className={`w-full `} style={{background:color}}>
      <div className="w-full px-3 lg:w-[1240px] lg:p-0 m-auto">{children}</div>
    </div>
  );
}

export default Container;
