import React from 'react'
import { useSelector } from 'react-redux'

const CartPage = () => {
    const {cartItems}=useSelector(st=>st.cart)
    console.log(cartItems);
  return (
    <>
        {
          cartItems && cartItems.length > 0 ? 
          (
            <ul>

              {cartItems.map(item=>(
                <li key={item.id}>{item.name} - {item.price} AZN</li>

              ))}

              </ul>
          ):(
          <p className="alert alert-danger">Sebetde mehsul yoxdur</p>
          )
        }


    </>
  )
};

export default CartPage