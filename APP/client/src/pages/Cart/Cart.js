import React, {useEffect, useState} from 'react'
import "./Cart.css"

const Cart = () => {
  var cartItems = JSON.parse(localStorage.getItem("cartList"));
  const [cartDivs, setDivs] = useState(populateCart());
  
  return (
    <div className='page-wrap'>
      <div className='cart-page-wrapper'>
        <div className='container-wrapper'>
          <div className='cart-container'>
            {cartDivs}
          </div>
          <div className='order-details-container'>
            <h3>Total Mass: </h3>
            <h3>Total Price: </h3>
          </div>
        </div>
        <div className='container-wrapper'>
          <button onClick={placeOrder}>Place Order</button>
          <button>Cancel Order</button>
        </div>
      </div>
    </div>
  )

  function populateCart() {
    //Query API for product information
    return(
      <div>
        {cartItems.map(item => {
          return(
          <div className='cart-item'>
              <h2>{item.id}</h2>
              <input onKeyDown={event => event.preventDefault()} type='number' min={0} defaultValue={item.quantity} onChange={e => updateCart(item.id, e.target.value)}></input>
              <button value={item.id} onClick={e => removeItem(e.target.value)}>Remove Item</button>
          </div>)
        })}
      </div>
    )
  }

  function updateCart(id, quan) {
    var stored = JSON.parse(localStorage.getItem("cartList"));
    const item = stored.find(e => e["id"] === id)
    const itemIndex = stored.indexOf(stored.find(e => e["id"] === id))
    stored[itemIndex].quantity = quan;
    
    localStorage.setItem("cartList", JSON.stringify(stored));
  }

  function removeItem(id) {
    var stored = JSON.parse(localStorage.getItem("cartList"));
    const item = stored.find(e => e["id"] === id)
    const itemIndex = stored.indexOf(stored.find(e => e["id"] === id))
    stored = stored.filter(function(item) {
      return item.id !== id
    })
    
    localStorage.setItem("cartList", JSON.stringify(stored));
    cartItems = JSON.parse(localStorage.getItem("cartList"));
    setDivs(populateCart());
  }

  function placeOrder() {
    //Do Order PUT API Calls
    //Use this
    //var stored = JSON.parse(localStorage.getItem("cartList"));
  }
}

export default Cart