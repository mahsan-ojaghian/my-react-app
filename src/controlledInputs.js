import React,{useState} from "react";
 const ControlInputs = ()=>{
     const [firstName,setFirstName] = useState('');
     const [email,setEmail] = useState('');
     const [people, setPeople] = useState([]);
     const handleSubmit = (e)=>{
         e.preventDefault();
         if(firstName,email){
             const person = {id: new Date().getTime().toString() ,  firstName: firstName , email: email};/*add items to a list*/
             setPeople((people)=>{
                 return [...people,person];   /*merging new person with old person*/
             });
             setFirstName ('');
             setEmail('');  /*empty string for adding new items these should be empty*/
         }else {
             console.log("empty");
         }
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
                 {
                     people.map((person , index)=>{
                         const {id,firstName,email} = person;
                         return <div key={id}>
                             <h4>{firstName}</h4>
                             <p>{email}</p>

                         </div>
                     })
                 }
             </article>
         </>
     );
 };
 export  default  ControlInputs;