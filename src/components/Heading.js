import {LOGO_URL} from "../utils/constant.js";
const Heading=()=>(
  <div className="heading">
    <div className="logo-container">
      <img className="logo" src={LOGO_URL}></img>
    </div>
     <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Contact us</li>
        <li>Sign In</li>
      </ul>
     </div>
  </div>
  );
  export default Heading;