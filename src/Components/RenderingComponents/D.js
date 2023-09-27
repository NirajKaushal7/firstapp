import{Component} from "react";
class D extends Component
{
constructor(props)
{
super(props);
this.state= {count:0}
}
render()
{
    return(<div><h2>This is component D</h2>
            {/* here we can code html+js using for js {} and for html ();*/}
  </div> 
    );
}
}
export default D;