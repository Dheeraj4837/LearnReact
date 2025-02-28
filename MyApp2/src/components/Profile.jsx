import React, { useState } from 'react'

function Profile() {
    var [l,setl]=useState(false)
  return (
    <div>
        {l && "Welcome CodeHUb"}
        <p>{l?"User":"Guest"}</p>

        <button onClick={()=>{
            {l?setl(false):setl(true)}
        }}>{l?"Logout":"Login"}</button>

    </div>
  )
}

export default Profile