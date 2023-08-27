import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/authContext";
import Swal from "sweetalert2";
import { Link,useParams,useNavigate,useLocation } from "react-router-dom";
import chatIcon from '../img/chat.png'
import "../css/details.css";
import { map } from "lodash";

const Details = () => {
    const {id}= useParams();
    console.log(id);
    const {currentUser}=useContext(AuthContext);
    const [requestInfo, setRequestInfo]=useState([]

    )
    const location = useLocation();
    

    const loader=async ()=>{
        try{
            const res=await axios.post("http://localhost:7000/api/get/specificreq",{id:id});
            console.log(res);
            console.log("printing from inside loader")


            const map = new Map(Object.entries(JSON.parse(JSON.stringify(res.data))));
            const requestDatas = Array.from(map.values());
            setRequestInfo(requestDatas.map((requestData) => ({
                id:requestData.id,
                chidlId:requestData.childId,
                firstname: requestData.firstname ,
                lastname:requestData.lastname,
                age: requestData.age,
                dob:requestData.dob,
                bg:requestData.bg,
                guardian: requestData.guardian,
                package:requestData.package,
                approved:requestData.approved,
                checkIn:requestData.checkIn,
                checkOut:requestData.checkOut
              })));
        }catch(err){
            console.log(err)
        }
    }


    useEffect(() => {
        if (requestInfo.length === 0) {
          loader();
        }
      }, []);
    console.log(requestInfo)


    const chatClicker=async(e)=>{
        e.preventDefault();
        try{
            //await axios.post(`http://localhost:7000/api/chat`,currentUser);         
            const queryString = new URLSearchParams(currentUser.username).toString();
            
            window.location.href = "http://localhost:3300/?" + queryString;
            
            
        }catch(err){
            console.log(err)
        }
    }

      return (
        <>
            <div className="upre"><b>Child Info</b></div>
    
            <div className="">
                {requestInfo.map((request) => (
                    <div  key={request.id}>
                        {request.approved === "n" ? (
                            <div className="oopsDiv">
                                <div className="yourChild">
                                    Your child <b>{request.firstname} {" "} {request.lastname}</b> is not admitted yet.
                                </div>
                                <div className="Req">
                                    <div className="req">
                                    <b>Request Status </b>
                                    </div>
                                    
                                    <div className="status">
                                    <b>Pending</b>
                                    </div>

                                    <div><b>Requested Package </b></div>
                                    <div className="reqpac"><b>{request.package}</b></div>
                                </div>

                                
                                
                            </div>
                        ) : (
                            <div className="vitor">
                                <div className="content">
                                    <div className="pac"><b>{request.package}</b></div>
                                    <div><b>Name :</b> {request.firstname} {request.lastname}</div>
                                    <div><b>Age :</b> {request.age}</div> 
                                    <div><b>Date of birth :</b> {request.dob}</div>
                                    
                                    <div><b>Blood Group :</b> {request.bg}</div>  
                                    <div><b>Guardian : {request.guardian} </b> </div>
                                    <div className="status"><b>Admitted</b> </div>
                                    <div className="checkIn">
                                        <div className="Lekha"><b>Checked-In</b></div>
                                        <div className="lekha"><b>{request.checkIn}</b></div>
                                    </div>
                                    <div className="checkIn">
                                        <div className="Lekha"><b>Checked-Out</b></div>
                                        <div className="lekha"><b>{request.checkOut}</b></div>
                                    </div>
                                   
                               
                                </div>    
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className="chat" onClick={chatClicker}>
               <b>Ask us</b> 
                <img className="chatIcon" src={chatIcon}/>
            </div>
        </>
    );
}    
export default Details;
