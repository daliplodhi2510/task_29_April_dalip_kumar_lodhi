import React, {useState, useEffect} from 'react';
import {Product} from './';

export const Products = ({productType, addProduct}) => {
    console.log('products.js');

    const [data, setData] = useState([]);
    let componentMount = true;

    const getProducts = async () => {
        const res = await fetch(`https://fakestoreapi.com/${productType.url}`);
        if(componentMount){
            setData(await res.json());
        }
        return ()=>{
            componentMount = false;
        }
    }
    useEffect(() => {
        getProducts();
    }, [])
    

    return (
        <section className='product py-3'>
            <div className='container'>
                <div className='product_sec'>
                    <span>{productType.title} <strong>{productType.type}</strong></span>
                </div>
                <div className='row'>
                    {
                        data.map((item)=>{
                            return <Product key={item.id} products={item} addProduct={addProduct} />
                        })
                    }
                </div>
            </div>
        </section>
    )
}
