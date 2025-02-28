import React, { useState } from "react";
import axios from 'axios'
import { useEffect } from "react";

const Apicall = () => {

  const [data, setData] = useState([])

  const getData = async ()=>{
  const response = await axios.get('https://picsum.photos/v2/list')
  /* axios.get() ka kaam yea hain ki api ke under ka data
  ko lane ka kaam karegi */

  /* const data =response.data
     console.log(data);
  
     console.log(response); */

     setData(response.data)
    //  console.log(data[0].download_url); check karne ke liye 
    console.log(data); 
  }

  /* useeffect ka use hum isliye kiye taki api ko direct chala 
  sake bina button ke click par isko chlane ke liye button tag 
  ko hatana hoga.
  * useEffect ka use karke hum bar bar chala skate hain functioon ko
  */
  // useEffect(() => {
  //   getData()
  // }, [])
  

  return (
    <div className="p-10">
      <button onClick={getData}
        className="bg-emerald-800 text-white text-2xl font-semibold px-6 py-3 rounded 
        active:scale-90">
        Get Data
      </button>
      <div className="p-5 bg-gray-800">
        {data.map(function(elem,idx){
          return <div key={idx} className="bg-gray-200 text-white flex items-center justify-between w-full px-7 py-6 rounded mb-3">
            <img className="h-40" src={elem.download_url} alt="" />
            <h1 className="text-black">{elem.author}</h1>
            

          </div>
        })}
      </div>
    </div>
  );
};

export default Apicall;
