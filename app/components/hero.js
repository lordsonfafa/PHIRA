import React from "react";

const Hero = () => {
  return (
    <section
      className="relative min-h-[640px] bg-cover bg-center text-white flex justify-center text-center items-center p-6"
      style={{ backgroundImage: "url('/assets/hero1.svg')" }}
    >
      <div className="absolute inset-0 bg-slate-dark/55" />
      <div className="relative z-10 w-3xl ">
        <h3 className="m-3 text-gold font-bold">
          ELECTRICAL, FUEL & GAS SYSTEMS SPECIALISTS
        </h3>
        <h1 className="m-3 text-4xl font-extrabold">
          Engineering the Systems That Power Your Site
        </h1>
        <p className="m-3">
          Phira delivers electrical engineering, fuel line installation, gas
          systems, and pump maintenance — built to spec, installed to last, and
          backed by dependable after-service support.
        </p>
        <button className="btn bg-orange text-charcoal hover:bg-slate-dark hover:text-white">
          Request a consultation
        </button>
      </div>
    </section>
  );
};

export default Hero;
