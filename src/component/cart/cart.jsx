import {useLocation} from 'react-router-dom';

const Cart = () => {
  const location = useLocation();

  console.log(location.state);
  return (
        
    <div className="">
      <h2>Items Added</h2>
      { location.state == 0 ? ( <div> <p>Cart is empty</p></div>) :
       (
        <div className="main">
  
        { location.state.map((d) => { return (   

         <ul className="cards-wrapper" key={d.id}>
            
            <li className="cards" >
            <div className="img-container">
            <img src={d.image} alt="" />
            </div>
            <div className="pro-info">
            <h4 className='pro-title'>{d.title}</h4>
            <p className='price'>${d.price}</p>
            <div className="rating">
             <p className="rating-icon"></p>
             <p className='rate-count'>{d.rating.rate}</p> 
            </div>
            
            <p className='single-line'> Rating: {d.rating.count} </p>
            </div>
            </li>
        </ul>)})}  
      </div>
        )}

    </div>
    
      
  )
}

export default Cart;