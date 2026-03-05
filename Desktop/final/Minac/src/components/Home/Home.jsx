import React, { useEffect, useState } from 'react';
import style from './Home.module.css'
import Slider from "react-slick";
import axios from 'axios';
import { Link } from 'react-router-dom';
import AllCategory from './../AllCategory/AllCategory';
export default function Home() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:1000,
    };

    const [cat, setcat] = useState([]);

    useEffect(() => {
        axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
            .then((res) => {
                console.log(res.data.data);
                setcat(res.data.data)
            })
    }, []);

    const [products, setproducts] = useState([]);
    useEffect(() => {
        axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
            .then((res) => {
                console.log(res.data.data);
                setproducts(res.data.data)
            })
            .catch((res) => {
                console.log(res.error);

            })


    }, []);


    return (
        <>
            <Slider {...settings}>

                {
                    cat.map((catt) => (
                        <div className='flex justify-center'>
                            <img className='h-65 object-cover ' src={catt.image} alt="" />
                            <h1>{catt.name}</h1>

                        </div>
                    ))
                }

            </Slider>


            <AllCategory />


            <div className='container z-10'>
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
