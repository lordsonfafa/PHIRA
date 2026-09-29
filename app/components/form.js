"use client";

import React, { useState } from "react";

const ContactForm = ({ title = "" }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    details: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for field on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    }

    if (!formData.details.trim()) {
      newErrors.details = "Project details are required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          alert("Thank you! Your message has been sent.");
          setFormData({ fullName: "", email: "", phone: "", details: "" });
        } else {
          alert("Something went wrong. Please try again.");
        }
      } catch (err) {
        console.error(err);
        alert("Network error. Please try again later.");
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-6 text-black bg-off-white"
    >
      {title && (
        <h3 className="font-extrabold text-slate text-2xl text-center">
          {title}
        </h3>
      )}

      {/* Full Name */}
      <div className="form-control flex flex-col w-full">
        <label className="label">
          <span className="label-text">Full Name</span>
        </label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className={`input border-slate bg-white input-bordered w-full focus:border-orange ${
            errors.fullName ? "border-red-500" : ""
          }`}
        />
        {errors.fullName && (
          <span className="text-red-500 text-xs mt-1">{errors.fullName}</span>
        )}
      </div>

      {/* Email Address */}
      <div className="form-control flex flex-col w-full">
        <label className="label">
          <span className="label-text">Email Address</span>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`input border-slate bg-white input-bordered w-full focus:border-orange ${
            errors.email ? "border-red-500" : ""
          }`}
        />
        {errors.email && (
          <span className="text-red-500 text-xs mt-1">{errors.email}</span>
        )}
      </div>

      {/* Phone Number */}
      <div className="form-control flex flex-col w-full">
        <label className="label">
          <span className="label-text">Phone Number</span>
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`input border-slate bg-white input-bordered w-full focus:border-orange ${
            errors.phone ? "border-red-500" : ""
          }`}
        />
        {errors.phone && (
          <span className="text-red-500 text-xs mt-1">{errors.phone}</span>
        )}
      </div>

      {/* Project Details */}
      <div className="form-control flex flex-col w-full">
        <label className="label">
          <span className="label-text">Project Details</span>
        </label>
        <textarea
          name="details"
          value={formData.details}
          onChange={handleChange}
          rows={4}
          className={`textarea bg-white border-slate input-bordered w-full focus:border-orange ${
            errors.details ? "border-red-500" : ""
          }`}
        />
        {errors.details && (
          <span className="text-red-500 text-xs mt-1">{errors.details}</span>
        )}
      </div>

      <button
        type="submit"
        className="btn bg-orange text-slate hover:bg-slate hover:text-white w-full"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
