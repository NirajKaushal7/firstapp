import React, { Component } from 'react';
import A from './A';
import B from './B';
import C from './C';
import D from './D';
import '../../App.css';//go up two levels from the current directory
class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'a', // Replace with the initial value you want
    };
  }
  clickButton = (value) => {
    this.setState({ display: value });
  };
  
 
  render() {
    const { display } = this.state;//It is a destructuring assignment from state
     

    return (
      <div>
<ul>
        <li>
        <button onClick={()=>this.clickButton('a')}>Component A</button>
          </li>
        <li>
          <button onClick={()=>this.clickButton('b')}>Component B</button>
          </li>
        <li>
          <button onClick={()=>this.clickButton('c')}>Component C</button>
          </li>
        <li>
          <button onClick={()=>this.clickButton('d')}>Component D</button>
          </li>
  </ul> 
       
        {display === 'a' && <A/>}
        {display === 'b' && <B/>}
        {display === 'c' && <C />}
        {display === 'd' && <D />}

      </div>
    );
  }
}
export default Display;
