import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  //get all user from api
  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUsers(response.data);
  };

  //delete user
  const deleteUser = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5000/users/${id}`).then((res) => {
          Swal.fire({
            title: "Successfully",
            text: "Your file has been deleted.",
            icon: "success",
            showCancelButton: false,
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Ok",
          });
          getUsers();
        });
      } else {
        return;
      }
    });
  };

  //function seacrh
  const searchHandle = async (e) => {
    let key = e.target.value;
    let result = await fetch(`http://localhost:5000/search/${key}`);
    result = await result.json();
    if (result) {
      setUsers(result);
    }
  };

  return (
    <>
      <main className="container">
        <p className="font-medium text-black text-2xl capitalize my-2">
          employee data form
        </p>
        <section className="card w-full bg-base-100 rounded-sm my-2">
          <div className="mx-2 my-4">
            <p className="font-medium text-base text-black capitalize">
              search
            </p>
            <input
              type="text"
              id="search"
              placeholder="Search here..."
              className="input w-full max-w-xs my-4"
              onChange={searchHandle}
            />
          </div>
        </section>
        <Link to="add">
          <button className="btn btn-info my-2 text-white">Add New</button>
        </Link>
        <section className="overflow-x-auto my-5">
          <table className="table table-compact table-zebra w-full text-center">
            <thead>
              <tr>
                <th>No</th>
                <th>NIK</th>
                <th>Full Name</th>
                <th>Age</th>
                <th>Birth Of Days</th>
                <th>Gender</th>
                <th>Address</th>
                <th>Nationality</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.nik}</td>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.birthday}</td>
                  <td>{user.gender}</td>
                  <td>{user.address}</td>
                  <td>{user.national}</td>
                  <td className="flex flex-wrap gap-2 justify-center">
                    <Link to={`detail/${user._id}`}>
                      <button className="btn btn-warning capitalize text-white">
                        details
                      </button>
                    </Link>
                    <Link to={`edit/${user._id}`}>
                      <button className="btn btn-info capitalize text-white">
                        edit
                      </button>
                    </Link>
                    <button
                      onClick={() => deleteUser(user._id)}
                      className="btn btn-error capitalize text-white"
                    >
                      delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
};

export default UserList;
