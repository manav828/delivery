import React from "react"
import "./homepage.css"
import Navbar from "./home_page_components/navbar"
import ProductCard from "./home_page_components/product-card"
import ShopCard from "./home_page_components/shopcard"
import sData,{food} from "./home_page_components/shopData"

// import  "./script.js"
const Homepage = ()=>{
    const hii = ()=>{
        const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

        productContainers.forEach((item, i) => {
            let containerDimensions = item.getBoundingClientRect();
            let containerWidth = containerDimensions.width;
        
            nxtBtn[i].addEventListener('click', () => {
                item.scrollLeft += containerWidth;
            })
        
            preBtn[i].addEventListener('click', () => {
                item.scrollLeft -= containerWidth;
            })
        })
    }

    const foodSec = (val)=>{
        return (
            <ProductCard 
                imgsrc={val.img} 
                foodName={val.name}
               
                />
        )
    }
    // const handleClick =(item)=>{
    //     console.log(item)
    // }


    const nCard = (val)=>{
        // console.log(val.id)
        return(
            <ShopCard
            key = {val.id}
            imgsrc={val.img}
            shopName={val.name}
            iteams={val.items} />
        );
    }

    return (
        <>

    <Navbar/>




    <div className="product" >
        <h2 className="product-category">Inspiration for your first order</h2>
        <button className="pre-btn" onClick={hii}><img src="images/arrow.png" alt="" /></button>
        <button className="nxt-btn" onClick={hii}><img src="images/arrow.png" alt="" /></button>
        <div className="product-container">
            
            {/* <ProductCard imgsrc="images/food1.avif" foodName="Pizza"/> */}

                    {food.map(foodSec)}

            {/* <div className="product-card">
                <div className="product-image">
                    <img src="images/food2.avif" className="product-thumb" alt="" />
                </div>
                <div className="product-info">
                    <h3 className="product-brand">brand</h3>

                </div>
            </div> */}


        </div>
    </div>

    <div className="conteiner">

        <div className="shop">
            <h2>Order food online</h2>
            <div className="shop-box">
{/* 
                        <Router>
                            <Routes>
                                <Route exact path="/shreeji" element={<ShopCard imgsrc="images/res1.jpg" shopName="Shreeji" iteams="puff,fix thali" href="/contact_us" onClick={shreeji} />} />

                            </Routes>
                        </Router> */}
                        {/* <ShopCard imgsrc="images/res1.jpg" shopName="Shreeji" iteams="puff,fix thali" href="/contact_us" onClick={shreeji} /> */}
                        {/* <ShopCard imgsrc={sData[0].img} shopName={sData[0].name} iteams={sData[0].items}  /> */}
                        

                        {sData.map(nCard)}
                {/* <div className="card ">
                    <img src="images/res2.jpg" alt=""/>
                    <h1>Name of Shop</h1>
                    <h5>iteams in shop</h5>
                </div> */}

            </div>
        </div>

    </div>

{/* <script src="script.js"></script> */}

        </>
        
    )
}

export default Homepage