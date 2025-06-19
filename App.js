import logo from './logo.svg';
import './App.css';


import NavBar from './components/common/NavBar';
import Home from './pages/Home';
import Header from './components/common/Header';
import Recipe from './pages/Recipes';
import Login from './pages/Login';
import About_us from './components/common/about_us';
//url based router 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Recipes from './pages/Recipes';
import RecipeDetails from './components/RecipeDetails';
import Footer from './components/common/Footer';
import Contact from './pages/Contact';
import ContactQuery from './pages/ContactQuery';


function App() {
  return (
  <Router>
    <NavBar />
      <Routes>
       
        <Route path='/' element={<Home />} />
        <Route path='/recipes' element={<Recipes />} />
        <Route path='/contact_us' element={<Contact />} />
        <Route path='/contact_result' element={<ContactQuery />} />
        {<Route path='/login' element={<Login />} /> }

        <Route path='/recipes/:recipeId' element={<RecipeDetails />} />
      </Routes>
  </Router>
  );
}

export default App;
