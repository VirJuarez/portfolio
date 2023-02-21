import { createPortal } from "react-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Chat (){

    const [question, setQuestion]=useState("")
    const [loading, setLoading]=useState(false)
    const [message, setMessage]=useState([{id:"1", text: "Hola, soy unbot", type:"bot"},{id:"2", text:"Hola soy un user", type:"user"}])


    async function handleSubmit(e){
        e.preventDefault();
        if(loading) return;
        setLoading(true)
        setMessage((message)=>message.concat({id:String(Date.now()),type:"user", text: question}))
        setQuestion("")

        const ejemplos=[{"label": "presentacion", "text": "Hola"}, {"label": "presentacion", "text": "Quien sos?"}, {"label": "laboral", "text": "Cuanta experiencia tenes?"}, {"label": "laboral", "text": "Experiencia laboral"}, {"label": "tecnologias ", "text": "Con que tecnologias trabajas?"}, {"label": "tecnologias ", "text": "React, Javascript, Typescript, Node, SQL"}, {"label": "presentacion", "text": "Donde estudiaste?"}, {"label": "contacto", "text": "Estas buscando trabajo?"}, {"label": "contacto", "text": "Como te contacto?"}, {"label": "contacto", "text": "Por que medio puedo contactarte?"}, {"label": "laboral", "text": "Donde trabajaste?"}, {"label": "tecnologias ", "text": "Next, .NET, Nest, Vue, Angular, Vite, Bootstrap, chakra"}, {"label": "contacto", "text": "Descargar cv"}, {"label": "contacto", "text": "Puedo ver tu cv?"}, {"label": "laboral", "text": "Donde trabajas actualmente?"}, {"label": "contacto", "text": "expectativa salarial"}, {"label": "contacto", "text": "cual es tu rango salarial pretendido?"}, {"label": "tecnologias ", "text": "Qué stack manejas?"}, {"label": "contacto", "text": "redes sociales"}, {"label": "presentacion", "text": "idiomas"}, {"label": "presentacion", "text": "hablas ingles?"}, {"label": "laboral", "text": "que proyectos realizaste?"}, {"label": "laboral", "text": "tus proyectos"}, {"label": "contacto", "text": "tengo una oferta laboral"}, {"label": "contacto", "text": "curriculum"}, {"label": "tecnologias ", "text": "base de datos, frameworks, librerias, leguajes"}]

        const {classifications}=await fetch('https://api.cohere.ai/classify',{
            method: "POST",
            headers:{
                Authorization: `BEARER 0T7mHJ5T1xtBCtn8bKTKmbrLCT30kYMp78cuUR55`,
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                mmodel: 'large',
                inputs: [question],
                examples: ejemplos
            }),
        }).then((res)=>res.json());
        setMessage((message)=>message.concat({id:String(Date.now()),type:"bot", text: classifications[0].prediction}))

        setLoading(false)
    }

    return createPortal(
        <div className="border-solid border-black border-2 w-[300px] p-1">
            <div className="flex flex-col gap-3">
            {message.map(m=>
                <div className={`flex rounded-md max-w-[200px]  px-3 py-1 text-sm ${m.type === "bot"? "bg-teal-400 text-left self-start rounded-bl-none" : "bg-teal-200 text-right self-end rounded-br-none"}`}>
                        {m.text}
                </div>)}
            </div>
            <form>
                <input onChange={setQuestion}></input>
                <button  onClick={(e)=>handleSubmit(e)}>Enviar</button>
            </form>
        </div>,
        document.getElementById("chat")
    )





}
