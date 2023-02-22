import React from "react";
import NavBar from "./NavBar"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card_project";
import Chat from "./Chat";
import ChatIngles from "./ChatIngles";


function classNames(...classes) {
  return classes.filter(Boolean)
}

export default function Projects() {

    const [n, setN] = useState(0);
    const english = useSelector ((state) => state.english);

    useEffect(() => {
              
    },[english]);

    let proyectos = [
      {name:"CAMPY", fecha:"Enero 2023", resumen:"Página de reserva para campings", imagen:"/HOME-CAMPY.png", tecno:["Typesript", "React", "Redux", "Material UI", "Node.js", "Express", "Sequelize", "MySQL"], 
      descripcion:["📤 Conexión con Cloudinary", 
      "💰 Pasarela de pagos",
      "🔒 Autenticación",
      "📂 Filtros combinados complejos y mapa",
      "📧 Notificaciones por mail",
      "🤖 Bot de asistencia",
      "📚 Diferentes dashboards de usuarios",
      "📊 Sección de estadísticas para el administrador",
      "📱 Diseño responsive"], deploy:"https://campy-frontend.vercel.app/", repofront:"https://github.com/VirJuarez/Campy-frontend", repoback:"https://github.com/VirJuarez/Campy-backend"},
      {name:"FOODAPP",fecha:"Noviembre 2022", resumen:"Página de recetas para todo tipo de dietas", imagen:"/HOME-FOODAPP.png", tecno:["Javascript", "React", "Redux", "CSS plano", "Node.js", "Express", "Sequelize", "PostgreSQL"], 
      descripcion:["🛬 Página de inicio",
      "⏳ Loading", 
      "🔍 Buscador de recetas", 
      "📂 Filtros y ordenamientos combinados", 
      "📖 Paginado",
      "📄 Detale de cada receta",
      "📋 Formulario controlado para crear recetas"],
       deploy:"https://letscook-pi.vercel.app/",repofront:"https://github.com/VirJuarez/PI-frontend", repoback:"https://github.com/VirJuarez/PI-backend"}
    ]

    let projects = [
      {name:"CAMPY", fecha:"January 2023", resumen:"Página de reserva para campings", imagen:"/HOME-CAMPY.png", tecno:["Typesript", "React", "Redux", "Material UI", "Node.js", "Express", "Sequelize", "MySQL"], 
      descripcion:["📤 Connected to Cloudinary", 
      "💰 Payment gateway",
      "🔒 Authentication",
      "📂 Complex combined filters and map",
      "📧 Mail notifications",
      "🤖 Bot assistant ",
      "📚 Different dashboards for users",
      "📊 Statistic section for the administrator",
      "📱 Responsive design"], deploy:"https://campy-frontend.vercel.app/", repofront:"https://github.com/VirJuarez/Campy-frontend", repoback:"https://github.com/VirJuarez/Campy-backend"},
      {name:"FOODAPP",fecha:"November 2022", resumen:"Página de recetas para todo tipo de dietas", imagen:"/HOME-FOODAPP.png", tecno:["Javascript", "React", "Redux", "plain CSS", "Node.js", "Express", "Sequelize", "PostgreSQL"], 
      descripcion:["🛬 Landing Page",
      "⏳ Loading", 
      "🔍 Search bar for recipes", 
      "📂 Combined filters and ordering", 
      "📖 Paginate",
      "📄 Details of each recipe",
      "📋 Creation form"],
       deploy:"https://letscook-pi.vercel.app/",repofront:"https://github.com/VirJuarez/PI-frontend", repoback:"https://github.com/VirJuarez/PI-backend"}
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
            <div className=" border-teal-300 border-solid border-2 backdrop-blur px-6 lg:px-8 mx-4 md:mx-48 py-5 md:py-15  my-1 lg:my-0  grid content-center place-content-center">

      


        <div className="flex flex-row max-w-min xl:max-w-none" >
          <div className="flex xl:items-center items-start pt-4 xl:pt-0">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={classNames(
              n !== 0 ? " h-7 w-7 text-white rounded-full cursor-pointer " : "  h-7 w-7 text-slate-400 opacity-30 rounded-full cursor-pointer")}
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
          </div>
          
          {english? <Card name={projects[n].name} fecha={projects[n].fecha} resumen={projects[n].resumen} repofront={projects[n].repofront} repoback={projects[n].repoback} imagen={projects[n].imagen} deploy={projects[n].deploy} tecno={projects[n].tecno} descripcion={projects[n].descripcion}></Card>
          :<Card name={proyectos[n].name} fecha={proyectos[n].fecha} resumen={proyectos[n].resumen} repofront={proyectos[n].repofront} repoback={proyectos[n].repoback} imagen={proyectos[n].imagen} deploy={proyectos[n].deploy} tecno={proyectos[n].tecno} descripcion={proyectos[n].descripcion}></Card>
          }
          <div className="flex xl:items-center items-start pt-4 xl:pt-0" >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={classNames(
              n !== proyectos.length-1 ? "h-7 w-7 text-white rounded-full cursor-pointer" : " h-7 w-7 text-slate-400 opacity-30 rounded-full cursor-pointer")}

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
        </div>

        <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
          
        <button type="button" className={classNames(n === 0 ? "w-3 h-3 rounded-full bg-white" : "w-3 h-3 rounded-full bg-slate-400")} onClick={()=>boton(0)}></button>
        <button type="button" className={classNames(n === 1 ? "w-3 h-3 rounded-full bg-white" : "w-3 h-3 rounded-full bg-slate-400")} onClick={()=>boton(1)}></button>
        </div>

      </div>
      {english? <div className="fixed bottom-0 right-0"><ChatIngles/></div>:<div className="fixed bottom-0 right-0"><Chat /></div>}
        </div>)
}