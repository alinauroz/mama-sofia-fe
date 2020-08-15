import React from "react";
import MealSuggestions from "./MealSuggestions";
import Background from "../images/header-background.jpg";

var backgroundImage = {
  width: "100%",
          
  backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url(${Background})`,
  position: "relative",
  backgroundColor: "green",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
};

function Header(props) {
return <header data-testid = 'header' className="masthead text-white text-center" style={ backgroundImage }>

<MealSuggestions
  lang = {props.lang}
/>
    
  </header>
  };

  export default Header;