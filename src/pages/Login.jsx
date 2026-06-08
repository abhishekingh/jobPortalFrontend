import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Login() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
      e.target.value
    });
  };

  const login = async (e) => {

  e.preventDefault();

  try {

    const res = await API.post(
      "/auth/login",
      form
    );

    localStorage.setItem(
      "token",
      res.data.token
    );

    localStorage.setItem(
      "user",
      JSON.stringify(res.data.user)
    );

    //alert("Login Successful");
    if (res.data.user.role === "recruiter") {
    navigate("/recruiter");
    } else {
    navigate("/jobseeker");
    }
    if (res.data.user.role === "recruiter") {
      navigate("/recruiter");
    } else {
      navigate("/jobseeker");
    }

  } catch (err) {

    console.log(err);

    alert("Login Failed");

  }
};

  return (
    <div className="auth-container">

      <form
        className="auth-form"
        onSubmit={login}
      >

        <h2>Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <button>
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;