import React from "react";
import ContactForm from "../components/form";

const Contact = () => {
  return (
    <div>
      <section className="bg-slate text-center space-y-4 text-white p-6 py-10 bg-radial-[at_50%_30%] from-[#1A2A4A] to-[#0E172A] to-80%">
        <h3 className="text-orange text-xl pt-10">GET IN TOUCH</h3>
        <h1 className="text-4xl font-extrabold">Let's Discuss Your Project</h1>
      </section>
      <div className="w-1/2 mx-auto">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
