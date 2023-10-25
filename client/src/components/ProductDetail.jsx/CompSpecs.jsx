import React from "react";
import { useSelector } from "react-redux";

function CompSpecs() {
  const data = useSelector((state) => state.productReducer.ProductById);

  return (
    <div>
    <table className="">
        {data.specs.map((item) => (
          <tr className="px-4 py-2 bg-white even:bg-[#F5F7FF]">
            <td className="px-4 py-2" width={120}>{Object.keys(item)}</td>
            <td className="px-4 py-2" width={120}>{Object.values(item)}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default CompSpecs