import React from "react";

const DealCard = () => {
  return (
    <div className="w-[12rem] cursor-pointer lg:px-1">
      <img
        className="border-x-[7px] border-t-[7px] border-pink-600 w-full h-[12rem] object-cover object-top"
        src="https://cdn.hoanghamobile.com/Uploads/2024/12/05/thumb-watch-se-2024-lte-44mm-anh-sao.png;trim.threshold=80;trim.percentpadding=0.5;width=250;height=250;mode=pad;paddingWidth=5;"
        alt=""
      />
      <div className="border-4 border-black bg-black text-white p-2 text-center">
        <p className="text-lg font-semibold">Smart Watch</p>
        <p className="text-2xl font-bold">20% OFF</p>
        <p className="text-balance text-lg">shop now</p>
      </div>
    </div>
  );
};

export default DealCard;
