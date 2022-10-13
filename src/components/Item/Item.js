import './Item.css';
import {Link} from "react-router-dom";

export const Item = ({item}) => {
    return(
    <div className="tarjeta-producto">
        <h4>{item.title}</h4>
        <p>$ (item.price)</p>
            <button className='boton-ver'>Ver detalle</button>
    
        </div>
        )
}