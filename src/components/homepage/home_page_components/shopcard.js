import React from "react"

import { Link } from "react-router-dom";

const ShopCard = (props) => {
    // console.log(props)
    let handaleClick = (iteam)=>{
        console.log(iteam)
        //   aa je shop par click kariu chhe teni details aapse
        // aa tyare use thase jyare badhi shop bani jase 
    }

    return (
        <>

            <div className="card1 " onClick={()=>handaleClick(props)}>
                <Link to={props.shopName}> 
                {/* aa jsx thi aa url ma shopname lakhay jase */}
                {/* <Link to="/shreeji"> */}
     
                
                <img src={props.imgsrc} alt="" />

                <h3>{props.shopName}</h3>
                <p>{props.iteams}</p>
       
                </Link>
            </div>
        </>
    )
}

export default ShopCard 