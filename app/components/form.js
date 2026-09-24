"use client";
import React from "react";

const ContactForm = ({ title = "" }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    //submision logic
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-6 text-black bg-off-white"
    >
      <h3 className="font-extrabold text-slate text-2xl text-center">
        {title}
      </h3>
      <div className="form-control flex flex-col w-full">
        <label className="label">
          <span className="label-text">Full Name</span>
        </label>
        <input className="input border-slate bg-white input-bordered w-full focus:border-orange" />
      </div>
      <div className="form-control flex flex-col w-full">
        <label className="label">
          <span className="label-text">Email Address</span>
        </label>
        <input
          type="email"
          className="input  bg-white border-slate input-bordered w-full focus:border-orange"
        />
      </div>
      <div className="form-control flex flex-col w-full">
        <label className="label">
          <span className="label-text">Phone Number</span>
        </label>
        <input
          type="phone"
          className="input  bg-white border-slate input-bordered w-full focus:border-orange"
        />
      </div>
      <div className="form-control flex flex-col w-full">
        <label className="label">
          <span className="label-text">Project Details</span>
        </label>
        <textarea
          type="text"
          className="textarea  bg-white border-slate input-bordered w-full focus:border-orange"
        />
      </div>
      <button
        className="btn bg-orange text-slate hover:bg-slate hover:text-orange"
        type="submit"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
