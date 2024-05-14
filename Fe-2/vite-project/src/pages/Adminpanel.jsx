import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import "./Adminpanel.scss"



function Adminpanel() {
    const [Mehsul, setMehsul] =useState([])
        useEffect(() => {
         GetMehsul()
        }, [])
        async function GetMehsul() {
            const res= await fetch('http://localhost:3000/mehsul')
            const data=await res.json()
            setMehsul(data)
        }
       async  function DeleteProduct(_id) {
            const res=await fetch('http://localhost:3000/mehsul/'+_id,{method:"Delete"})
            GetMehsul()
        }
  return (
  <>
  <table>
  <thead>
  <tr>
    <th>id</th>
    <th>Name</th>
    <th>img</th>
    <th>description</th>
    <th>price</th>
    <th>delete</th>
    <th>update</th>
  </tr>
  </thead>
  <tbody>
{Mehsul.map((x)=><>
<tr key={x._id}>
    <td>{x._id}</td>
    <td>{x.name}</td>
    <td><img src={x.img}/></td>
    <td>{x.des}</td>
    <td>{x.price}</td>
    <td><button onClick={()=>DeleteProduct(x._id)}>Delete</button></td>
    <td><Link to={'/update/'+x._id}>Update</Link></td>
</tr>
</>)}
</tbody>
</table>
  </>
  )
}

export default Adminpanel