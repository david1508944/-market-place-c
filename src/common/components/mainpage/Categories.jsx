import React from "react";
import black from "../assets/images/black.png"

const Categories = () =>{
    const data = [
        {
            cateImg:"./assets/images/BlackHoodie.png",
            cateName:"Black Hoodie"
        },
    ]
    return(
        <>
            <div className="category">
                {
                    data.map((value,index)=>{
                        return(
                            <div className="box f_flex" key={index}>
                                <img src={black} alt="" />
                                <span>{value.cateName}</span>
                            </div>
                        )
                    })
                }
            </div>
        </>

    )
}
export default Categories