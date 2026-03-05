import React, { useEffect, useState } from 'react';
import style from './Prudect.module.css'
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
export default function Prudect() {
    let { id, cat } = useParams()
    const [product, setproduct] = useState([]);
    const [products, setproducts] = useState([]);


    function get1() {
        axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
            .then((res) => {
                // console.log(res.data.data);
                setproduct(res.data.data)

            })
    }


    function get2() {
        axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
            .then((res) => {

                let sum = res.data.data.filter((pp) => (pp.category.name == cat));
                setproducts(sum);

            })
    }

    useEffect(() => {
        get1();
        get2();
    }, [id, cat]);

    console.log(products);


    return (
        <>
            <div className='grid grid-cols-12  items-center  '>
                <div className='col-span-3 overflow-hidden'>
                    <img className='w-full h-full object-cover rounded'
                        src={product.imageCover} alt="" />
                </div>

                <div className='col-span-9 m-4 relative'>
                    <h1 className='text-2xl'>{product?.title?.split(" ")?.slice(0, 2)?.join(" ")}</h1>
                    <h3 className=''>{product?.description}</h3>
                    <h1 className='text-2xl mt-4'>{product?.price}EGP</h1>


                    <button className='bg-blue-500 text-white rounded text-2xl    w-full'>add</button>
                </div>
            </div>


            <div className='container mt-20'>
                <div className='grid grid-cols-4 gap-4 -mx-2 '>
                    {products.map((product) => (

                        <Link to={`/prudects/${product?.id}/${product?.category?.name}`}>
                            <div key={product?.id} className=' mb-5 overflow-hidden rounded group'>
                                <div className='h-80 overflow-hidden rounded'>
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
