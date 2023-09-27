import{Component} from "react";
import Count from "./Count";
class Main extends Component
{
 constructor(props)
 {
   super(props);
 this.state= {count:0}
 }
 changeState=()=>this.setState({count:this.state.count+1});

render()
{
    return(
       <div>
        <h2>This is Main Component's Button</h2>
    
        <button onClick={this.changeState}>Click me</button>
        <Count Mcount={this.state.count}/>
          </div> 
    );
}
}export default Main