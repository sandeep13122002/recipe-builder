import "./App.css"
import {BrowserRouter as Router,Routes,Route}from "react-router-dom"
import Home from "./pages/home";
import { Auth } from "./pages/auth";
import Createrecipe from "./pages/create-recipe";
import Savedrecipe from "./pages/saved-recipe";
import { Navbar } from "./components/navbar";


function App() {
  return (
    <div className="App">
       <Router>
        <Navbar/>
       <Routes>
           <Route path="/" element={<Home/>}/>
            <Route path="/auth" element={<Auth/>}/>
            <Route path="/create-recipe" element={<Createrecipe/>}/>
            <Route path="/saved-recipes" element={<Savedrecipe/>}/>
       </Routes>



       </Router>
    </div>
  );
}

export default App;
