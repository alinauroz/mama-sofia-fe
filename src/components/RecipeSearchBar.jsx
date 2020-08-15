import React from "react";

const dynatext = require("dyna-gettext");

function RecipeSearchBar(props) {
    return <nav className="navbar navbar-expand-lg navbar-light recipe-searchbar pl-10">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="navbar-brand text-white">
    {dynatext.getText("search-tb", {id: "translations", "lang": props.lang || "en"})}
    </div>
  
    <div className="collapse navbar-collapse" id="recipe-navbar">
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item active pl-10" id="all-search">
          <div className="nav-link text-white">
          {dynatext.getText("all", {id: "translations", "lang": props.lang || "en"})}
           <span className="sr-only"></span></div>
        </li>
        <li className="nav-item pl-3" id="breakfast-search">
          <div className="nav-link text-white">
          {dynatext.getText("breakfast", {id: "translations", "lang": props.lang || "en"})}
          </div>
        </li>
        <li className="nav-item pl-3" id="lunch-search">
          <div className="nav-link disabled text-white">
          {dynatext.getText("lunch", {id: "translations", "lang": props.lang || "en"})}
          </div>
        </li>
        <li className="nav-item pl-3" id ="dinner-search">
          <div className="nav-link disabled text-white">
          {dynatext.getText("dinner", {id: "translations", "lang": props.lang || "en"})}
          </div>
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0 pr-5">
        <input className="form-control mr-sm-2" type="text" id="searchInput" aria-label="Search section" name="search-section" valueautocomplete="off" placeholder="Search..."/>
      </form>
    </div>
  </nav>
};

export default RecipeSearchBar;