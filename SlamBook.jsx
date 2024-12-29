import React, { useState } from "react";
import "./Slambook.css";

const Slambook = () => {
  const [formData, setFormData] = useState({
    name: "",
    nickname: "",
    address: "",
    phone: "",
    memories: "",
    gender: "",
    favActors: [],
    school: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        favActors: checked
          ? [...prev.favActors, value]
          : prev.favActors.filter((actor) => actor !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    alert("Slambook Submitted Successfully!");
  };

  return (
    <div className="slambook-container">
      <h1>Slambook</h1>
      <form onSubmit={handleSubmit} className="slambook-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>

        <label>
          Nickname:
          <input
            type="text"
            name="nickname"
            value={formData.nickname}
            onChange={handleChange}
          />
        </label>

        <label>
          Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </label>

        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </label>

        <label>
          Memories:
          <textarea
            name="memories"
            value={formData.memories}
            onChange={handleChange}
          ></textarea>
        </label>

        <fieldset>
  <legend>Gender:</legend>
  <div>
    <label>
      <input
        type="radio"
        name="gender"
        value="Male"
        checked={formData.gender === "Male"}
        onChange={handleChange}
      />
      Male
    </label>
  </div>
  <div>
    <label>
      <input
        type="radio"
        name="gender"
        value="Female"
        checked={formData.gender === "Female"}
        onChange={handleChange}
      />
      Female
    </label>
  </div>
  <div>
    <label>
      <input
        type="radio"
        name="gender"
        value="Other"
        checked={formData.gender === "Other"}
        onChange={handleChange}
      />
      Other
    </label>
  </div>
</fieldset>

<fieldset>
  <legend>Favorite Actors:</legend>
  <div>
    <label>
      <input
        type="checkbox"
        name="favActors"
        value="Actor 1"
        checked={formData.favActors.includes("Actor 1")}
        onChange={handleChange}
      />
      Ajith
    </label>
  </div>
  <div>
    <label>
      <input
        type="checkbox"
        name="favActors"
        value="VActor 2"
        checked={formData.favActors.includes("Actor 2")}
        onChange={handleChange}
      />
      Vijay
    </label>
  </div>
  <div>
    <label>
      <input
        type="checkbox"
        name="favActors"
        value="Actor 3"
        checked={formData.favActors.includes("Actor 3")}
        onChange={handleChange}
      />
      SK
    </label>
  </div>
</fieldset>


        <label>
          School:
          <select
            name="school"
            value={formData.school}
            onChange={handleChange}
          >
            <option value="">Select your school</option>
            <option value="School1">KonguNadu Matriculation School</option>
            <option value="School2">Bharathi Vidyalaya</option>
            <option value="School3">Kamarajar Matriculation School</option>
          </select>
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Slambook;
