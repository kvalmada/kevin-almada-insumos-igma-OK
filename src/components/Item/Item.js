import './Item.css';

export const item = ({item}) => {
    return
    <div className="tarjeta-producto">
        <h4>{item.title}</h4>
        <p>$(item.price)</p>
        <button className='boton-ver'>Ver detalle</button>
        </div>
}