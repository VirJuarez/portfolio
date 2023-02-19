import React from "react";
import NavBar from "./NavBar"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card_project";


function classNames(...classes) {
  return classes.filter(Boolean)
}

export default function Projects() {
    const english = useSelector ((state) => state.english);
    const [n, setN] = useState(0);
    let images = [
      { id: 1, image: "https://www.nationalgeographic.com.es/medio/2018/02/27/playa-de-isuntza-lekeitio__1280x720.jpg" },
      { id: 2, image: "https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
      
    ];

    let proyectos = [
      {name:"Campy", imagen:"https://www.nationalgeographic.com.es/medio/2018/02/27/playa-de-isuntza-lekeitio__1280x720.jpg", tecno:["Typesript", "React", "Node"], descripcion:["Es responsive", "Tiene blog", "Tiene bot", "Tiene distintos dasboards"], deploy:"https://www.linkedin.com/in/maria-virginia-juarez/"},
      {name:"Campyyy", imagen:"https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", tecno:["Typesript", "React", "Node"], descripcion:["Es responsive", "Tiene blog", "Tiene bot", "Tiene distintos dasboards"], deploy:"https://www.linkedin.com/in/maria-virginia-juarez/"}
    ]

   const boton=(n)=>{
    setN(n)
   }


  useEffect(() => {  
  },[english, n]);
    
    return(
        <div class="bg-[url('/public/bg-portfolio.png')] lg:h-screen h-full w-full bg-cover bg-center">
           <div className="flex justify-end xl:justify-start ">
      <img src="/VJ_logo2.svg" alt="img" className="xl:w-40 fixed xl:mt-5 xl:ml-5 w-10 mr-3 xl:mr-0 mt-3"/> 
    </div>
            
            <NavBar />
            <div className=" border-teal-300 border-solid border-2 backdrop-blur px-6 lg:px-8 mx-4 md:mx-48 py-5 md:py-15  my-1 lg:my-0  min-w-fit">

      


        <div className="  mx-5 ">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={classNames(
              n !== 0 ? " h-7 w-7 text-white rounded-full cursor-pointer " : "  h-7 w-7 text-slate-700 opacity-30 rounded-full cursor-pointer")}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() =>
              n !== 0 &&
              proyectos.length > 0 &&
              setN(n - 1)
            }
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
            />
          </svg>
          
          <Card name={proyectos[n].name} imagen={proyectos[n].imagen} deploy={proyectos[n].deploy} tecno={proyectos[n].tecno} descripcion={proyectos[n].descripcion}></Card>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={classNames(
              n !== images.length-1 ? "h-7 w-7 text-white rounded-full cursor-pointer" : " h-7 w-7 text-slate-700 opacity-30 rounded-full cursor-pointer")}

            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() =>
              n < proyectos.length - 1 &&
              setN(n + 1)
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
          
        <button type="button" className={classNames(n === 0 ? "w-3 h-3 rounded-full bg-white" : "w-3 h-3 rounded-full bg-slate-600")} onClick={()=>boton(0)}></button>
        <button type="button" className={classNames(n === 1 ? "w-3 h-3 rounded-full bg-white" : "w-3 h-3 rounded-full bg-slate-600")} onClick={()=>boton(1)}></button>
        </div>

      </div>

        </div>)
}