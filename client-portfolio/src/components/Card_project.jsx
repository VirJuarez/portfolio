import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Card(props) {
    const english = useSelector ((state) => state.english);

    useEffect(() => {
              
    },[english]);
    
return english?(
    <div className=" flex flex-col xl:mx-4 mb-8 xl:h-[550px] max-w-min xl:max-w-none">
    <h6 className="text-center text-amber-400 text-4xl font-bold py-3">{props.name}</h6>
    <h6 className="text-center text-xl text-white pb-5">{props.resumen} - {props.fecha}</h6>
    <div className="grid xl:grid-cols-3 xl:gap-x-4">
        <div className="grid xl:col-span-2">
            <img src={props.imagen} alt="imagen" className="flex justify-center w-[400px] xl:w-[650px] rounded-xl"></img>
            <div className="py-1 my-4 flex justify-around gap-x-2">
            <a href={props.deploy} target="_blank"
            className=" h-fit rounded-full text-center bg-teal-700 border-teal-400 border-solid border-2 px-3 py-1.5 text-xs xl:text-base font-semibold leading-7 text-white shadow-sm hover:bg-amber-400 hover:border-amber-400"
            >Go to {props.name}</a>
            <a href={props.repofront} target="_blank"
            className=" h-fit rounded-full  text-center bg-teal-700 border-teal-400 border-solid border-2 px-3 py-1.5 text-xs xl:text-base font-semibold leading-7 text-white shadow-sm hover:bg-amber-400 hover:border-amber-400"
            >Repository FRONT</a>
            <a href={props.repoback} target="_blank"
            className=" h-fit rounded-full text-center bg-teal-700 border-teal-400 border-solid border-2 px-3 py-1.5 text-xs xl:text-base font-semibold leading-7 text-white shadow-sm hover:bg-amber-400 hover:border-amber-400"
            >Repository BACK</a>
            </div>   
        </div>
        <div>
            <div>
            <p className="text-center rounded-full  bg-white border-teal-400 border-solid border-2 px-6 font-semibold">TECHNOLOGIES</p>
            <ul className="grid grid-cols-3 py-2">
                {props.tecno.map(t=>
                    <li className="text-white text-center">{t}</li>)}
            </ul> 

        <p className="text-center rounded-full  bg-white border-teal-400 border-solid border-2 px-6 font-semibold my-5">OUTSTANDING FEATURES</p>
            <ul >
                {props.descripcion.map(t=>
                    <li className="text-white">{t}</li>)}
            </ul> 
            </div>

        </div>
    </div>
    </div>
):
(
    <div className="flex flex-col xl:mx-4 mb-8 xl:h-[550px] max-w-min xl:max-w-none">
    <h6 className="text-center text-amber-400 text-4xl font-bold py-3">{props.name}</h6>
    <h6 className="text-center text-xl text-white pb-5">{props.resumen} - {props.fecha}</h6>
    <div className="grid xl:grid-cols-3 xl:gap-x-4">
        <div className="grid col-span-2">
            <img src={props.imagen} alt="imagen" className="flex justify-center w-[400px] xl:w-[650px] rounded-xl"></img>
            <div className="py-1 my-4 flex justify-around">
            <a href={props.deploy} target="_blank"
            className=" h-fit rounded-full text-center bg-teal-700 border-teal-400 border-solid border-2 px-3 py-1.5 text-xs xl:text-base font-semibold leading-7 text-white shadow-sm hover:bg-amber-400 hover:border-amber-400"
            >Ir a {props.name}</a>
            <a href={props.repofront} target="_blank"
            className=" h-fit rounded-full text-center bg-teal-700 border-teal-400 border-solid border-2 px-3 py-1.5 text-xs xl:text-base font-semibold leading-7 text-white shadow-sm hover:bg-amber-400 hover:border-amber-400"
            >Repositorio FRONT</a>
            <a href={props.repoback} target="_blank"
            className=" h-fit rounded-full text-center bg-teal-700 border-teal-400 border-solid border-2 px-3 py-1.5 text-xs xl:text-base font-semibold leading-7 text-white shadow-sm hover:bg-amber-400 hover:border-amber-400"
            >Repositorio BACK</a>
            </div>   
        </div>
        <div>
            <div>
            <p className="text-center rounded-full  bg-white border-teal-400 border-solid border-2 px-6 font-semibold">TECNOLOGÍAS</p>
            <ul className="grid grid-cols-3 py-2">
                {props.tecno.map(t=>
                    <li className="text-white text-center">{t}</li>)}
            </ul> 

        <p className="text-center rounded-full  bg-white border-teal-400 border-solid border-2 px-6 font-semibold my-5">FUNCIONALIDADES DESTACADAS</p>
            <ul >
                {props.descripcion.map(t=>
                    <li className="text-white">{t}</li>)}
            </ul> 
            </div>

        </div>
    </div>
    </div>
)
}