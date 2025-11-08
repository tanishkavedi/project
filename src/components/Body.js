import Restcard from "../components/Restcard.js";
import reslist from "../utils/mockdata.js";
const Body = () =>{
    return(
      <div className="body">
        <div className="btn">
        <div className="search">
          <button className="search-btn"><h4>   🔎 Search For Restaurant and Food     </h4></button></div>

         
          <div className="filter"><button className="filter-btn"><h4>⭐   Top Rated Restaurant and Food</h4></button>
          
          </div>
            <div className="cart"><button className="cart-btn"><h4> 🛒  Cart</h4></button>
          
          </div>
          </div>
          
        <div className="rest-container">
            {
              reslist.map((restaurant) => (
            <Restcard key={restaurant.info.id} resData={restaurant}></Restcard>
              ))
            }
          
            
          
        </div>

      </div>



    );
  };

export default Body;