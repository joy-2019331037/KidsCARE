import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Fatima from "../img/fatima.jpg";
import Lily from "../img/Lily.png";
import July from "../img/July.jpg";
import Rosie from "../img/Rosie.png";
import Ananna from "../img/Ananna.jpg";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Caregivers = () => {
    const imgs=[Fatima, Lily, July,Rosie ,Ananna]
//   const caregivers = [
//     {
//       id: 1,
//       img: Fatima,
//       name: "Fatima Jahan",
//       designation: "Senior Employee",
//       rating: "4.7",
//       experience: "7 years",
//     },
//     {
//       id: 2,
//       img: Lily,
//       name: "Lily Islam",
//       designation: "Senior Employee",
//       rating: "4.3",
//       experience: "5 years",
//     },
//     {
//       id: 3,
//       img: July,
//       name: "Margaret July",
//       designation: "Junior Employee (Overseas recruitment)",
//       rating: "4.1",
//       experience: "2 years",
//     },
//     {
//       id: 4,
//       img: Rosie,
//       name: "Rosie Rahman",
//       designation: "Junior Employee",
//       rating: "3.9",
//       experience: "1 years",
//     },
//     {
//       id: 5,
//       img: Ananna,
//       name: "Ananna Abedin",
//       designation: "Intern",
//       rating: "N/A",
//       experience: "6 months",
//     },
//   ];

const [caregivers, setCaregivers]=useState([

])  

const loader = async () => {
    try {
      const res = await axios.get("http://localhost:7000/api/get/caregivers");
      console.log(res);
      console.log("printing from req,js");
     
        const map = new Map(Object.entries(JSON.parse(JSON.stringify(res.data))));
      
      // Convert the map values to an array of children
      const cgsData = Array.from(map.values());
      
      setCaregivers(cgsData.map((cgData) => ({
        id:cgData.id,
        img:cgData.img,
        name: cgData.name,
        designation: cgData.designation,
        experience: cgData.experience,
        rating:cgData.rating,
        rateCount: cgData.rateCount
      })));
      
    } catch (err) {
      console.log(err);
    }
  };

    useEffect(() => {
        if (caregivers.length === 0) {
          loader();
        }
      }, []);

      console.log(caregivers);

  const clickHandler = (caregiver) => {
    console.log(caregiver);
    const inputValue = 5;
    const inputStep = 0.5;

    Swal.fire({
      title: "Liked our service? Please Rate",
     
      html: `
    <input
      type="number"
      value="${inputValue}"
      step="${inputStep}"
      class="swal2-input"
      id="range-value">`,
      input: "range",
      inputValue,
      inputAttributes: {
        min: 0,
        max: 5,
        step: inputStep,
      },
      confirmButtonText: "OK", // Add text for the OK button
      showCancelButton: true,
      didOpen: () => {
        const inputRange = Swal.getInput();
        const inputNumber =
          Swal.getHtmlContainer().querySelector("#range-value");

        // Sync input[type=number] with input[type=range]
        inputRange.addEventListener("input", () => {
          inputNumber.value = inputRange.value;
        });

        // Sync input[type=range] with input[type=number]
        inputNumber.addEventListener("change", () => {
          inputRange.value = inputNumber.value;
        });
      },
      preConfirm: async () => {
        const inputNumber =
          Swal.getHtmlContainer().querySelector("#range-value");
        const selectedValue = parseFloat(inputNumber.value);

        // Perform actions with the selected value, such as sending it to the server
        console.log("Selected value:", selectedValue);

        try {
          const res = await axios.put("http://localhost:7000/api/set/rating", {
            id: caregiver.id,
            newRating: selectedValue,
          });
          console.log(res);
        } catch (err) {
          console.log(err);
        }
      },
    });
  };
  var c=0;
  return (
    <div className="container">
      <div className="home">
        <div className="caregivers">
          {caregivers.map((caregiver) => (
            <div className="caregiver" key={caregiver.id}>
              <div className="img">
                <img src={imgs[c++]} alt="img" />
              </div>

              <div className="content">
                <h2>{caregiver.name}</h2>
                <div className="employeeDiv">
                  {caregiver.designation}
                  <p></p>
                  Experience <b>{caregiver.experience}</b>
                </div>
                {
                    c==5 && (
                        <div className="ratingDiv">
                        Rating
                        <p className="rating">N/A</p>
                        </div>
                    )
                }
               {
                 c!=5 &&(
                    <div className="ratingDiv">
                    Rating
                    <p className="rating">{caregiver.rating.toFixed(2)}</p>
                  </div>
                 )
               }

                {
                    c!=5 && (
                        <button
                  className="seeDetails"
                  onClick={() => clickHandler(caregiver)}
                >
                  Rate
                </button>
                    )
                }
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Caregivers;
