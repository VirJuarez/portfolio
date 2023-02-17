import React from "react";
import NavBar from "./NavBar"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Projects() {
    const english = useSelector ((state) => state.english);

  useEffect(() => {
            
  },[english]);
    
    return(
        <div class="bg-[url('/public/bg-portfolio.png')] lg:h-screen h-full w-full bg-cover bg-center">
            
            <NavBar />
            
                    <div className=" border-teal-300 border-solid border-2 backdrop-blur px-6 lg:px-8 mx-4 md:mx-40 py-5 md:py-15  my-1 lg:my-0  grid content-center place-content-center">
                        
                        
                          
                        
    
                        
    
                        
    
    
    
                      
    
                    </div> 
               
           
        </div>)
}