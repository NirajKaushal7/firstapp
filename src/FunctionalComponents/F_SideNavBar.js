import React,{ useState } from "react";

import F_Display from "./F_Display";

const F_SideNavBar = ()=>{

    const[display,setDisplay]=useState('a')
    
    const clickButton = (value) => {
        setDisplay( value );
      };
     
    return(
    <div>
       <ul>
        <li>
        <button onClick={()=>clickButton('a')}>F_Component A</button>
          </li>
        <li>
          <button onClick={()=>clickButton('b')}>F_Component B</button>
          </li>
        <li>
          <button onClick={()=>clickButton('c')}>F_Component C</button>
          </li>
        <li>
          <button onClick={()=>clickButton('d')}>F_Component D</button>
          </li>
  </ul> 
  <F_Display prosDisplay={display}/>
    </div>    
    );
}
export default F_SideNavBar;