import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoPerson, IoPricetag, IoHome, IoLogOut } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/AuthSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const logout = () => {
    // localStorage.removeItem("user");
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div>
      <aside className="menu has-shadow pl-6 pr-5 mr-5 mt-5">
        <p className="menu-label">General</p>
        <ul className="menu-list">
          <li>
            <NavLink to={"/dashboard"}>
              <IoHome />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to={"/absent"}>
              <IoPricetag />
              Absent
            </NavLink>
          </li>
        </ul>
        <p className="menu-label">Admin</p>
        <ul className="menu-list">
          <li>
            <NavLink to={"/users"}>
              <IoPerson />
              Users
            </NavLink>
          </li>
        </ul>
        <p className="menu-label">Settings</p>
        <ul className="menu-list">
          <li>
            <button onClick={logout} className="button is-white">
              <IoLogOut />
              Logout
            </button>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
