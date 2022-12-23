
import React, { useState } from 'react';
import { useEffect } from 'react';

import "./shops/shop.css"

// 'https://youtu.be/P9-zbdMTwjM' for cart 

const Cart = ({ cart, setCart, handleChange }) => {
    const [price, setPrice] = useState(0);

    const handlePrice = () => {
        let ans = 0;
        cart.map((item) => (
            
            ans += item.amount * item.price 
            
            // console.log(item.amount)

            ))
        setPrice(ans);
    }

    let am =1;
    const low = (item)=>{
        am = am - 1;
        console.log(am)
        item.amount = am;
    }


    const high = (item) => {
        am = am + 1;
        item.amount = am;
    }


    const handleRemove = (Itname) => {
        const arr = cart.filter((item) => item.Itname !== Itname);
        setCart(arr);
        // handlePrice();
    }

    useEffect(() => {
        handlePrice();
    })
    return (
        <article>
            {

                cart.map((item) => (
                    <div className="it cartIt" key={item.id}>
                        <div className="text">
                            <div className="text1 carttext1">{item.Itname}</div>
                            <div className="text2">{item.price}₹ </div>
                        </div>
                        <div className="cartbutton">
                            {/* <button onClick={() => handleChange(item, -1)}>-</button> */}
                            <button className="lowbtn" onClick={low} >-</button>
                            <button>{item.amount}</button>
                            {/* <button onClick={() => handleChange(item, 1)}>+</button> */}
                            <button className="highBtn" onClick={high}>+</button>
                        </div>
                        <div>
                            {/* <span>{item.price}</span> */}
                            <button onClick={() => handleRemove(item.Itname)}>Remove</button>
                        </div>
                        <hr/>
                    </div>
                ))
            }
            <div className="total">
                <span>Total price of your Cart</span>
                <span>Rs - {price}</span>
            </div>
        

        </article>


        
    )
}

export default Cart