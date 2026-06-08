import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Register() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "jobseeker"
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const register = async (e) => {

    e.preventDefault();

    try {

      await API.post(
        "/auth/register",
        form
      );

      alert("Registration Successful");

      setForm({
        name: "",
        email: "",
        password: "",
        role: "jobseeker"
      });

      navigate("/login");

    } catch (err) {

      //console.log(err.response.data.msg);

      alert(err.response.data.msg);

    }
  };

  return (
    <div className="auth-container">

      <form
        className="auth-form"
        onSubmit={register}
      >

        <h2>Create Account</h2>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <select
          name="role"
          value={form.role}
          onChange={handleChange}
        >
          <option value="jobseeker">
            Job Seeker
          </option>

          <option value="recruiter">
            Recruiter
          </option>
        </select>

        <button type="submit">
          Register
        </button>

      </form>

    </div>
  );
}

export default Register;