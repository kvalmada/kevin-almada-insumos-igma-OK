import { useState, useEffect } from "react";
import './ItemDetailContainer.css'
import  arregloProductos  from "../baseDatos/baseDatos"
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer =()=> {
    const [item, setItem] = useState([]);

    const getItem = ()=> {
        return new Promise((res) => {
            setTimeout(() => {
                res(arregloProductos);
            }, 2000);
        });
    }


useEffect(()=>{
    const getProducto = async()=>{
        const producto = await getItem();
        console.log('producto, producto')
        setItem(producto);
    }

    getProducto();
},[])

console.log('item:', item)
return(
    <div className="item-detail-container">
        <p style={{width:"100%", color: "blue"}}>item detail container</p>
        <ItemDetail item={item}/>
    </div>
)


}
