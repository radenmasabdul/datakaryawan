import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "../components/UserList";
import AddUser from "../components/AddUser";
import EditUser from "../components/EditUser";
import DetailsUser from "../components/DetailsUser";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="add" element={<AddUser />} />
          <Route path="edit/:id" element={<EditUser />} />
          <Route path="detail/:id" element={<DetailsUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
