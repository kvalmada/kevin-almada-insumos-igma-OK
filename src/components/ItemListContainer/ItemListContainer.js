import { useState, useEffect } from "react";
import  arregloProductos  from "../baseDatos/baseDatos"
import ItemList from "../ItemList/ItemList"


const ItemListContainer =()=> {
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
        <div className="item-list-container">
            <p style={{width:"100%", color: "blue"}}>item detail container</p>
            <ItemList item={item}/>
        </div>
    )
}

    export default ItemListContainer;

