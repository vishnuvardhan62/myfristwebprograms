/*import React from 'react'

const vedio = (props) => {
  return (
    <div>
      <h1>video component - {props.name}</h1>
    </div>
  )
}

export default vedio  */
// react functional componets props

/*import React from 'react'

export default function greeting(props) {
  return (
    <div>
      good afternoon {props.name}.
    </div>
  )
}   */

/*import React from 'react'

export default function App() {
  return (
    <div className='App'>
      <video/>
    </div>
  )
} */

//react  function componets
/*import React from 'react'

export default function componentname() {
  return (
    <div>
      <h1>welcome text</h1>
    </div>
  )
}  */

//class components in react

/*import React, { Component } from 'react';

class Emplyee extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count:0
    }
    console.log("constructor");
  }
  increamentcount=()=>{
    this.setState({
      count :this.state.count +1,
    });
  }
  UNSAFE_componentWillMount(){
    console.log("component Will Mount");
  }
  shouldComponentUpdate(){
    if(this.state.count > 10){
      return false;
    }
    return true;
  }
  UNSAFE_componentWillUpdate(){
    console.log("component WIll Update");
  }
  componentDidMount(){
    console.log("component did mount");
  }
  componentWillUnmount(){
    console.log("component will unmount");
  }
 
  
  render() {
    console.log("Rendering")
    return (
      <div>
        <h1>Hello Employee</h1>
        
        <h1>count:{this.state.count}</h1>
        <button onClick={this.incrementCount}>increment</button>
      </div>
      );
    }
  }
export default Emplyee;        */
// react events
/*import React from 'react'

export default function football() {
  const shoot = () => {
    alert ("great shot!!")
  }
  return (
    <div>
      <button onClick={shoot}>Take the shoot</button>
    </div>
  )
}     */

//passing arguments
/*import React from 'react'

export default function football() {
  const shoot = (a) => {
    alert(a);
  }
  return (
    <div>
      <button onClick={ () => shoot("Gole")}>Take the shot</button>
    </div>
  )
}  */

//React event object
/*import React from 'react'

export default function footbal () {
  const shoot = (a, b) => {
    alert(b.type);
  }
  return (
    <div>
      <button onClick={ (event) => shoot("Gole", event)}>Take the shot</button>
    </div>
  )
}          */

/*import React, { Component } from 'react'

export default class Car extends Component {
  constructor(props){
    super(props);
    this.state = {
      brand: "ford",
      model: "mustang",
      color: "red",
      year: 2022
    };
  }
  changecolor = () => {
    this.setState({color: "skyblue"});
  }
  render() {
    return (
      <div>
        <h1>My {this.state.brand} </h1>
        <p>it is a {this.state.color} {this.state.model} from {this.state.year}.</p>
        <button type="button" onClick={this.changecolor}>chage color</button>
      </div>
    )
  }
}                 */

//React lifecycle of components
/*import React, { Component } from 'react'

export default class Header extends Component {
  constructor(props){
    super(props);
    this.state = {favoraitecolor: "red"};
  }
  static getDerivedStateFromProps(props,state){
    return {favoraitecolor:props.favcol };
  }
  render() {
    return (
      <div>
        <h1>my favoraite color is {this.state.favoraitecolor}</h1>
      </div>
    )
  }
}  */
//ReactDOM.render(<header favcol="yellow"/>,document.getElementById('root'));
//components Didmount ()

/*import React, { Component } from 'react'

export default class Header extends Component {
  constructor(props){
    super(props);
    this.state = {favaratecolor: "red"};
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({favaratecolor: "yellow"})
    }, 1000);
  }
  render() {
    return (
      <div>
        <h2>My favarate color is {this.state.favaratecolor}</h2>
      </div>
    )
  }
}              */

// lifecycle updateing concepet
/*import React, { Component } from 'react'

export default class Header extends Component {
  constructor(props){
    super(props);
    this.state = {favaratecolor: "red"}
  }
  static getDerivedStateFromProps(props, state) {
    return  {favaratecolor : props.favcol };
  }
  chagecolor = () => {
    this.setstate ({favaratecolor: "skyblue"});
  }
  render() {
    return (
      <div>
        <h3>my favarate color {this.state.favaratecolor}</h3>
        <button type="button" onClick={this.changecolor}>change color</button>
      </div>
    )
  }
}                        */

