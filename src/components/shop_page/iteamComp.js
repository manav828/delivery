import React from "react"

import "./shops/shop.css"
// import Navbar from "../homepage/home_page_components/navbar";


const IteamComp = (props) => {
    // const handaleClick = (iteam)=>{
    //     console.log(iteam)
    // }
    return (
        <>


            <div className="it itBig" key={props.id}>
                <div className="text" >
                    <div className="text1">{props.Itname}</div>
                    <div className="text2">{props.price}₹ </div>
                </div>
                <div className="button">
                    <button onClick={() => props.handaleClick(props)}>ADD</button>
                </div>

            </div>
            <hr/>

        </>
    )
}

export default IteamComp