import {CDN_URL} from "../utils/constant.js";

const Restcard = (props) =>
    {
      const {resData} =props;
  const{
    cloudinaryImageId,
    name,
    cuisines,
    costForTwo,
    avgRatingString,
    locality

  } = resData?.info;
      return(
       <div className="rest-card">
         <img className="img"
           src={CDN_URL+ cloudinaryImageId}></img>
           <h2>{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRatingString}* Rating</h4>
      <h4>{locality}</h4>
     </div>
      );
    };         
            
    export default Restcard;
