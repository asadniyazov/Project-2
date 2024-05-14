import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
 import * as Yup from 'yup';
function Add() {
  return (
  <>
     <Formik
       initialValues={{ name: '', img: '', des: '',price:'' }}
       validationSchema={Yup.object({
         name: Yup.string()
        
           .required('Required'),
         img: Yup.string()
           
           .required('Required'),
         des: Yup.string(),
         price:Yup.number()
       })}
       onSubmit={(values) => {
        fetch("http://localhost:3000/mehsul",
{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(values)
})
       }}
     >
       <Form>
         <label htmlFor="name">First Name</label>
         <Field name="name" type="text" />
         <ErrorMessage name="name" />
  <br></br>
         <label htmlFor="img">Last Name</label>
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
     </Formik>
  </>
  )
}

export default Add