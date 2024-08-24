import { Card, CircularProgress, Modal } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import backgroundImage from "../../assets/images/loginBg.webp";
import { Token, Visibility, VisibilityOff } from "@mui/icons-material";
import api from "../../axios/axiosConfig";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../store/authSlice";
// import ContainerCard from "../../ui-component/cardsContainer/ContainerCard";

const Login = ({ open, handleClose }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); // Initialize useNavigate

  const loginAdmin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Your login logic here
    } finally {
      setLoading(false);
    }
    try {
      console.log(data);
      const response = await api.post("/admin/login", {
        email: data?.username,
        password: data?.password,
      });
      if (response.status === 200) {
        dispatch(
          loginSuccess({ user: response.data.user, token: response.data.token })
        );
        // Handle successful login, for example, save the token
        toast.success("Login successful");
        // Close the modal
        handleClose();
        // Redirect to the admin dashboard
        navigate("/admin");
      } else {
        // Handle login failure, show error message
        alert("Login failed: " + response.data.error);
      }
    } catch (error) {
      console.error("Login error", error);
      toast.error("Invalid email or password");
    }
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        {/* <ContainerCard> */}
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
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={loading}>
                  {loading ? (
                    <>
                      Logging in...
                      <CircularProgress size={20} style={{ marginLeft: 10 }} />
                    </>
                  ) : (
                    "Login"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* </ContainerCard> */}
      </Modal>
    </>
  );
};

export default Login;
