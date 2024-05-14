import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
function Detail() {
    let { Detailid } = useParams();
    const [Product, setProduct] = useState([])
useEffect(() => {
  GetProductById()
}, [])

   async function GetProductById () {
     const res=await   fetch("http://localhost:3000/mehsul/"+Detailid)
     const data= await res.json()
     setProduct(data)
    }
  return (
    <>
        <div key={Product._id}>
        <img src={Product.img}/>
            <h1>{Product.name}</h1>
            <h5>{Product.des}</h5>
            <p>{Product.price}</p>
        </div>
    </>
  )
}

export default Detail