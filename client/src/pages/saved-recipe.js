import React from 'react'
import { useEffect,useState } from 'react';
import axios from "axios";
import { useGetUserID } from '../hooks/useGetUserID';

const   Savedrecipe = () => {
   const [savedrecipes,setsavedRecipes]=useState([]);
   
   const userID=useGetUserID();
   useEffect(()=>{
      



      

      const fetchsavedRecipe= async()=>{
        try{
          const response=await axios.get(
            `http://localhost:3000/recipes/savedRecipes/${userID}`)
            setsavedRecipes(response.data.savedRecipes);
            console.log(response.data);
        }catch(err){
        console.log(err);
       };



      }
      fetchsavedRecipe();
    


    },[]);







    


  return (
    <div> 
         <h2>Saved Recipes</h2>
           <ul>
                {savedrecipes.map((recipe)=>
                (
                  <li key={recipe._id}>
                  <div>
                    <h2>
                      {recipe.name}
                    </h2>
                   
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

export default  Savedrecipe