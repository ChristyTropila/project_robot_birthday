import React from "react"



const Card = ({name, job, username}) => {
    return(
     <div className="tc bg-light-green dib br3 pa3 ma4 grow bw2 shadow-5">
         <img src={`https://robohash.org/${username}`} alt="robot"/>
         <div className="card-div">
            <h1>{name}</h1>
            <h3>Job Title: {job}</h3>
         </div>
     </div>
    );
}





export default Card