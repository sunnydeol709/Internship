import React, { useState } from "react";

const RegisterPage = () => {
  const init = {
    name: "",
    address: "",
    phone: "",
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(init);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    // if (formData.password.length < 8) {
    //   setError("Password must be of 8 charater.");
    //   //   return;
    // } else {
    //   setError("");
    // }
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.length === 0) {
      //   alert("Name field Required");
      setError("Name field Required");
      return;
    }
    if (formData.address.length === 0) {
      setError("Address field Required");
      return;
    }
    if (formData.phone.length === 0) {
      setError("phone field Required");
      return;
    }
    if (formData.email.length === 0) {
      setError("Email field Required");
      return;
    }
    if (formData.password.length < 8) {
      setError("Password must be of 8 charater.");
      return;
    }

    console.log(formData);

    localStorage.setItem("user", JSON.stringify(formData));
    localStorage.removeItem("user");
    JSON.parse(localStorage.getItem("user"));

    // setFormData({
    //   name: "",
    //   address: "",
    //   phone: "",
    //   email: "",
    //   password: "",
    // });
    setFormData(init);
  };

  return (
    <div className="grid place-items-center h-screen w-full">
      <form
        onSubmit={handleSubmit}
        className="w-120 p-4 shadow-2xl rounded-lg flex flex-col gap-4"
      >
        <h1 className="text-4xl font-bold">Register</h1>
        <input
          value={formData.name}
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Enter Your name"
        />

        <input
          value={formData.address}
          onChange={handleChange}
          type="text"
          name="address"
          placeholder="Enter Your Address"
        />

        <input
          value={formData.phone}
          onChange={handleChange}
          type="phone"
          name="phone"
          placeholder="Enter Your Phone"
        />

        <input
          value={formData.email}
          onChange={handleChange}
          type="email"
          name="email"
          placeholder="Enter Your Email"
        />
        <input
          value={formData.password}
          onChange={handleChange}
          type="password"
          name="password"
          placeholder="Enter Your Password"
        />
        {error && <span className="text-red-500">{error}</span>}
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
