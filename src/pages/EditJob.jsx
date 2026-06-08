import {
 useState,
 useEffect
}
from "react";

import {
 useParams,
 useNavigate
}
from "react-router-dom";

import API
from "../services/api";

function EditJob(){

 const {id}=
 useParams();

 const navigate=
 useNavigate();

 const [job,setJob]=
 useState({
  title:"",
  company:"",
  location:"",
  salary:"",
  description:""
 });

 useEffect(() => {
  const fetchJob = async () => {
    try {
      const res = await API.get(`/jobs/${id}`);
      setJob(res.data);
    } catch (error) {
      console.error("Error fetching job:", error);
    }
  };

  fetchJob();
}, [id]);

 const handleChange=
 (e)=>{

  setJob({

   ...job,

   [e.target.name]:
   e.target.value

  });

 };

 const updateJob=
 async(e)=>{

  e.preventDefault();

  await API.put(
   `/jobs/${id}`,
   job
  );

  alert(
   "Updated Successfully"
  );

  navigate(
   "/recruiter"
  );

 };

 return(

  <div className="dashboard">

   <h1>Edit Job</h1>

   <form
    className="job-form"
    onSubmit={updateJob}
   >

    <input
     name="title"
     value={job.title}
     onChange={handleChange}
    />

    <input
     name="company"
     value={job.company}
     onChange={handleChange}
    />

    <input
     name="location"
     value={job.location}
     onChange={handleChange}
    />

    <input
     name="salary"
     value={job.salary}
     onChange={handleChange}
    />

    <textarea
     name="description"
     value={job.description}
     onChange={handleChange}
    />

    <button>
     Update Job
    </button>

   </form>

  </div>

 );

}

export default EditJob;