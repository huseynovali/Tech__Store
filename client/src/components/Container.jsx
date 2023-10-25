import React from "react";

function Container({ children, color,...props} ) {
  return (
    <div className={`w-full `} style={{ background: color, ...props }}>
      <div className="w-full px-3 lg:w-[1240px] lg:p-0 m-auto">{children}</div>
    </div>
  );
}

export default Container;
