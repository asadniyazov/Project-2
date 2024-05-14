import React, { createContext } from 'react'
import { useState } from 'react'
import useLocalstorage from '../Hooks/useLocalstorage'
export const Maincontext=createContext()
function Mainprovider({children}) {
    const [Basket, setBasket] = useLocalstorage("basket",[])
    const [Wishlist, setWishlist] = useState([])
    function AddBasket(item) {
        const index=Basket.findIndex((x)=>x._id===item._id)
        if (index===-1) {
         return   setBasket([...Basket,{...item,count:1}])
        }
    }
    function DeleteBasket(element) {
        console.log(element);
       setBasket([...Basket.filter((x)=>x._id!==element._id)])
    }
    function Increase(item) {
        const index=Basket.findIndex((x)=>x._id===item._id)
        const element=Basket[index]
        if (index!==-1) {
            element.count++
            setBasket([...Basket])
        }
    }
    function Decrease(item) {
        const index=Basket.findIndex((x)=>x._id===item._id)
        const element=Basket[index]
        if (element.count>1) {
            element.count--
            setBasket([...Basket])
        }
    }
    function Total() {
        return Basket.reduce((prev,initial)=>(prev+(initial.count*initial.price)),0)
    }
  return (
 <Maincontext.Provider value={{Total,AddBasket,DeleteBasket,Increase,Decrease,Basket}}>{children}</Maincontext.Provider>
  )
}

export default Mainprovider