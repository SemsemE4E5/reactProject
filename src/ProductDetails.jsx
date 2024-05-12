import React, { useEffect, useState } from 'react';
import './ProductDetails.css';

const ProductDetails = ({ productId }) => {
  let selectedItem
  if(localStorage.reactItem!=null){selectedItem=JSON.parse(localStorage.reactItem)}
  else{selectedItem=[];}
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${productId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }
        const productData = await response.json();
        setProduct(productData);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }
  
   const handleAddToCart = (product) => {

    alert('Product Added Successfully')

    let flag = false;
    selectedItem.forEach(element => {
       if(product.id === element.id) {
          flag = true
       }
    });

    if(flag)
      alert("This product is already in your cart")
    
    else
    selectedItem.push(product)
    localStorage.reactItem = JSON.stringify(selectedItem);
  };
  
  return (
    // <div className="product-card">
    //   <div className="product-image">
    //     <img src={product.thumbnail} alt={product.title} />
    //   </div>
    //   <div className="product-info">
    //     <div className="product-name">{product.title}</div>
    //     <div className="product-description">{product.description}</div>
    //     <div className="product-price">{product.price} &euro;</div>
    //     <div className="product-rating">★ {product.rating}</div>
    //     <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>ADD TO CART</button>
    //   </div>
    // </div>
    <div class="card">
    <div class="card__title">
      <div class="icon">
        <a href="/"><i class="fa fa-arrow-left" style={{fontSize:'50px'}}> {"<<"}</i></a>
      </div>
      <h3>{product.title}</h3>
    </div>
    <div class="card__body">
      <div class="half">
        <div class="featured_text">
          <h2>{product.category}</h2>
          <p class="sub">{product.title}</p>
          <p class="price">{product.price}&euro;</p>
        </div>
        <div class="image">
          <img src={product.images[0]} alt="" />
        </div>
      </div>
      <div class="half">
        <div class="description">
          <p>{product.description}</p>
        </div>
        <span class="stock"><i class="fa fa-pen"></i> In stock</span>
        <div class="reviews">

          <span style={{transform:'translateY(100px)'}}> ★ {product.rating}  </span>
        </div>
      </div>
    </div>
    <div class="card__footer">
      <div class="recommend">
        <p>Recommended by</p>
        <h3>Andrew Palmer</h3>
      </div>
      <div class="action">
           <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>ADD TO CART</button>
      </div>
    </div>
  </div>
  );
};

export default ProductDetails;
