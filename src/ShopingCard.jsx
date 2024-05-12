import React, { useEffect, useState } from 'react';
import './ShopingCard.css';

function CardInShoppingCart({ product, onAdd, onRemove, onClose }) {
  return (
    <div className="row border-top border-bottom">
      <div className="row main align-items-center d-flex">
        <div className="col-2">
          <img className="img-fluid" src={product.images[0]} alt={product.title} />
        </div>
        <div className="col">
          <div className="row text-muted">{product.category}</div>
          <div className="row">{product.title}</div>
        </div>
        <div className="col d-flex" style={{ fontFamily: 'sans-serif' }}>
          <button className='text-dark' aria-label="Remove one item" onClick={() => onRemove(product)}>-</button>
          <button className="border text-danger text-bold" style={{ fontSize: '20px' }}>{product.quantity}</button>
          <button className='text-dark' aria-label="Add one item" onClick={() => onAdd(product)}>+</button>
        </div>
        <div className="col">{product.price * product.quantity} &euro;</div>
        <span className="close p-1" style={{ width:'50px' ,cursor: 'pointer' }} onClick={() => onClose(product)}>&#10005;</span>
      </div>
    </div>
  );
}

function ShoppingCart() {
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Retrieve items from localStorage
    const storedItems = localStorage.getItem('reactItem');
    if (storedItems) {
      try { 
        let parsedItems = JSON.parse(storedItems);
        // Ensure each item has a quantity property initially set to 1
        parsedItems = parsedItems.map(item => ({ ...item, quantity: item.quantity || 1 }));
        setItems(parsedItems);
      } catch (error) {
        console.error('Error parsing stored items:', error);
        // Handle error, perhaps set default value for items or display error message
      }
    }
  }, []);

  useEffect(() => {
    // Calculate total price when items change
    const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalPrice(totalPrice);
  }, [items]);

  const handleAdd = (product) => {
    const updatedItems = items.map(item =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setItems(updatedItems);
    localStorage.setItem('reactItem', JSON.stringify(updatedItems));
  };

  const handleRemove = (product) => {
    const updatedItems = items.map(item =>
      item.id === product.id && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setItems(updatedItems);
    localStorage.setItem('reactItem', JSON.stringify(updatedItems));
  };

  const handleClose = (product) => {
    const updatedItems = items.filter(item => item.id !== product.id);
    setItems(updatedItems);
    localStorage.setItem('reactItem', JSON.stringify(updatedItems));
  };

  return (
    <div className="card">
      <div className="row">
        <div className="col-md-8 cart">
          <div className="title">
            <div className="row">
              <div className="col"><h4><b>Shopping Cart</b></h4></div>
              <div className="col align-self-center text-right text-muted">{items.length} items</div>
            </div>
          </div>

          {items.map(product => (
            <div key={product.id}>
              <CardInShoppingCart product={product} onAdd={handleAdd} onRemove={handleRemove} onClose={handleClose} />
            </div>
          ))}
          <div className="back-to-shop"><a href="/">{"<--"}</a><span className="text-muted">Back to shop</span></div>

        </div>
        <div className="col-md-4 summary">
          <div><h5><b>Summary</b></h5></div>
          <hr />
          <div className="row">
            <div className="col" style={{ paddingLeft: '0' }}>ITEMS {items.length}</div>
            <div className="col text-right">€ {totalPrice.toFixed(2)}</div>
          </div>
          <form>
            <p>SHIPPING</p>
            <select><option className="text-muted">Standard-Delivery- €5.00</option></select>
            <p>GIVE CODE</p>
            <input id="code" placeholder="Enter your code" />
          </form>
          <div className="row" id='totalPrice'>
            <div className="col">TOTAL PRICE</div>
            <div className="col text-right">€ {totalPrice.toFixed(2)}</div>
          </div>
          <a className="btn" href='/CheckOut'>CHECKOUT</a>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
