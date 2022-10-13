import { useState, useEffect } from "react";
import  arregloProductos  from "../baseDatos/baseDatos"
import {ItemList} from "../ItemList/ItemList"


export const ItemListContainer= ()=>{
    const [item, setItem] = useState({});

    const getItem = () =>{
        return new Promise((resolve,reject)=>{
            resolve(arregloProductos[0])
        })
    }


    useEffect(()=>{
        const getProducto = async()=>{
            const producto = await getItem();
            console.log('producto, producto')
            setItem(producto);
        }
    
        getProducto();
    },[])
    
    
    return(
        <div className="item-list-container">
            <p style={{width:"100%", color: "blue"}}>item detail container</p>
            <ItemList item={item}/>
        </div>
    )
}

