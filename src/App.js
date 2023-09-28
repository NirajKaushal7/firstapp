import logo from './logo.svg';
import './App.css';
import Main from './Components/CountDemo/Main';
import Display from './Components/RenderingComponents/Display';
import F_Display from './FunctionalComponents/F_Display';
import F_SideNavBar from './FunctionalComponents/F_SideNavBar';
function App() {
  return (
    <div className="App">
      <h1>React</h1>
      {/* <Main></Main>
     <Display></Display> */}
     {/* <F_Display></F_Display> */}
     <F_SideNavBar/>
    </div>
  );
}
export default App;
