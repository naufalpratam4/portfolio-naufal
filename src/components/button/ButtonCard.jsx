import React from "react";

function ButtonCard(data) {
  return (
    <div className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 duration-200 hover:px-6 ">
      <div className="flex">
        <div className=" my-auto">{data.icon}</div>
        <div className="ps-2"> {data.btnName}</div>
      </div>
    </div>
  );
}

export default ButtonCard;