// React condinal rendering
/*import React from 'react'

export default function Goal(props) {
  const isGole = props.isGole;
  if (isGole) {
    return <MadeGoal/>;
  }
  return (
    <div>
      return <MissedGoal/>
    </div>
  
  )
}                */
//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<Goal isGole={false} />);
//change :make this app wrok like a calulater that an add two numbers
/*import { toContainHTML } from '@testing-library/jest-dom/dist/matchers';
import React from 'react'

export default function App() {
  const [number1, setNumber1] = React.useState();
  const [number2, setNumber2] = React.useState();
  const [total, setTotal] =React.useState(0);
  return (
    <div>
      <h2>Adding two numbers</h2>
      <input placeholder ="first Number" type="number"/>
      <input placeholder="second Number" type = "number"/>

      <button> Add two numbers </button>
      <p>TOTAL:</p>

    </div>
  );
}          */

//React lists
/*import React from 'react'

export default function GroceryList() {
  const item = [
    {id:1, name:'bread'},
    {id:2, name: 'milk'},
    {id:3, name: 'eggs'}
  ];
  return (
    <div>
      <h1>Grocery List</h1>
      <ul>
        {item.map((item) => <li key = {item.id}>{item.name}</li>)}</ul>  
    </div>
  )
}                     */

/*import React from 'react'

export default function App() {
  return (
    <div>
      <h2>Let's the starteded</h2>
    </div>
  )
}           */

/*import React, { Component } from 'react';  
class App extends Component{  
   render(){  
      var i = 5;  
      return (  
         <div>  
            <h1>{i == 1 ? 'True!' : 'False!'}</h1>  
         </div>  
      );  
   }  
}  
export default App;   */

//JSX styleing

/*import React, { Component } from 'react'

export default class App extends Component {
  render() {
    var mystyle = {
      fontsize : 80,
      fontcolor: 'Courier',
      color : 'yellow',
      backgroundcolor: 'skyblue'
    }
    return (
      <div>
        <h2 style= {mystyle}>www.javascript.com</h2>
      </div>
    )
  }
}                  */

//buliding in custom code components
/*import React from 'react';
import './App.css';

function App() {
  const greeting = "greeting";
  return(
    <div className="container">
      <h1 id={greeting}>Hello, World</h1>
      <p>I am writing JSX</p>
      <ul>
        <li>
          <button
            onClick={event => alert(event.target.id)}
          >
            <span role="img" aria-label="grinning face" id="grinning face">😀</span>
          </button>
        </li>
        <li>
          <button
            onClick={event => alert(event.target.id)}
          >
              <span role="img" aria-label="party popper" id="party popper">🎉</span>
          </button>
        </li>
        <li>
            <button
              onClick={event => alert(event.target.id)}
            >
              <span role="img" aria-label="woman dancing" id="woman dancing">💃</span>
          </button>
        </li>
      </ul>
    </div>
  )
}

export default App;       */

//import { upload } from "@testing-library/user-event/dist/upload";
import React, { useState } from "react";
//import './COMPONENTS/CourseGoals/CourseGoallList/CourseGoalList';
import CourseInput from "./COMPONENTS/CourseGoals/CourseInput/CourseInput";
//import './App.css';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    {text:'Do all exercises', id:'g1'},
    {text:'Finish the course!', id:'g2'},
  ]);

  const addGoalHandler = enteredText =>{
    setCourseGoals(prevGolas => {
      const UpdatedGoals = [...prevGolas];
      UpdatedGoals.unshift(
        {text:enteredText, 
        id:Math.random().toString()});
        return UpdatedGoals;
    });
  }
  return (
    <div>
      <section>
        <CourseInput onAddGoal={addGoalHandler}/>
      </section>
    </div>
  )
     
};
export default App;
