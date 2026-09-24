import React from "react";

const ProjectCard = ({ image, title, text }) => {
  return (
    // <div className="card bg-base-100 shadow-xl overflow-hidden h-full flex flex-col">
    //   <figure className="relative w-full flex-1 min-h-[200px] overflow-hidden">
    //     <img src={image} alt={title} className="w-full object-cover" />
    //   </figure>
    //   <div className="card-body bg-white p-6">
    //     <h2 className="card-title text-slate-900 h-1">{title}</h2>
    //     {/* {text && <p className="text-gray-600 mt-2">{text}</p>} */}
    //   </div>
    // </div>
    <div className="card bg-base-100 shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <figure className="w-full aspect-video bg-slate-50 overflow-hidden flex items-center justify-center p-2">
        <img src={image} alt={title} className="w-full h-full object-contain" />
      </figure>
      <div className="card-body bg-white">
        <h2 className="card-title">{title}</h2>
        {/* <p>Precision project management and site oversight.</p> */}
      </div>
    </div>
  );
};

export default ProjectCard;
