import React, { useEffect } from 'react';
import style from './Form.module.css'
import * as yup from "yup"
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import { user } from './../../Context/User';


export default function Form() {
    const { id, setid } = useContext(user);

    const [loud, setloud] = useState("");
    const [error, seterror] = useState();

    let navigate = useNavigate();

    function sub(lolo) {
        setloud(true); // شغل الـ loader

        axios
            .post("https://ecommerce.routemisr.com/api/v1/auth/signup", lolo)
            .then((res) => {
                setloud(false);
                if (res.data.message == "success") {

                    console.log("Full data:", res.data);
                    console.log("Message:", res.data.message);
                    localStorage.setItem("key", res.data.token)
                    setid(res.data.token);
                    navigate("/")
                }
            })
            .catch((err) => {
                setloud(false);
                console.log(err.response.data.message);
                seterror(err.response.data.message);
            });
    }








    let myvalid = yup.object().shape({
        name: yup.string().min(3, "min=3").max(10, "max=10"),
        password: yup.string().min(2),
        rePassword: yup.string().min(2),
        email: yup.string().email()
    })


    let formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            rePassword: "",
        },
        // validate:myvalid,
        validationSchema: myvalid,
        onSubmit: sub
    })

    return (
        <>
            {/* <form className="max-w-md mx-auto" onSubmit={formik.handleSubmit}>
                <div className="relative z-0 w-full mb-5 left-0 group">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                        placeholder=""
                        required
                    />
                    <label htmlFor="name" className="absolute left-0 text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">name</label>
                    {formik.errors.name && formik.touched.name ? (
                        <div className='p-4 mb-4 text-sm text-red-600 rounded-lg' role='alart'>
                            <p className='text-4xl'> {formik.errors.name}</p>
                        </div>
                    ) : null}
                </div>

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
                <div className="relative z-0 w-full mb-5 left-0 group">
                    <input
                        type="password"
                        name="rePassword"
                        id="rePassword"
                        value={formik.values.rePassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                        placeholder=" "
                        required
                    />
                    <label htmlFor="rePassword" className="absolute left-0 text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">rePassword</label>
                    {formik.errors.rePassword && formik.touched.rePassword ? (
                        <div className='p-4 mb-4 text-sm text-red-600 rounded-lg' role='alart'>
                            <p className='text-4xl'> {formik.errors.rePassword}</p>
                        </div>
                    ) : null}
                </div>
                <button type='submit'>{loud ? <i className='fas fa-spinner fa-spin'></i> : <i>submit</i>}</button>

            </form> */}

            <form className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md" onSubmit={formik.handleSubmit}>
                {/* Name Field */}
                <div className="relative z-0 w-full mb-5">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder=" "
                        className="peer block w-full px-3 pt-5 pb-2 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-blue-500"
                        required
                    />
                    <label
                        htmlFor="name"
                        className="absolute left-3 top-2 text-gray-500 text-sm duration-300 transform -translate-y-3 scale-75 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75"
                    >
                        Name
                    </label>
                    {formik.touched.name && formik.errors.name && (
                        <p className="text-red-600 text-sm mt-1">{formik.errors.name}</p>
                    )}
                </div>

                {/* Email Field */}
                <div className="relative z-0 w-full mb-5">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder=" "
                        className="peer block w-full px-3 pt-5 pb-2 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-blue-500"
                        required
                    />
                    <label
                        htmlFor="email"
                        className="absolute left-3 top-2 text-gray-500 text-sm duration-300 transform -translate-y-3 scale-75 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75"
                    >
                        Email
                    </label>
                    {formik.touched.email && formik.errors.email && (
                        <p className="text-red-600 text-sm mt-1">{formik.errors.email}</p>
                    )}
                </div>

                {/* Password Field */}
                <div className="relative z-0 w-full mb-5">
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder=" "
                        className="peer block w-full px-3 pt-5 pb-2 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-blue-500"
                        required
                    />
                    <label
                        htmlFor="password"
                        className="absolute left-3 top-2 text-gray-500 text-sm duration-300 transform -translate-y-3 scale-75 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75"
                    >
                        Password
                    </label>
                    {formik.touched.password && formik.errors.password && (
                        <p className="text-red-600 text-sm mt-1">{formik.errors.password}</p>
                    )}
                </div>

                {/* Re-Password Field */}
                <div className="relative z-0 w-full mb-5">
                    <input
                        type="password"
                        name="rePassword"
                        id="rePassword"
                        value={formik.values.rePassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder=" "
                        className="peer block w-full px-3 pt-5 pb-2 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-blue-500"
                        required
                    />
                    <label
                        htmlFor="rePassword"
                        className="absolute left-3 top-2 text-gray-500 text-sm duration-300 transform -translate-y-3 scale-75 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75"
                    >
                        Re-Password
                    </label>
                    {formik.touched.rePassword && formik.errors.rePassword && (
                        <p className="text-red-600 text-sm mt-1">{formik.errors.rePassword}</p>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md transition flex justify-center items-center"
                >
                    {loud ? <i className="fas fa-spinner fa-spin"></i> : "Submit"}
                </button>
            </form>
        </>
    );
}
