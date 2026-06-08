import { useState } from "react";
import API from "../services/api";

function Register() {

  const [form, setForm] =
  useState({
    name: "",
    email: "",
    password: "",
    role: "jobseeker"
  });

  const handleChange =
  (e) => {

    setForm({
      ...form,
      [e.target.name]:
      e.target.value
    });

  };

  const register =
  async (e) => {

    e.preventDefault();

    try {

      await API.post(
        "/auth/register",
        form
      );

      alert(
        "Registration Successful"
      );

    } catch {

      alert(
        "Registration Failed"
      );

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
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />

        <input
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

        <select
          name="role"
          onChange={handleChange}
        >

          <option value="jobseeker">
            Job Seeker
          </option>

          <option value="recruiter">
            Recruiter
          </option>

        </select>

        <button>
          Register
        </button>

      </form>

    </div>
  );
}

export default Register;