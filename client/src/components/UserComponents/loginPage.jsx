import { Card, Modal } from "@mui/material";
import React, { useState } from "react";
import ContainerCard from "../../Ui-Components/Cards/ContainerCard";
import backgroundImage from "../../assets/images/wepik.jpeg";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";
import api from "../../axios/axiosConfig";
import { toast } from "react-hot-toast";

const Login = ({ open, handleClose }) => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const loginAdmin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/admin/login", {
        email: data.username,
        password: data.password,
      });
      console.log(response);
      if (response.data.token) {
        // Handle successful login, for example, save the token
        localStorage.setItem("token", response.data.token);
        toast.success("Login successful");
        // Close the modal
        handleClose();
      } else {
        // Handle login failure, show error message
        alert("Login failed: " + response.data.error);
      }
    } catch (error) {
      console.error("Login error", error);
      toast.error("Invalid email or password");
      // alert("An error occurred during login.");
    }
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <ContainerCard>
          <div
            className="text-center"
            style={{
              backgroundImage: `url(${backgroundImage})`,
            }}>
            <div className="container">
              <form onSubmit={loginAdmin}>
                <div
                  className="section-title"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}>
                  <h2>Login</h2>
                  <div className="form-group">
                    <label style={{ fontWeight: "bold" }}>Username</label>
                    <div style={{ width: "30rem", position: "relative" }}>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your username"
                        value={data.username}
                        onChange={(e) =>
                          setData({ ...data, username: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label style={{ fontWeight: "bold" }}>Password</label>
                    <div style={{ width: "30rem", position: "relative" }}>
                      <input
                        type={showPassword ? "text" : "password"}
                        className="form-control"
                        placeholder="Enter your password"
                        value={data.password}
                        onChange={(e) =>
                          setData({ ...data, password: e.target.value })
                        }
                      />
                      <div
                        style={{
                          position: "absolute",
                          right: "10px",
                          top: "70%",
                          transform: "translateY(-50%)",
                          cursor: "pointer",
                        }}
                        onClick={handleTogglePasswordVisibility}>
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </ContainerCard>
      </Modal>
    </>
  );
};

export default Login;
