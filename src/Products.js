import * as React from "react";
import ProductCard from "./ProductCard";
import './Products.css';

function Products({ products }) {
    return (
        <div className='Home' style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h1>Our Menu</h1>
            <div className='listmenu bg-dark d-flex flex-wrap' style={{ justifyContent:'space-around' }}>
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        img={product.images[0]} // Assuming images is an array of image paths
                        title={product.title}
                        description={product.description}
                        price={product.price}
                    />
                ))}
            </div>
        </div>
    );
}

export default Products;
