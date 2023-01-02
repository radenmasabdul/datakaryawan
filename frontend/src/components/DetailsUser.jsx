import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const DetailsUser = () => {
  const [nik, setNik] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [national, setNational] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, []);

  //get single data
  const getUserById = async () => {
    const response = await axios.get(`http://localhost:5000/users/${id}`);
    setNik(response.data.nik);
    setName(response.data.name);
    setAge(response.data.age);
    setBirthday(response.data.birthday);
    setGender(response.data.gender);
    setAddress(response.data.address);
    setNational(response.data.national);
  };

  return (
    <>
      <form className="container card w-full bg-base-100 shadow-xl py-5">
        <div className="mx-6">
          <h3 className="text-lg font-bold capitalize ">
            personal data application
          </h3>
          <p className="font-normal text-black text-base capitalize my-4">
            details data
          </p>
          <p className="font-normal text-black text-base uppercase">nik</p>
          <input
            type="number"
            placeholder="Input NIK"
            className="input w-full input-bordered my-4"
            required
            value={nik}
            readOnly
            disabled
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
            readOnly
            disabled
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
                checked={gender === "Male"}
                readOnly
                disabled
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
                checked={gender === "Female"}
                readOnly
                disabled
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
            readOnly
            disabled
          ></input>
          <p className="font-normal text-black text-base capitalize my-2">
            Age
          </p>
          <input
            className="input w-full input-bordered my-4"
            type="text"
            id="age"
            name="age"
            value={age}
            readOnly
            disabled
          />
          <p className="font-normal text-black text-base capitalize my-2">
            address
          </p>
          <textarea
            className="textarea w-full my-4"
            placeholder="Address"
            value={address}
            readOnly
            disabled
          ></textarea>
          <p className="font-normal text-black text-base capitalize my-2">
            nationality
          </p>
          <select
            type="dropdown"
            className="select w-full my-4"
            required
            value={national}
            disabled
          >
            <option disabled value="national" className="capitalize my-4">
              select nationality
            </option>
            <option value="Indonesia">Indonesia</option>
            <option value="Rusia">Rusia</option>
            <option value="India">India</option>
            <option value="China">China</option>
            <option value="Amerika Serikat">Amerika Serikat</option>
          </select>
          <div className="flex flex-wrap gap-4">
            <Link to="/">
              <button className="btn btn-warning my-4 text-white">Back</button>
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default DetailsUser;
