import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";

function RecruiterDashboard(){

 const [jobs,setJobs]=useState([]);

 const loadJobs=async()=>{

  const res=
  await API.get("/jobs");

  setJobs(res.data);

 };

 useEffect(()=>{
  loadJobs();
 },[]);

 const deleteJob=
 async(id)=>{

  try{

   await API.delete(
    `/jobs/${id}`
   );

   loadJobs();

  }catch(err){

   alert(
    "Delete Failed"
   );

  }

 };

 return(

  <div className="dashboard">

   <div className="dashboard-header">

    <h1>
     Recruiter Dashboard
    </h1>

    <Link
     to="/create-job"
    >
     <button>
      + Create Job
     </button>
    </Link>

   </div>

   <div className="job-grid">

   {
    jobs.map(job=>(

     <div
      className="job-card"
      key={job._id}
     >

      <h3>
       {job.title}
      </h3>

      <p>
       {job.company}
      </p>

      <p>
       {job.location}
      </p>

      <p>
       ₹ {job.salary}
      </p>

      <div className="btn-group">

       <Link
        to={`/edit-job/${job._id}`}
       >
        <button>
         Edit
        </button>
       </Link>

       <button
        onClick={()=>
         deleteJob(job._id)
        }
       >
        Delete
       </button>

      </div>

     </div>

    ))
   }

   </div>

  </div>

 );

}

export default RecruiterDashboard;