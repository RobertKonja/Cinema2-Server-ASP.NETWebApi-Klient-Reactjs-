
import React from "react";



export default  function ChangeMovie ({object,change,submitMovie,button ,dropdown,select,directorId}){

          console.log("propertise object ",object);
         
         
           return(     

       <div>    
        <div  className = "container"> 
        <form action="" method="post"   onSubmit={submitMovie}   >
           <div className="form-group">
              <p> NAME </p>
              <input  className="form-control"    placeholder={object[0] != null ? object[0].Name : ""} type="text" id="Name"  name="Name"  onChange={ change }  /> 
           </div> 
           
           <div className="form-group">
              <label > GENRE </label>
              <input   className="form-control" type="text" id="Genre"  name="Genre"  placeholder={object[0] != null ? object[0].Genre : ""} onChange={ change } /> 
           </div>
           <div className="form-group">
              <label >YEAR</label>
           <input  className="form-control"  type="number" id="Year"  name="Year"  placeholder={object[0] != null ? object[0].Year : null}  onChange={ change }/>
           </div>
           <div className="form-group">
              <label > DIRECTOR  </label>
           
           <span    className="form-control"   > 
             
            < select  name=''  value={directorId}  onChange={select} >
                  { dropdown.map((m) =>( 

                  <option  key={m.Id}  value={m.Id}>{m.Name}</option>
                    
                  ))
                 }
                  
          </select>
          </span>  
           </div>
           <div  className="form-group">    
               <button   className="btn  btn-warning"  type = "submit"  > {button}  </button>
           </div>
                
        </form>
           </div>
           </div>



       );

   


   }

        


   









