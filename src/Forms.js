import React,{useState,useEffect} from "react";
 const ControlInputs = ()=>{
     const [firstName,setFirstName] = useState('');
     const [email,setEmail] = useState('');
     const handleSubmit = (e)=>{
         e.preventDefault();
     }
     return (
         <>
             <article>
                 <form>
                     <div>
                     <label htmlFor="firstName">Name : </label>
                     <input type='text' id="firstName" name="firstName" value={firstName}/>
                 </div>
                     <div>
                         <label htmlFor="email">Email : </label>
                         <input type="email" id="email" name="email" value={email}
                         onChange={()=> setFirstName()}/>
                     </div>
                     <button type="submit" onClick={handleSubmit}>add person</button>
                 </form>
             </article>
         </>
     );
 };
 export  default  ControlInputs;