import React, { useState, useEffect } from "react";
import logo from "../logo_alfahuma.png";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser, reset } from "../features/AuthSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/dashboard");
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ name, password }));
  };

  return (
    <section className="hero has-background-info is-success is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered mb-6">
            <img src={logo} width="210" height="50" alt="logo" />
          </div>
          <div className="columns is-centered">
            <div className="column is-4">
              <form onSubmit={Auth} className="box">
                {isError && (
                  <p className="has-text-centered has-text-black">{message}</p>
                )}
                <h1 className="title has-text-centered is-3 has-text-black">
                  Login
                </h1>
                <div className="field">
                  <label className="label">Username</label>
                  <div className="control">
                    <input
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                      className="input"
                      value={name}
                      placeholder="name"
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <input
                      type="password"
                      className="input"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="*****"
                    />
                  </div>
                </div>
                <div className="field mt-5">
                  <div className="control">
                    <button
                      type="submit"
                      className="button is-success is-fullwidth"
                    >
                      {isLoading ? "Loading..." : "Login"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
