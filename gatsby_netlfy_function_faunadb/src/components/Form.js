import React,{useState} from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
 import * as Yup from 'yup';
    

const FormFormik = () => {
const [state, setState] = useState({})

    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
             <Formik
       initialValues={{
            firstName: '',
             lastName: '',
              email: '' 
            }}
       validationSchema={Yup.object({
         firstName: Yup.string()
           .max(15, 'Must be 15 characters or less')
           .required('Required'),
         lastName: Yup.string()
           .max(20, 'Must be 20 characters or less')
           .required('Required'),
         email: Yup.string().email('Invalid email address').required('Required'),
       })}
       onSubmit={(values) => {
        console.log(values);
         fetch('/.netlify/functions/users', {
             method: 'post',
             body: JSON.stringify(values)
         })
         .then(data => data.json())
         .then(results =>  setState(results)
            )
       }}
     >
       <Form>
         <label htmlFor="firstName">First Name</label>
         <Field name="firstName" type="text" />
         <ErrorMessage name="firstName" />
 
         <label htmlFor="lastName">Last Name</label>
         <Field name="lastName" type="text" />
         <ErrorMessage name="lastName" />
 
         <label htmlFor="email">Email Address</label>
         <Field name="email" type="email" />
         <ErrorMessage name="email" />
 
         <button type="submit">Submit</button>
       </Form>
     </Formik>

     <div>
     </div>
     </div>
    )
}

export default FormFormik
