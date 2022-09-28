import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

export const CartWidget = ()=>{
  return(
    <div>
        <FontAwesomeIcon icon={faCoffee}/>
        <span></span>
    </div>
  )
  }