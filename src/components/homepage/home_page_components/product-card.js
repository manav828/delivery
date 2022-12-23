import React from "react"
import './product_card.css';

const ProductCard = ( props) => {
    return (
        <>


            <div className="product-card" >

                <div className="product-image">
                    <img src={props.imgsrc} className="product-thumb" alt="" />
                </div>
                <div className="product-info">
                    <h2 className="product-brand">{props.foodName}</h2>

                </div>
            </div>


        </>
    )
}

export default ProductCard