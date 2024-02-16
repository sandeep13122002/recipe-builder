import React from 'react'
import { useEffect,useState } from 'react';
import axios from "axios";
import { useCookies } from 'react-cookie';
import { useGetUserID } from '../hooks/useGetUserID';
const   Home = () => {
   const [recipes,setRecipes]=useState([]);
   const [savedrecipes,setsavedRecipes]=useState([]);
   const userID=useGetUserID();
   const [cookies,_]=useCookies(["access_token"]);
   useEffect(()=>{
      const fetchRecipe= async()=>{
        try{
          const response=await axios.get(
            "http://localhost:3000/recipes")
            setRecipes(response.data);
            
        }catch(err){
        console.log(err);
       };



      }

      const fetchsavedRecipe= async()=>{
        try{
          const response=await axios.get(
            `http://localhost:3000/recipes/savedRecipes/ids/${userID}`)
            setsavedRecipes(response.data.savedRecipes);
            console.log(response.data);
        }catch(err){
        console.log(err);
       };



      }
    if(cookies.access_token) fetchsavedRecipe();
    
      fetchRecipe();


    },[]);




   const saveRecipe=async(recipeID)=>{
    try{
      const response=await axios.put(
        "http://localhost:3000/recipes",
       { recipeID,
        userID,},
         {
           headers:{authorization: cookies.access_token}
        }
        )
       setsavedRecipes(response.data.savedRecipes)
         
    }catch(err){
    console.log(err);
   };

   }



    const isRecipeSaved=(id)=>savedrecipes.includes(id);


  return (
    <div> 
         <h2>Recipes</h2>
           <ul>
                {recipes.map((recipe)=>
                (
                  <li key={recipe._id}>
                  <div>
                    <h2>
                      {recipe.name}
                    </h2>
                    <button onClick={()=>saveRecipe(recipe._id)}
                    disabled={isRecipeSaved(recipe._id)}
                    >Save</button>
                  </div>
                 <div className="instructions">
                        <p>{recipe.instructions}</p>
                 </div>
               <img src={recipe.imageUrl} alt={recipe.name}/>
                   <p>Cooking Time:{recipe.cookingTime}(minutes)</p>
                  </li>
                )
                
                )}

           </ul>



    </div>
  )
}

export default  Home