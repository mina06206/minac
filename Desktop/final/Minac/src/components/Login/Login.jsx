import style from './Login.module.css'
import React, { useEffect } from 'react';
import * as yup from "yup"
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import { user } from './../../Context/User';


export default function Login() {
    const { id, setid } = useContext(user);

    const [loud, setloud] = useState("");

    let navigate = useNavigate();

    function sub(lolo) {
        setloud(true);

        axios
            .post("https://ecommerce.routemisr.com/api/v1/auth/signin", lolo)
            .then((res) => {
                setloud(false);

                console.log("Full data:", res.data);
                console.log("Message:", res.data.message);
                localStorage.setItem("key", res.data.token)
                setid(res.data.token);
                navigate("/")

            })
            .catch((err) => {
                setloud(false);
                console.log(err.response.data.message);
            });
    }



    let myvalid = yup.object().shape({
        password: yup.string().min(2),
        email: yup.string().email()
    })


    let formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: myvalid,
        onSubmit: sub
    })

    return (
        <>
            {/* <form className="max-w-md mx-auto" onSubmit={formik.handleSubmit}>

                <div className="relative z-0 w-full mb-5 left-0 group">
                    <input
                        type="text"
                        name="email"
                        id="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                        placeholder=""
                        required
                    />
                    <label htmlFor="email" className="absolute left-0 text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">email</label>
                    {formik.errors.email && formik.touched.email ? (
                        <div className='p-4 mb-4 text-sm text-red-600 rounded-lg' role='alart'>
                            <p className='text-4xl'> {formik.errors.email}</p>
                        </div>
                    ) : null}
                </div>

                <div className="relative z-0 w-full mb-5 left-0 group">
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                        placeholder=" "
                        required
                    />
                    <label htmlFor="password" className="absolute left-0 text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Password</label>
                    {formik.errors.password && formik.touched.password ? (
                        <div className='p-4 mb-4 text-sm text-red-600 rounded-lg' role='alart'>
                            <p className='text-4xl'> {formik.errors.password}</p>
                        </div>
                    ) : null}
                </div>

                <button type='submit'>{loud ? <i className='fas fa-spinner fa-spin'></i> : <i>submit</i>}</button>

            </form>


            <form className="max-w-sm mx-auto bg-white p-6 rounded-lg shadow-md">

                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                        Your email
                    </label>
                    <input
                        type="email"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="name@email.com"
                    />
                </div>

                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                        Your password
                    </label>
                    <input
                        type="password"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="••••••••"
                    />
                </div>

                <div className="flex items-center mb-5">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm text-gray-600">
                        I agree with the terms
                    </span>
                </div>

                <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                    Submit
                </button>

            </form> */}


            <form className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md" onSubmit={formik.handleSubmit}>
                {/* Email Field */}
                <div className="mb-5 relative">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="name@email.com"
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                        required
                    />
                    {formik.touched.email && formik.errors.email && (
                        <p className="text-red-600 text-sm mt-1">{formik.errors.email}</p>
                    )}
                </div>

                {/* Password Field */}
                <div className="mb-5 relative">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="••••••••"
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                        required
                    />
                    {formik.touched.password && formik.errors.password && (
                        <p className="text-red-600 text-sm mt-1">{formik.errors.password}</p>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md transition-colors flex justify-center items-center"
                >
                    {loud ? <i className="fas fa-spinner fa-spin"></i> : "Submit"}
                </button>
            </form>




        </>
    );
}
