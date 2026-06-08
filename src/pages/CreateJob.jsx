import { useState } from "react";
import API from "../services/api";

function CreateJob() {

 const [job,setJob] = useState({
  title:"",
  company:"",
  location:"",
  salary:"",
  description:""
 });

 const handleChange=(e)=>{
  setJob({
   ...job,
   [e.target.name]:e.target.value
  });
 };

 const createJob=async(e)=>{

  e.preventDefault();

  try{

   await API.post(
    "/jobs",
    job
   );

   alert("Job Created Successfully");

   setJob({
    title:"",
    company:"",
    location:"",
    salary:"",
    description:""
   });

  }catch(err){

   alert("Error Creating Job");

  }

 };

 return(

  <div className="dashboard">

   <h1>Create Job</h1>

   <form
    className="job-form"
    onSubmit={createJob}
   >

    <input
     name="title"
     placeholder="Job Title"
     value={job.title}
     onChange={handleChange}
    />

    <input
     name="company"
     placeholder="Company"
     value={job.company}
     onChange={handleChange}
    />

    <input
     name="location"
     placeholder="Location"
     value={job.location}
     onChange={handleChange}
    />

    <input
     name="salary"
     placeholder="Salary"
     value={job.salary}
     onChange={handleChange}
    />

    <textarea
     name="description"
     placeholder="Description"
     value={job.description}
     onChange={handleChange}
    />

    <button>
     Create Job
    </button>

   </form>

  </div>

 );

}

export default CreateJob;