import React from 'react';
import { Formik,Form,Field,ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {register} from '../services/authService';

function Register(){
    const validationSchema=Yup.object({
        username:Yup.string().required('Username is required'),
        email:Yup.string().email('Invalid email').required('Email is required');
        password:Yup.string().min(6,Password must be atleast 6 characters').required('Password is required'),

    });
    const handleRegister=(values)=>{
        register(values)
        .then(()=> alert('Registration succesful!'))
        .catch((error)=>console.error('Error registering user',error));
    };

    return(
   <div>
    <h2>Register</h2>
    <Formik
    initialValues={{username: '',email: '',password:''}}
    validationSchema={validationSchema}
    onSubmit={handleRegister}
    >
        {()=>(
            <Form>
                <div>
                    <label>Username</label>
                    <Field name="username"/>
                    <ErrorMessage name="username" component="div"/>
                    </div>

                    <div>
                    <label>Email</label>
                    <Field name="email" type="email"/>
                    <ErrorMessage name="email" component="div"/>
                    </div>

                    <div>
                    <label>Password</label>
                    <Field name="password" type="password"/>
                    <ErrorMessage name="password" component="div"/>
                    </div>

                    <button type="submit">Register</button>

            </Form>
        )}
    </Formik>
    </div>




);
}
export default Register;