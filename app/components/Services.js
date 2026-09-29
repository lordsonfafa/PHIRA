import React from "react";
import Subservice from "./subservice";
import { GasIcon, ShieldIcon, ZapIcon } from "./Icons";
// import Fix from "@/public/assets/icons/icon-2.svg";

const Services = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 p-6 gap-3 bg-off-white py-20">
      <div className="p-6">
        <h2 className="text-3xl mb-3 font-bold text-slate">
          Specialist systems engineering for fuel, gas, and power
        </h2>
        <div className="w-16 h-1 bg-orange rounded-full mb-6" />
        <p>
          From electrical installations to fuel and gas systems, our team
          delivers work that meets safety code, holds up under daily use, and
          keeps your site running.
        </p>
      </div>
      <div className="p-6">
        <Subservice
          logo={<ZapIcon />}
          title="Electrical Engineering"
          number="01"
          text="Full-scope electrical engineering services for commercial and industrial sites, from design through installation."
        />
        <Subservice
          logo={<GasIcon />}
          title="Fuel & Gas Systems"
          number="02"
          text="Fuel line installation, gas system setup, and gas dispenser installation — done to safety code and built for reliable daily operation."
        />
        <Subservice
          logo={<ShieldIcon />}
          title="Maintenance & Repair"
          number="03"
          text="Ongoing maintenance and repair for mechanical and electronic pumps, keeping your systems running without unplanned downtime."
        />
      </div>
    </section>
  );
};

export default Services;
