import {
 useEffect,
 useState
}
from "react";

import API
from "../services/api";

function Applications(){

 const [
  applications,
  setApplications
 ]
 =
 useState([]);

 useEffect(()=>{

  loadApplications();

 },[]);

 const loadApplications=
 async()=>{

  const res=
  await API.get(
   "/applications"
  );

  setApplications(
   res.data
  );

 };

 return(

  <div
   className="dashboard"
  >

   <h1>
    Applicants
   </h1>

   <table
    className="app-table"
   >

    <thead>

     <tr>

      <th>
       Name
      </th>

      <th>
       Email
      </th>

      <th>
       Job
      </th>

      <th>
       Status
      </th>

     </tr>

    </thead>

    <tbody>

    {
     applications.map(
      app=>(
       <tr
        key={app._id}
       >

        <td>
         {app.applicantName}
        </td>

        <td>
         {app.applicantEmail}
        </td>

        <td>
         {app.jobId?.title}
        </td>

        <td>
         {app.status}
        </td>

       </tr>
      )
     )
    }

    </tbody>

   </table>

  </div>

 );

}

export default Applications;