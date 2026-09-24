import React from "react";
import ContactForm from "./form";

const Contact = () => {
  return (
    <section className="py-10 bg-off-white">
      <div className="grid grid-cols-1 md:grid-cols-2 bg-slate text-white w-4/5 mx-auto rounded-2xl gap-4">
        <div className="p-6 mt-3 space-y-4">
          <h1 className="font-bold text-4xl m-3">
            Have a project in mind? Let's talk electrical, fuel & gas systems.
          </h1>
          <div className="p-1">
            <p className="text-sm text-orange">PHONE</p>
            <p className="text-xl">+233 59 325 3373 / +233 59 366 1340</p>
          </div>
          <div className="p-1">
            <p className="text-sm text-orange">EMAIL</p>
            <p className="text-xl">Phiraengandcons@gmail.com</p>
          </div>
          <div className="p-1">
            <p className="text-sm text-orange">ADDRESS</p>
            <p className="text-xl">P.O. Box 4369, Nsakina, Amasaman</p>
          </div>
        </div>
        <div className="p-6">
          <ContactForm title="Let's Build Something Solid" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
