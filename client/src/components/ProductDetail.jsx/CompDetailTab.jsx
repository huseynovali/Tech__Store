import React from "react";
import { useSelector } from "react-redux";

function CompDetailTab() {
  const data = useSelector((state) => state.productReducer.ProductById);

  return (
    <div className="px-4">
      <ul className="list-disc">
        {data.compParametr.map((item) => (
          <li className="py-1 text-sm">{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default CompDetailTab;
