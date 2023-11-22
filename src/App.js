import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Dashboard from "./pages/dashboard";
import Login from "./components/login";
import Users from "./pages/users";
import Absent from "./pages/absent";
import AddUser from "./pages/adduser";
import EditUser from "./pages/edituser";
import AddAbsent from "./pages/addabsent";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Always render the Login route */}
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/absent" element={<Absent />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/absent/add" element={<AddAbsent />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
