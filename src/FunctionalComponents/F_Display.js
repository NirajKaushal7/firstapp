import React,{ useState } from "react";
import F_A from "./F_A";
import F_B from "./F_B";
import F_C from "./F_C";
import F_D from "./F_D";

const F_Display = (props)=>{
    const {prosDisplay} = props;
     
    return(
    <div>
        {prosDisplay === 'a' && <F_A/>}
        {prosDisplay === 'b' && <F_B/>}
        {prosDisplay === 'c' && <F_C />}
        {prosDisplay === 'd' && <F_D />}
    </div>    
    );
}
export default F_Display;