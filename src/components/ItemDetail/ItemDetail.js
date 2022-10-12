import './ItemDetail.css';

export const ItemDetail = ({item})=>{
    return(
        <div className='detail-container'>
          <p style={{width:"100%"}}>item detail</p>
    <div className='img-container'>
</div>
<div className='img-container'>
    <h4>(item.title)</h4>
    <h5>$ {item.price}</h5>
</div>