import React from "react";

function Component({ children, color }) {
  return (
    <div className={`w-full bg-[${color}]`}>
      <div className="w-full px-3 lg:w-[1240px] lg:p-0 m-auto">{children}</div>
    </div>
  );
}

export default Component;
