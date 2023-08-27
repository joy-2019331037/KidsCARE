import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/authContext";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

import "../css/req.css";
import { map } from "lodash";


/*
{
id:"",
firstname:"",
lastname:"",
age:"",
dob:"",
nationality:"",
bg:"",
guardian:""
}
*/
const Req = () => {
  const { currentUser } = useContext(AuthContext);
  const [inputs, setInputs] = useState({
    userId: currentUser.id,
  });
  const [children, setChildren] = useState([
  
  ]);

  const loader = async () => {
    try {
      const res = await axios.post("http://localhost:7000/api/get/baby", inputs);
      //console.log(res);
      console.log("printing from req,js");
     
      if (res.data === "") {
        Swal.fire(
          "Sorry, No child found",
          "Please check spelling correctly",
          "error"
        );
      } else {
        const map = new Map(Object.entries(JSON.parse(JSON.stringify(res.data))));
      
      // Convert the map values to an array of children
      const childrenData = Array.from(map.values());

      setChildren(childrenData.map((childData) => ({
        id: childData.id,
        firstname: childData.firstname,
        lastname: childData.lastname,
        age: childData.age,
        dob: childData.dob,
        nationality: childData.nationality,
        bg: childData.bg,
        guardian:currentUser.username,
      })));
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (children.length === 0) {
      loader();
    }
  }, []);
  
  console.log(children);
  
  return (
    <>
      {/* {
      children.map((child,id) => (
        <div className="main" key={id}>
            <div className="firstname">{child.firstname}</div>
        </div>
        
      ))
      } */}
      <div className="title">
                <div>Child Info</div>
                <div>KidsCARE Today </div>
      </div>
      <div className="outer">
           
        <div className="Main">
            {
            children.map((child) => (
                <Link className="link" to={`/services/${child.id}`}>
                    <div className="main" key={child.id}>
                    {/* {console.log("Printing from inside div:", child)} */}
                    <div className="content">
                        <div> <b>Name :</b> {child.firstname} {child.lastname} </div>
                        <div><b>Age :</b> {child.age}</div> 
                        <div><b>Date of birth :</b> {child.dob}</div>
                        <div> <b>Nationality :</b> {child.nationality}</div>
                        <div><b>Blood Group :</b> {child.bg}</div>  
                        <div><b>Guardian : </b> {child.guardian}</div> 
                    </div>
                </div>
                </Link>
                ))
            }
        </div>
        
        <div className="todayInfo">
            <div><b>Vacancy : </b> 12</div>
            <div> <b>Total Admitted : </b>20</div>
        </div>
      </div>
      

    </>
  );
};

export default Req;
