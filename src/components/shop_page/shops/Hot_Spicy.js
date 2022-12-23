import react, { useState } from "react"
import { Hot_Spicy_items } from "../shopDetels/ShopItems"
import "./shop.css"
import Navbar from "../../homepage/home_page_components/navbar";
import IteamComp from "../iteamComp";
import Cart from "../cart";

// const showCase = (val) => {
//     // console.log(val)
//     return (
//         <IteamComp
//             key={val.id}
//             Itname={val.name}
//             price={val.price}
//         // handaleClick={handaleClick}
//         />

//     )
// }


// console.log(Shreeji_items)

const ShopPage = () => {
    // console.log(props)
    const [cart, setCart] = useState([]);
    const [warning, setWarning] = useState(false);

    const handaleClick = (item) => {
        let isPresent = false;
        console.log(cart)
        console.log(item)

        cart.forEach((product) => {
            if (item.Itname === product.Itname) {
                isPresent = true
            }

        });
        if (isPresent) {
            setWarning(true)
            setTimeout(() => {
                setWarning(false)
            }, 2000)
            return;

        }
        setCart([...cart, item])

    }
    const showCart = () => {
        let cart = document.getElementById('hideCart')
        console.log("hiii")
        if (cart.style.display === 'block') {

            cart.style.display = 'none'
        }
        else {
            cart.style.display = 'block'
        }
    }

    const handleChange = (item, d) => {
        let ind = -1;
        cart.forEach((data, index) => {
            if (data.id === item.id)
                ind = index;
        });
        const tempArr = cart;
        tempArr[ind].amount += d;

        if (tempArr[ind].amount === 0)
            tempArr[ind].amount = 1;
        setCart([...tempArr])
    }



    return (
        <>
            <Navbar />
            <div className="main1">

                <div className="shop_info">
                    <div className="sub_box">

                        <div className="sq1">
                            <div className="subsq1">
                                <img src="images/shop.webp" alt="" />
                            </div>
                        </div>
                        <div className="sq2">
                            <div className="subsq2">
                                <div className="spName">
                                    <h1>hot_Spicy</h1>
                                </div>
                                <div className="spIteam">
                                    Puff,Sandwich
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                <div className="box1">
                    <div className="menu">



                        <div className="items sticky-top">
                            <a href="#1" >
                                <div>Puff</div>
                            </a>
                            <a href="#2">
                                <div>Sandwich</div>
                            </a>
                            

                        </div>


                        <div className="itName">
                            <div className="nameHading same">
                                <div className="heading">

                                    <h2 id="1">Puff</h2>
                                </div>
                                {/* <div className="it">
                                    <div className="text">
                                        <div className="text1">Balti panir</div>
                                        <div className="text2">200$</div>
                                    </div>
                                    <div className="button">
                                        <button>ADD</button>
                                    </div>

                                </div>

                                <hr /> */}
                                {/* <IteamComp Itname = "panir" price = "250" /> */}
                                {
                                    Hot_Spicy_items.puff.map((val) => (
                                        <IteamComp
                                            key={val.id}
                                            Itname={val.name}
                                            amount={val.amount}
                                            price={val.price}
                                            handaleClick={handaleClick} 
                                            handleChange={handleChange}
                                        // handleChange={handleChange}
                                        />
                                    ))
                                }





                            </div>


                            <div className="nameHading same" id="2">
                                <div className="heading">

                                    <h2 id="2">Sandwich</h2>
                                </div>
                                {/* {Shreeji_items.Pizza.map(showCase)} */}
                                {
                                    Hot_Spicy_items.Sandwich.map((val) => (
                                        <IteamComp
                                            key={val.id}
                                            Itname={val.name}
                                            amount={val.amount}
                                            price={val.price}
                                            handleChange={handleChange}
                                            handaleClick={handaleClick}
                                        />
                                    ))
                                }



                            </div>




                         





                           



                        </div>

                    </div>

                    <div className="cart" id="hideCart">
                        <div className="bb"><div className="warn">

                            {
                                warning && <div className="warning">Iteam is alrady in your cart</div>
                            }
                        </div>
                            <Cart cart={cart} setCart={setCart} />
                        </div>


                    </div>

                </div>

            </div>
            <div className="cartButton" onClick={showCart}>
                <button>Cart</button>
            </div>
        </>
    )
}


export default ShopPage
