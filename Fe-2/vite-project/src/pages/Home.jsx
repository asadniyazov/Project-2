import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Maincontext } from '../Context/Mainprovider'
function Home() {
    const {AddBasket} = useContext(Maincontext)
    const [Search, setSearch] = useState('')
    const [Product, setProduct] = useState([])
    useEffect(() => {
     GetProduct()
    }, [])
    
 async function GetProduct() {
    const res= await fetch('http://localhost:3000/mehsul')
    const data=await res.json()
    setProduct(data)
}
function Sorted() {
    return setProduct([...Product].sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)))
}
function PriceSorted(){
    return setProduct([...Product].sort((a,b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0)))
}
  return (
    <>
    <input placeholder='Search' onChange={(e)=>setSearch(e.target.value)} value={Search} />
  <button onClick={()=>Sorted()}>A-z</button>
  <button onClick={()=>PriceSorted()}>Price</button>
    <div style={{display:"flex",gap:"30px"}}>
        {Product.filter((x)=>x.name.toLowerCase().includes(Search.toLowerCase()))
        .map((x)=><>
            <div style={{border:"1px solid black"}}>
            <img style={{height:"200px"}} src={x.img}/>
                <h1>{x.name}</h1>
                <h4>{x.des}</h4>
                <h5>{x.price}</h5>
                <Link to={'/detail/'+x._id}>Go Detail</Link>
                <button onClick={()=>AddBasket(x)}>Add Basket</button>
            </div>
        </>)}
        </div>
    </>
  )
}

export default Home