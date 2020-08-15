import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import RecipeList from './components/RecipeList';
import LoginSection from "./components/LoginSection";
import SingleRecipe from './components/SingleRecipe';
import RecipeEdit from './components/RecipeEdit';
import ApiDocumentation from './components/ApiDocumentation';
import MissionPage from './components/MissionPage';
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom';

const dynatext = require('dyna-gettext');
const translations = require( './constants/translation.json');
dynatext.loadText(translations, "translations");

const lang = localStorage.getItem("lang") || "en";

function Home(){
    return <div className="App">
    <Navbar
      lang = {lang}
    />
    <Header
      lang = {lang}
    />
    <RecipeList
      lang = {lang}
    />
  </div>
 };

 function Login() {
   return <div className="App"> <Navbar lang = {lang}/><LoginSection lang={lang}/> </div>
 };

 function Signup() {
    return <div className="App"> <Navbar lang = {lang}/> <h1> Sign up page</h1> </div>
 };

 function Profile() {
  return <div className="App"> <Navbar lang = {lang}/> <h1> Profile page</h1> </div>
};

function Breakfast() {
  return <div className="App"> <Navbar lang = {lang}/> <h1>Breakfast</h1> </div>
}

function Lunch() {
  return <div className="App"> <Navbar lang = {lang} /> <h1>Lunch</h1> </div>
}

function Api() {
  return <div className="App"> <Navbar lang = {lang}/> <ApiDocumentation/> </div>
}

function Dinner() {
  return <div className="App"> <Navbar lang = {lang} /> <h1>Dinner</h1> </div>
}

function Submit() {
  return <div className="App"> <Navbar lang = {lang}/><RecipeEdit/></div>
}

function Mission() {
  return <div className="App"> <Navbar lang = {lang}/> <MissionPage/> </div>
}

function Single() {
    let{id} = useParams();
  return <div className="App"> <Navbar lang = {lang}/> <SingleRecipe _id={id} lang = {lang}/> </div>
}

 
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/signup" exact component={Signup}/>
        <Route path="/profile" exact component={Profile}/>
        <Route path="/breakfast" exact component={Breakfast}/>
        <Route path="/lunch" exact component={Lunch}/>
        <Route path="/dinner" exact component={Dinner}/>
        <Route path="/recipes" exact component={Home}/>
        <Route path="/submit" exact component={Submit}/>
        <Route path="/mission" exact component={Mission}/>
        <Route path="/api" exact component={Api}/>

        <Route path="/recipe-details/:id" exact component={Single}/>
        <Route path="/recipe-edit-details/:id" exact component={Single}/>

      </Switch>
    </Router>

  );
}

export default App;
