import React, { useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { registerAPI,loginAPI } from "../services/allAPI";
import auth from '../assets/auth.jpg'

const Auth = ({ insideRegister }) => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (userData.username && userData.email && userData.password) {
      try {
        const result = await registerAPI(userData);
        if (result.status === 200) {
          const userId = result.data._id;
          sessionStorage.setItem("userId", userId);
          setUserData({
            username: "",
            email: "",
            password: "",
          });
          navigate("/login");
        } else {
          if (result.response && result.response.status === 406) {
            toast.error(result.response.data);
            setUserData({
              username: "",
              email: "",
              password: "",
            });
          }
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("Please fill the form completely");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (userData.email && userData.password) {
      try {
        const result = await loginAPI(userData);
        console.log(result);
        if (result.status == 200) {
          sessionStorage.setItem("user", JSON.stringify(result.data.user));
          sessionStorage.setItem("token", result.data.token);
          setTimeout(() => {
            setUserData({
              username: "",
              email: "",
              password: "",
            });
            navigate("/dashboard");
          }, 1500);
        } else {
          if (result.response.status == 404) {
            console.log(result.response.data);
          }
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("Please fill the form completely");
    }
  };
  return (
    <div
      style={{ width: "100%", height: "100vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <div className="container w-75">
        <div className="card shadow p-2">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img className="w-100" src={auth} alt="Login" />
            </div>
            <div className="col-lg-6">
              <h3 className="fw-bolder mt-2">Artwork.com</h3>
              <h5 className="fw-bolder mt-2">
                Sign {insideRegister ? "Up" : "in"} to your account
              </h5>
              <Form>
                {insideRegister && (
                  <FloatingLabel
                    controlId="floatingInputname"
                    label="Username"
                    className="mb-3"
                  >
                    <Form.Control
                      value={userData.username}
                      onChange={(e) =>
                        setUserData({ ...userData, username: e.target.value })
                      }
                      type="text"
                      placeholder="Username"
                    />
                  </FloatingLabel>
                )}
                <FloatingLabel
                  controlId="floatingInput"
                  label="Email address"
                  className="mb-3"
                >
                  <Form.Control
                    value={userData.email}
                    onChange={(e) =>
                      setUserData({ ...userData, email: e.target.value })
                    }
                    type="email"
                    placeholder="name@example.com"
                  />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                  <Form.Control
                    value={userData.password}
                    onChange={(e) =>
                      setUserData({ ...userData, password: e.target.value })
                    }
                    type="password"
                    placeholder="Password"
                  />
                </FloatingLabel>
                {insideRegister ? (
                  <div className="mt-3">
                    <button
                      onClick={handleRegister}
                      className="btn btn-primary"
                    >
                      Register
                    </button>
                    <p className="mt-2">
                      {" "}
                      Already have an account ? Click here to{" "}
                      <Link to="/login">Login</Link>
                      <Link className="ms-3" to="/">
                        Main page
                      </Link>
                    </p>
                  </div>
                ) : (
                  <div className="mt-3">
                    <button onClick={handleLogin} className="btn btn-primary">
                      Login
                    </button>
                    <p className="mt-2">
                      {" "}
                      New user ? Click here to{" "}
                      <Link to="/register">Register</Link>
                      <Link className="ms-3" to="/">
                        Main page
                      </Link>
                    </p>
                  </div>
                )}
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
