import './ItemList.css';
import  Item from "../Item/Item"
import {Link} from 'react-router-dom'

const ItemList = ({item})=>{

    return(
        <div className="estilos-listado">
        <div style={{width:"100%"}}>item list</div>
        {

        item.map(producto=>(
      <Link key={producto.id} to={`/item/${producto.id}`}>
          <Item item={producto}/>
      </Link>
      ))

      }
    </div>    
    )
  }

  export default ItemList;
