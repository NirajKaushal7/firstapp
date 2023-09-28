import{Component} from "react";
class Count extends Component
{
  
constructor(props)
{
super(props);
}
render()
{
    return(<div><h2>Count Component:{this.props.Mcount}</h2>
            {/* here we can code html+js using for js {} and for html ();*/}
  </div> 
    );
}
}
export default Count;