import Image from "next/image";
import React from "react";

const Subservice = ({ logo, title, number, text }) => {
  return (
    <div>
      <div className="flex items-center justify-between pb-3">
        <div className="flex items-center gap-3">
          <Image src={logo} width={40} height={40} alt="icon" />
          <p className="text-slate font-bold text-xl">{title}</p>
        </div>
        <p className="text-4xl font-bold text-mid-gray">{number}</p>
      </div>
      <p className="border-b pb-4 mb-3">{text}</p>
    </div>
  );
};

export default Subservice;
