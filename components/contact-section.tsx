<<<<<<< HEAD

=======
>>>>>>> 9d240d0a254a780458e0f1fb615a35f51f32de72
"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

<<<<<<< HEAD
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      access_key: "ecd694d2-035c-4a7c-a769-d672ef5d870f",
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (result.success) {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      alert("Something went wrong. Please try again.");
    }
=======
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", phone: "", message: "" });
>>>>>>> 9d240d0a254a780458e0f1fb615a35f51f32de72
  };

  return (
    <section
      className="w-full py-12 px-6 md:px-12"
      style={{ backgroundColor: "#FFE878" }}
    >
      <div
        className="w-full mx-auto rounded-3xl p-8 md:p-12"
        style={{ backgroundColor: "#FAFABF" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
<<<<<<< HEAD

=======
>>>>>>> 9d240d0a254a780458e0f1fb615a35f51f32de72
          {/* Left Side */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-full flex justify-center md:justify-start mb-8 ">
              <Image
                src="/logo.png"
                alt="Phone"
                width={240}
                height={240}
                className="mx-auto md:mx-0 mb-4 "
              />
            </div>

            <div className="mx-2 md:mx-4">
              <h2
                className="text-2xl md:text-3xl font-bold mb-3"
                style={{ color: "#3B001B", fontFamily: "Oswald" }}
              >
                Need a custom quote?
              </h2>
              <p
                className="text-base md:text-lg w-64"
<<<<<<< HEAD
                style={{
                  color: "#3B001B",
                  fontFamily: "Oswald",
                  textAlign: "center",
                }}
=======
                style={{ color: "#3B001B", fontFamily: "Oswald" , textAlign:'center' }}
>>>>>>> 9d240d0a254a780458e0f1fb615a35f51f32de72
              >
                Don't let your ideas sit idle—slide into our inbox and let's make magic!
              </p>
            </div>
          </div>

<<<<<<< HEAD
=======



>>>>>>> 9d240d0a254a780458e0f1fb615a35f51f32de72
          {/* Right Side - Contact Form */}
          <div className="mx-2 md:mx-6">
            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
              {["name", "email", "phone", "message"].map((field) => (
                <div key={field} className="mb-4">
                  <label
                    className="block text-lg font-bold mb-2"
                    style={{ color: "#3B001B", fontFamily: "Oswald" }}
                  >
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>

                  {field === "message" ? (
                    <textarea
                      name={field}
                      value={formData[field as keyof typeof formData]}
                      onChange={handleChange}
                      rows={4}
                      className="w-full focus:outline-none border-b-2 border-[#3B001B] bg-transparent text-[#3B001B] py-1 resize-none"
                      required
                    />
                  ) : (
                    <input
                      type={
                        field === "email"
                          ? "email"
                          : field === "phone"
<<<<<<< HEAD
                          ? "tel"
                          : "text"
=======
                            ? "tel"
                            : "text"
>>>>>>> 9d240d0a254a780458e0f1fb615a35f51f32de72
                      }
                      name={field}
                      value={formData[field as keyof typeof formData]}
                      onChange={handleChange}
                      className="w-full focus:outline-none border-b-2 border-[#3B001B] bg-transparent text-[#3B001B] py-1"
                      required={field !== "phone"}
                    />
                  )}
                </div>
              ))}

              <button
                type="submit"
                className="w-full py-3 px-6 rounded-full font-bold text-lg transition-all hover:shadow-lg"
                style={{
                  backgroundColor: "#FFE680",
                  color: "#3B001B",
                  fontFamily: "Oswald",
                  border: "3px solid #3B001B",
                  boxShadow: "0 4px 0 #3B001B",
                }}
                onMouseDown={(e) => {
                  e.currentTarget.style.boxShadow = "0 2px 0 #3B001B";
                  e.currentTarget.style.transform = "translateY(2px)";
                }}
                onMouseUp={(e) => {
                  e.currentTarget.style.boxShadow = "0 4px 0 #3B001B";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Submit Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
