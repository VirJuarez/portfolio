import React from "react";
import NavBar from "./NavBar"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


function classNames(...classes) {
  return classes.filter(Boolean)
}

export default function Projects() {
    const english = useSelector ((state) => state.english);
    const [currentImage, setCurrentImage] = useState(0);
    let images = [
      { id: 1, image: "https://www.nationalgeographic.com.es/medio/2018/02/27/playa-de-isuntza-lekeitio__1280x720.jpg" },
      { id: 2, image: "https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
      
    ];

   const boton=(n)=>{
    setCurrentImage(n)
   }


  useEffect(() => {
            
  },[english, currentImage]);
    
    return(
        <div class="bg-[url('/public/bg-portfolio.png')] lg:h-screen h-full w-full bg-cover bg-center">
           <div className="flex justify-end xl:justify-start ">
      <img src="/VJ_logo2.svg" alt="img" className="xl:w-40 fixed xl:mt-5 xl:ml-5 w-10 mr-3 xl:mr-0 mt-3"/> 
    </div>
            
            <NavBar />
            <div className=" border-teal-300 border-solid border-2 backdrop-blur px-6 lg:px-8 mx-4 md:mx-48 py-5 md:py-15  my-1 lg:my-0  min-w-fit">
            <div >
      <div
        className="h-96 bg-center bg-cover bg-no-repeat flex flex-col justify-center"
        
      > <div>
        <h1>CAMPY</h1>
        <img src={images[currentImage].image} className="w-96"></img>
        </div>


        <div className="  mx-5 ">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={classNames(
              currentImage !== 0 ? " h-7 w-7 text-white rounded-full cursor-pointer " : "  h-7 w-7 text-slate-700 opacity-30 rounded-full cursor-pointer")}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() =>
              currentImage !== 0 &&
              images.length > 0 &&
              setCurrentImage(currentImage - 1)
            }
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={classNames(
              currentImage !== images.length-1 ? "h-7 w-7 text-white rounded-full cursor-pointer" : " h-7 w-7 text-slate-700 opacity-30 rounded-full cursor-pointer")}

            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() =>
              currentImage < images.length - 1 &&
              setCurrentImage(currentImage + 1)
            }
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-10 left-1/2">
          
        <button type="button" className={classNames(currentImage === 0 ? "w-3 h-3 rounded-full bg-white" : "w-3 h-3 rounded-full bg-slate-600")} onClick={()=>boton(0)}></button>
        <button type="button" className={classNames(currentImage === 1 ? "w-3 h-3 rounded-full bg-white" : "w-3 h-3 rounded-full bg-slate-600")} onClick={()=>boton(1)}></button>
        </div>

      </div>
    </div>
    
</div>

        </div>)
}