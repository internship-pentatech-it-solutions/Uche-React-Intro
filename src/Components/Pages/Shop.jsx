import React, { useState, useEffect } from "react";


function Shop() {
  const [image, setImage] = useState("setImage");
   
 useEffect(() => {
 fetch("https://randomfox.ca/floof").then((response) =>response.json())
 .then((data) => {
  console.log(data.image);
  setImage(data.image);
  
 })

 },[])

  return (
    <div>
      <h1 className="text-gray-800 text-3xl text-center mt-10">
        <img src={image} alt="" />
      </h1>
    </div>
  );
}

export default Shop