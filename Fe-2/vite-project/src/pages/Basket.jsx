import React from 'react'
import { Maincontext } from '../Context/Mainprovider'
import { useContext } from 'react'
function Basket() {
    const {Basket,DeleteBasket,Increase,Decrease,Total} = useContext(Maincontext)
  return (
<>
    <div style={{display:"flex",gap:"30px"}}>
      <h1>Total:{Total()}</h1>
        {Basket.map((x)=><>
            <div style={{border:"1px solid black"}}>
            <img style={{height:"200px"}} src={x.img}/>
                <h1>{x.name}</h1>
                <h4>{x.des}</h4>
                <h5>{x.price}</h5>
                <p>{x.count}</p>
                <button onClick={()=>Decrease(x)}>-</button>
                <button onClick={()=>DeleteBasket(x)}>Remove</button>
                <button onClick={()=>Increase(x)}>+</button>
                </div>
        </>)}
    </div>
</>
  )
}

export default Basket