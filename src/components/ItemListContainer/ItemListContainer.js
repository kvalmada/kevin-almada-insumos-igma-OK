import './App.css';
import { useEffect, useState } from 'react';
import './ItemListContainer.css';
import { arregloProductos } from "../../baseDatos/basedatos";
import { ItemList } from './components/ItemList/ItemList';
import { useParams } from "react-router-dom";

export const ItemListContainer = ()=>{
    const (categoryId) = useParams();
   // const (categoryName) = useParams();
    console.log(categoryName)
    const [productos, setProductos] = useState([]);
  }

function App() {


const promesa = new Promise((resolve, reject)=>{
  setTimeout(() => {
    resolve(arregloProductos);
  }, 2000);
})
 
useEffect(()=>{
  promesa.then((response)=>{
    if(categoryId){
      //filtro por categoria
    } else {
      //mostrar todos los productos
      setProductos(response)
    }
  })
},[categoryId])
 // useEffect(()=>{
 // promesa.then(resultado=>{
 //   if(CategoryName){
 //     const productsFiltered = resultado.filter(elm=>elm.categoria === categoryName);
 //     setProductos(productsFiltered)
 //   } else {
 //     setProducts(resultado);
 //     }
 // })
 //  },[categoryName])
 
console.log('productos',productos)
return(
  <div className="item-list-container">
    <p>item list container</p>
    <ItemList items={productos}/>
  </div>
)
}