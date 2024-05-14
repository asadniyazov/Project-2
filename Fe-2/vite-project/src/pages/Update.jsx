import React from 'react'
import { useState,useEffect } from 'react';
import {  useParams } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
 import * as Yup from 'yup';
function Update() {
    let { id } = useParams();
const [Product, setProduct] = useState(null)
useEffect(() => {
  GetProductById()
}, [])

   async function GetProductById () {
     const res=await   fetch("http://localhost:3000/mehsul/"+id)
     const data= await res.json()
     setProduct(data)
    }

    
  return (
   <>{Product&& <Formik
    initialValues={{ name: Product.name, img: Product.img, des: Product.des,price:Product.price }}
    validationSchema={Yup.object({
      name: Yup.string(),
      img: Yup.string(),
      des: Yup.string(),
      price:Yup.number()
    })}
    onSubmit={(values) => {
     
     fetch("http://localhost:3000/mehsul/"+id,
{
 headers: {
   'Accept': 'application/json',
   'Content-Type': 'application/json'
 },
 method: "PUT",
 body: JSON.stringify(values)
})
.then(res =>  res.json()
)

    }}
  >
    <Form>
      <label htmlFor="name">Name</label>
      <Field name="name" type="text" />
      <ErrorMessage name="name" />
<br></br>
      <label htmlFor="img">Img</label>
      <Field name="img" type="text" />
      <ErrorMessage name="img" />
<br></br>
      <label htmlFor="des">Description</label>
      <Field name="des"  />
      <ErrorMessage name="des" />
<br></br>
<label htmlFor="price">Price</label>
      <Field name="price"  />
      <ErrorMessage name="price" />
      <br></br>
      <button type="submit">Submit</button>
    </Form>
  </Formik>}
    
   </>
  )
}

export default Update