
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function ChatIngles (){

    const container = useRef(null)

    const [open, setOpen]=useState(false);
    const [question, setQuestion]=useState("");
    const [loading, setLoading]=useState(true);
    const [message, setMessage]=useState([{id:"1", text: "Hello, I am a bot created with AI. I can answer you some questions about Virginia.", type:"bot"}, {id:"2", text: "If the answer isn´t what you expected, please, try to paraphrase your question.", type:"bot"}])
    
    const handleChange=(e)=>{
        setQuestion(e.target.value)
        if(question.length>1){setLoading(false)}
        else{setLoading(true)}
    }

    const rtas={
        presentacion:(<p> Hello! mi name is Virginia Juarez, I am a Full Stack Developer graduated from Henry´s bootcamp. <Link className="underline" to={`/about`}>HERE</Link> you will find more information about me.</p>), 
        contacto:(<p>I am currently looking for a new job to continue growing in the IT world. Yo can download my CV <a className="underline" href="./CV_JUAREZ_MV_ENGLISH_2024.pdf" download="CV_JUAREZ_MV_ENGLISH.pdf">HERE</a>. Also, you can contact me directly by <a className="underline" href="mailto:virginia.juarez1996@gmail.com">Mail</a>, <a className="underline" href="https://walink.co/855b8f">WhatApp</a> or <a className="underline" href="https://www.linkedin.com/in/maria-virginia-juarez/">LinkedIn</a></p>),
        tecnologia:(<p>I am most confortable with the PERN stack, but of course, I am open to learn new skills. You can see all the technologies I have worked with <Link className="underline" to={`/skills`}>HERE</Link></p>), 
        laboral:(<p>I have worked in support, infrastructure, and development. My most recent work experience was as a freelance developer. You can see some of my projects <Link className="underline" to={`/projects`}>HERE</Link> </p>),
        soft:(<p> I am a reliable, curious person with logical thinking. I like to work in a collaborative way</p>), 
        pai:(<p>I am from Argentine. I live in Buenos Aires</p>), 
        ingles:(<p>I speak spanish (mother tongue) and english (C1 level). I would love to learn more languages. </p>),  }

    async function handleSubmit(e){
        e.preventDefault();
        if(loading) return;
        setLoading(true)
        setMessage((message)=>message.concat({id:String(Date.now()),type:"user", text: question}))
        setQuestion("")

        const ejemplos = [{"label": "presentacion", "text": "hola"}, {"label": "presentacion", "text": "Quien sos?"}, {"label": "laboral", "text": "Cuanta experiencia tenes?"}, {"label": "laboral", "text": "Experiencia laboral"}, {"label": "tecnologia", "text": "Con que tecnologias trabajas?"}, {"label": "tecnologia", "text": "React, Javascript, Typescript, Node, SQL"}, {"label": "presentacion", "text": "Donde estudiaste?"}, {"label": "contacto", "text": "Estas buscando trabajo?"}, {"label": "contacto", "text": "Como te contacto?"}, {"label": "contacto", "text": "Por que medio puedo contactarte?"}, {"label": "laboral", "text": "Donde trabajaste?"}, {"label": "contacto", "text": "Descargar cv"}, {"label": "contacto", "text": "Puedo ver tu cv?"}, {"label": "laboral", "text": "Donde trabajas actualmente?"}, {"label": "contacto", "text": "expectativa salarial"}, {"label": "contacto", "text": "cual es tu rango salarial pretendido?"}, {"label": "tecnologia", "text": "Qué stack manejas?"}, {"label": "contacto", "text": "redes sociales"}, {"label": "ingles", "text": "idiomas"}, {"label": "ingles", "text": "hablas ingles?"}, {"label": "laboral", "text": "que proyectos realizaste?"}, {"label": "laboral", "text": "tus proyectos"}, {"label": "contacto", "text": "tengo una oferta laboral"}, {"label": "contacto", "text": "curriculum"}, {"label": "tecnologia", "text": "base de datos, frameworks, librerias, lenguajes"}, {"label": "pai", "text": "de que nacionalidad eres?"}, {"label": "pai", "text": "en donde vives?"}, {"label": "pai", "text": "en pais vives?"}, {"label": "pai", "text": "residencia?"}, {"label": "presentacion", "text": "qué titulo tenes?"}, {"label": "soft", "text": "cuales son tus habilidades blandas?"}, {"label": "soft", "text": "soft skills"}]

        const {classifications}=await fetch('https://api.cohere.ai/classify',{
            method: "POST",
            headers:{
                Authorization: `BEARER ${process.env.REACT_APP_APIKEY}`,
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                mmodel: 'large',
                inputs: [question],
                examples: ejemplos
            }),
        }).then((res)=>res.json());
        setMessage((message)=>message.concat({id:String(Date.now()),type:"bot", text: rtas[classifications[0].prediction]}))
        
    }

    useEffect(() => {
            container.current?.scrollTo(0, container.current.scrollHeight)
    },[message, open, question]);

    return open? (
        <div className="border-solid border-teal-900 border-2 rounded-md w-[300px] xl:w-[350px] p-1 bg-neutral-200 lg:mb-3 lg:mr-3 mb-1 mr-1">
            <div className="flex justify-end">
            <button  onClick={()=>setOpen(false)} className="rounded-full flex justify-center items-center bg-teal-900 text-white w-5 h-5 ">x</button>
            </div>

            <div className="flex flex-col gap-3 mb-2 h-[250px] overflow-y-auto " ref={container}>
            {message.map(m=>
                <div className={`flex rounded-xl max-w-[250px] mx-2 px-3 py-1 text-sm ${m.type === "bot"? "bg-teal-300 bg-opacity-50 text-left self-start rounded-tl-none" : "bg-teal-600 text-white  text-right self-end rounded-br-none"}`}>
                        {m.text}
                </div>)}
            </div>
            <form className="m-auto flex justify-around items-center">
                <input placeholder="Ask a question" value={question} onChange={handleChange} className="border-2 rounded-full border-slate-400 border-solid bg-slate-300 p-2 w-5/6"></input>
                <button disabled={loading} className={`border-solid border-1 border-teal-900 py-2 px-2 rounded-full text-white ${loading ? "bg-amber-400" : "bg-teal-500"}`} onClick={(e)=>handleSubmit(e)}><img className="h-7  w-7"src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADkElEQVR4nO2ZXYhNURTHf3eGwZgQYeQjkikfDfKADC+DPJgyD1PyQEmSaJqSlEJReFCkRpNiUlIySsrXhGKESAo1D4zI55CPMGIw2rVurW77zj1n7j337nPv+dWue8/e+5zz3/vstddeCyIiIiIiIiLyiIFAJRCjgOgHLAOagS9AD7CHPKcIWAg0Ap0iWpcj5CnTgV3AM4toXZaQR0wT0e0pRMdLpyyLUDMeqAfaLAL/yvVtwCNL/WFCyhgRfRv4ZxF2F2gAxgKlwHVV91v9riJEDANWA+eBbovoJ/L5V6g+RvxV1eYycE9+vwzDFjgIqAFOA78sol8Ah4A5lr428VNkWZj/+3GUASL6BPDNIvqViK7qZQZt4o3js0Vdm41DFIugJuWg6PJJBqTGg9VOJt5wX66ZXcIJB6VKZvOdRXSXfPpGdInHe/YmfrK6bmyFkw7KTzFyxtgN9nnf3sQbdqg64y8446D8kb16PTCkj/dPJd7wWOoekCUmeHBQTP3oNJ/jRfxMVb+VABkhM9mWxEGJ79WTMvQ8L+INe6XevNNEMkwJsE5e5I9FtHFBt4sRyiRG/DX1nItJxJutskPa3CIAmiyin8o5e0YQD/Qh3jBPtdscxMvsThD/AaglOPyINxxUxrY8iBeKAXUy63og7gCLMvwsr2te+xqvpW0rAdNfDOD7hIFozdBS8CveUK3aryVLlIml71IP7xZbUZ5F8Yaj0t4cpIaTZcaJaL0zfAf2+XR4+irefJEfpc85cshU8ekTDWV9mgebVCxX/VbiANXqNBYv7WJAYxkWbzgp/X7IsnSCmMcdI13xpSqWcApHgx4Nao3G3dQzwCyf+7yNOtV/BQ5TZtkxetKY+Thnpf9nGexQhLabVbzOlJt9FD9U4grmHscIGZXAW3n5jj7O3ho1iEsJIRuUAGMn/HIp7FmfYokbxIOhfjy4kSpnENqsD3KajH8FxnP0ykbVbwEhp00FSk14zQs3wpT1ScVcFVY77nEncT7r45cWFURNlclxNuuTDhUqm3shRVunsj6ZpFHN7OIkbZzJ+gTBKOCriHsoYa5Ecpr1yQY7lcBVlvqsZ31ycWh6IyKfJ7jIWcv6uOoiB5r1cd1Fjqmsj3Gc8p7aBBd5vvq/iQKhTQR3SQQp0KyP6y5yj5QrFBgtCQOQtayPiy5yTrI+LnBABsDEEguSIsk62VzjiIiIiIiICDLGfzNtq74XrTteAAAAAElFTkSuQmCC"></img></button>
            </form>
        </div>
        
    ):
    (
<button  onClick={()=>setOpen(true)} className=" animate__animated animate__shakeY animate__slower animate__repeat-1 hover: rounded-full flex justify-center items-center bg-teal-900 text-white w-20 h-20 text-4xl mb-3 mr-3 border-solid border-teal-50 border-2 ">
    <img src="bot.png" alt="bot" className="h-14"></img>
</button>)





}