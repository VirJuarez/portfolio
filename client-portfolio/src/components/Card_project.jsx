

export default function Card(props) {
return(
    <div>
    <h6>{props.name}</h6>
    <div className="grid grid-cols-2">
        <div className="grid">
            <img src={props.imagen} alt="imagen"></img>
            <p>Tecnologías:</p>
            <ul>
                {props.tecno.map(t=>
                    <li>{t}</li>)}
            </ul>    
        </div>
        <div>
        <p>Descripción:</p>
            <ul>
                {props.descripcion.map(t=>
                    <li>{t}</li>)}
            </ul> 
    
        <a href={props.deploy}>IR</a>
        </div>
    </div>
    </div>
)
}