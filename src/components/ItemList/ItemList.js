import './ItemList.css';
import  Item from "../Item/Item"
import {Link} from 'react-router-dom'

const ItemList = ({items})=>{

    return(
        <div className="estilos-listado">
        <div style={{width:"100%"}}>item list</div>
        {

      items.map(producto=>(
      <link key={producto.id} to={`/item/${producto.id}`}>
          <Item item={producto}/>
      </link>
      ))

      }
    </div>    
    )
  }

  export default ItemList;
