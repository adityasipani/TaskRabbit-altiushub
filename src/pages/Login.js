import React from 'react';
import { Formik,Form,Field,ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {login,setToken} from '../services/authService';
import jwt_decode from 'jwt-decode';

function Login(){
    const validationSchema=Yup.object({
        email:Yup.string().email('Invalid email').required('Email is required');
        password:Yup.string().required('Password is required'),

    });
    const handleLogin=(values)=>{
        login(values)
        .then((response)=> {
            const token=response.data.token;
            setToken(token);
            const user=jwt_decode(token);
            alert('Welcome, ${user.username}!');})

         
        .catch((error)=>console.error('Login failed',error));
    };

    return(
   <div>
    <h2>Login</h2>
    <Formik
    initialValues={{email: '',password:''}}
    validationSchema={validationSchema}
    onSubmit={handleLogin}
    >
        {()=>(
            <Form>
                <div>
                    <label>Email</label>
                    <Field name="email" type="email"/>
                    <ErrorMessage name="email" component="div"/>
                    </div>

                    {/* <div>
                    <label>Email</label>
                    <Field name="email" type="email"/>
                    <ErrorMessage name="email" component="div"/>
                    </div> */}

                    <div>
                    <label>Password</label>
                    <Field name="password" type="password"/>
                    <ErrorMessage name="password" component="div"/>
                    </div>

                    <button type="submit">Login</button>

            </Form>
        )}
    </Formik>
    </div>




);
}
export default Login;