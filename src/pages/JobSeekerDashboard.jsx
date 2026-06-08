import { useEffect, useState } from "react";
import API from "../services/api";

function JobSeekerDashboard() {

  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = async () => {
    try {

      const res = await API.get("/jobs");

      setJobs(res.data);

    } catch (err) {
      console.log(err);
    }
  };

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase()) ||
    job.company.toLowerCase().includes(search.toLowerCase()) ||
    job.location.toLowerCase().includes(search.toLowerCase())
  );

  const applyJob = async (jobId) => {

    try {

      alert("Application Submitted Successfully");

      // Later we will connect this
      // with Application API
       const user =
        JSON.parse(
        localStorage.getItem("user")
        );

    await API.post(
      "/applications/apply",
      {
        jobId,
        applicantName:
        user.name,
        applicantEmail:
        user.email
      }
    );

    alert(
      "Application Submitted"
    );

    } catch (err) {

      console.log(err);

    }
  };

  return (
    <div className="dashboard">

      <div className="dashboard-header">

        <h1>Job Seeker Dashboard</h1>

      </div>

      <input
        type="text"
        placeholder="Search Jobs..."
        className="search-box"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <div className="job-grid">

        {filteredJobs.map((job) => (

          <div
            className="job-card"
            key={job._id}
          >

            <h2>{job.title}</h2>

            <p>
              <strong>Company:</strong>{" "}
              {job.company}
            </p>

            <p>
              <strong>Location:</strong>{" "}
              {job.location}
            </p>

            <p>
              <strong>Salary:</strong>{" "}
              ₹ {job.salary}
            </p>

            <p>
              {job.description}
            </p>

            <button
              onClick={() =>
                applyJob(job._id)
              }
            >
              Apply Now
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default JobSeekerDashboard;