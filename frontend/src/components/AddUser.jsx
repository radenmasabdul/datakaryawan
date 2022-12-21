import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

const AddUser = () => {
  const [nik, setNik] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [national, setNational] = useState("");
  const navigate = useNavigate();

  //function add user
  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        nik,
        name,
        age,
        birthday,
        gender,
        address,
        national,
      });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
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
            personal data application
          </h3>
          <p className="font-normal text-black text-base capitalize my-4">
            add new data
          </p>
          <p className="font-normal text-black text-base uppercase">nik</p>
          <input
            type="number"
            placeholder="Input NIK"
            className="input w-full input-bordered my-4"
            required
            value={nik}
            onChange={(e) => setNik(e.target.value)}
          />
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
          <p className="font-normal text-black text-base capitalize">gender</p>
          <div className="form-control my-2">
            <label className="label cursor-pointer">
              <input
                className="radio checked:bg-blue-500"
                type="radio"
                name="gender"
                value="Male"
                onChange={(e) => setGender(e.target.value)}
              />
              <span className="label-text">Male</span>
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <input
                className="radio checked:bg-red-500"
                type="radio"
                name="gender"
                value="Female"
                onChange={(e) => setGender(e.target.value)}
              />
              <span className="label-text">Female</span>
            </label>
          </div>
          <p className="font-normal text-black text-base capitalize my-2">
            date of birth
          </p>
          <input
            className="w-full my-4"
            type="date"
            id="birthday"
            name="birthday"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            required
            pattern="\d{2}-\d{2}-\d{4} "
          ></input>
          <p className="font-normal text-black text-base capitalize my-2">
            address
          </p>
          <textarea
            className="textarea w-full my-4"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></textarea>
          <p className="font-normal text-black text-base capitalize my-2">
            nationality
          </p>
          <select
            type="dropdown"
            className="select w-full my-4"
            required
            value={national}
            onChange={(e) => setNational(e.target.value)}
          >
            <option className="capitalize my-4" required>
              Select Nationality
            </option>
            <option value="Indonesia">Indonesia</option>
            <option value="Rusia">Rusia</option>
            <option value="India">India</option>
            <option value="China">China</option>
            <option value="Amerika Serikat">Amerika Serikat</option>
          </select>
          <div className="flex flex-wrap gap-4">
            <button type="submit" className="btn btn-success my-4 text-white">
              Save
            </button>
            <Link to="/">
              <button className="btn btn-warning my-4 text-white">Back</button>
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddUser;
