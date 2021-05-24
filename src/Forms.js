import React,{useState} from "react";
 const ControlInputs = ()=>{
     const [firstName,setFirstName] = useState('');
     const [email,setEmail] = useState('');
     const handleSubmit = (e)=>{
         e.preventDefault();
         console.log(firstName,email);
     }
     return (
         <>
             <article>
                 <form>
                     <div>
                     <label htmlFor="firstName">Name : </label>
                     <input type='text' id="firstName" name="firstName" value={firstName}
                            onChange={(e)=> setFirstName(e.target.value)}/>
                 </div>
                     <div>
                         <label htmlFor="email">Email : </label>
                         <input type="email" id="email" name="email" value={email}
                                onChange={(e)=> setEmail(e.target.value)}/>
                     </div>
                     <button type="submit" onClick={handleSubmit}>add person</button>
                 </form>
             </article>
         </>
     );
 };
 export  default  ControlInputs;