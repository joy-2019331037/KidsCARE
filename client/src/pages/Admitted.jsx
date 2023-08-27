import { useState, useEffect } from "react";
import axios from "axios";

import '../css/adminAdmit.css'
import Swal from "sweetalert2";

const AdminAdmit=()=>{

    const [requests, setRequests]=useState([
    
    ])

    const loader =async ()=>{
        try{
            console.log("printing before getreq");
            const res = await axios.get("http://localhost:7000/api/get/admittedReq",[]);
            console.log(res.data.length);
            console.log("printing after getreq");

            const map = new Map(Object.entries(JSON.parse(JSON.stringify(res.data))));
            
            // Convert the map values to an array of requestren
            const requestData = Array.from(map.values());
            //console.log(requestData)
            
            setRequests(requestData.map((requestData) => ({
                requestId:requestData.id,
                childId:requestData.childId,
                firstname:requestData.firstname,
                lastname:requestData.lastname,
                age:requestData.age,
                dob:requestData.dob,
                bg:requestData.bg,
                guardian:requestData.guardian,
                package:requestData.package,
                approved:requestData.approved
            })));
        }catch(err){
            console.log(err);
        }
    }


    useEffect(() => {
        if (requests.length === 0) {
          loader();
        }
      }, []);
      
      console.log(requests);

      const clickHandler=async (request)=>{
        //request.requestId
        Swal.fire({
            title: 'Set Check-Out Time',
            html: `<input type="text" id="login" class="swal2-input" placeholder="Check-In time">`,
            confirmButtonText: 'Release',
            focusConfirm: false,
            preConfirm: async () => {
              const time = Swal.getPopup().querySelector('#login').value
              
              console.log(time)

              var name = request.firstname+ " " + request.lastname;
              var pac=request.package;
              try{
                  const res= await axios.put("http://localhost:7000/api/update/Outreq",{requestId:request.requestId,time:time})
                  console.log(res);
                  Swal.fire({
                      position: 'center',
                      icon: 'success',
                      title: `Request Id ${request.requestId}, kid named ${name} is released`, 
                      text:"Please Refresh"        
                  }
                      
                  )
              }catch(err){
                  console.log(err);
                 
              }
            }
          })
          



       
      }

    return(
        <>
        <div className="Requests">
                <div><b>Admitted Children</b></div>
         </div>

      <div className="bahar">
        <div className="Asli">
        {
            requests.map((request) => (
                        
                            <div className="asli"  key={request.id}>
                            <div className="pac"> <b>Package : {request.package}</b> </div>
                            <div className="content">
                            
                                <div> <b>Name :</b> {request.firstname} {request.lastname} </div>
                                <div><b>Age :</b> {request.age}</div> 
                                <div><b>Date of birth :</b> {request.dob}</div>
                                <div><b>Blood Group :</b> {request.bg}</div>  
                                <div><b>Guardian : </b> {request.guardian}</div> 
                                <button className="admitButton" onClick={() => clickHandler(request)}>Release</button>
                            </div>
                        </div>
                       
                ))
            }
        </div>
      </div>
      </>
    );
}
export default AdminAdmit;