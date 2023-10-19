import React from "react";
import classNames from "classnames";
function MobileSidebar({ isOpenSidebar, setIsOpenSidebar }) {
  return (
    <div
      className={classNames(`h-100vh bg-slate-500`, {
        "w-[50vw] block": isOpenSidebar,
        "w-0 hidden": !isOpenSidebar,
      })}
    >
      <button onClick={() => setIsOpenSidebar(!isOpenSidebar)}>close</button>
    </div>
  );
}

export default MobileSidebar;
