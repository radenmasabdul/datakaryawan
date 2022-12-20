import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Male");
  const navigate = useNavigate();

  //function add user
  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        name,
        email,
        gender,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form
        className="container card w-full bg-base-100 shadow-xl py-5"
        onSubmit={saveUser}
      >
        <div className="mx-6">
          <h3 className="text-lg font-bold capitalize ">
            aplikasi data pribadi
          </h3>
          <p className="font-normal text-black text-base capitalize my-4">
            tambah data baru
          </p>
          <p className="font-normal text-black text-base capitalize">
            full name
          </p>
          <input
            type="text"
            placeholder="Input Full Name"
            className="input w-full input-bordered my-4"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p className="font-normal text-black text-base capitalize">email</p>
          <input
            type="email"
            placeholder="Input Email"
            className="input w-full input-bordered my-4"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="font-normal text-black text-base capitalize">gender</p>
          <select
            className="select w-full my-4"
            required
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option disabled value="gender" className="capitalize my-4">
              select gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <button type="submit" className="btn btn-success my-4 text-white">
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default AddUser;
