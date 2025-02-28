import React, {useState} from 'react'

function FormHandling() {
  

    
    // console.log("Hello",e);
    const [username, setUsername] = useState('');      
    const submitHandler =(e)=>{ //Yea jaise he form ko submit karege toh Hello show hoga
        e.preventDefault() //yea page ko reload krne se rokta hain

        console.log(username);

        setUsername('') //yea karne se form sumbit krne par box khai ho jayega

        
    }
    
  return (
    <div>
        <form  onSubmit={
            (e)=>{
                submitHandler(e)
            }
        } >  
            
            <input 
            value={username}
            onChange={(e)=>{
                // console.log(e.target.value);

                //target yea batayega ki kon se object par kaam ho raha hain like isme input
                // value bateyga ki exact value batayega console mein 

                setUsername(e.target.value)
            }}
            className=' px-4 py-3 rounded bg-amber-200 text-xl m-5' 
            type="text" 
            placeholder='Enter Your Name'            
            />
            <button className='px-4 py-3 m-5 text-xl text-white font-semibold bg-emerald-600 rounded'>Submit</button>
        </form>
    </div>
  )
}

export default FormHandling