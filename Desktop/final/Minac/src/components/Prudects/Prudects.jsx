import React, { useEffect, useState } from 'react';
import style from './Prudects.module.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function Prudects() {
    const [products, setproducts] = useState([]);
    useEffect(() => {
        axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
            .then((res) => {
                console.log(res.data.data);
                setproducts(res.data.data)
            })
            .catch((res)=>{
                console.log(res.error);
                
            })


    }, []);
    return (
        <>
            <div className='container'>
                <div className='grid grid-cols-4 gap-4 -mx-2 '>
                    {products.map((product) => (

                       <Link to={`/prudects/${product?.id}/${product?.category?.name}`}> 
                        <div key={product?.id} className=' mb-5 overflow-hidden rounded group'>
                            <div className='h-120 overflow-hidden rounded'>
                                <img src={product?.imageCover} className='w-full  object-cover transform transition duration-300 group-hover:scale-110 ' />
                            </div>
                            <h3>{product?.title.split(" ").slice(0, 2).join(" ")}</h3>
                            <div className='flex justify-around'>
                                <div>{product?.price}<span className='p-2'>EGP</span></div>
                                <div>{product.ratingsAverage}⭐</div>

                            </div>
                        </div>
                       </Link>

                    ))}
                </div>
            </div>


        </>
    );
}
