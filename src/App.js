// function based component below
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';

import React, { useState } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from "react-top-loading-bar"

const App = () => {
  const pageSize = 12;

  const [progress, setProgress] = useState(0)

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          color='red'
          progress={progress}
          height='3px' />
        <Switch>
          <Route exact path="/general"><News setProgress={setProgress} key='general' pageSize={pageSize} country='us' category='general' /></Route>
          <Route exact path="/Sports"><News setProgress={setProgress} key='Sports' pageSize={pageSize} country='us' category='Sports' /></Route>
          {/* <Route exact path="/Politics"><News setProgress={setProgress} key='Politics' pageSize={pageSize} country='us' category='Politics' /></Route> */}
          <Route exact path="/Business"><News setProgress={setProgress} key='Business' pageSize={pageSize} country='us' category='Business' /></Route>
          <Route exact path="/Entertainment"><News setProgress={setProgress} key='Entertainment' pageSize={pageSize} country='us' category='Entertainment' /></Route>
          {/* <Route exact path="/USA"><News setProgress={setProgress} key='USA' pageSize={pageSize} country='us' category='USA' /></Route> */}
          <Route exact path="/Health"><News setProgress={setProgress} key='Health' pageSize={pageSize} country='us' category='Health' /></Route>
          <Route exact path="/Science"><News setProgress={setProgress} key='Science' pageSize={pageSize} country='us' category='Science' /></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App

// class based component below

// // import logo from './logo.svg';
// import './App.css';
// import Navbar from './components/Navbar';
// import News from './components/News';

// import React, { Component } from 'react'

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";
// import LoadingBar from "react-top-loading-bar"

// export default class App extends Component {
//   pageSize = 12;
//   state = {
//     progress: 0
//   }

//   setProgress = (progress) => {
//     setState({progress: progress})
//   }
//   render() {
//     return (
//       <div>
//         <Router>
//           <Navbar />
//           <LoadingBar
//           color='red'
//           progress={state.progress}
//           height='3px'/>
//           <Switch>
//             <Route path="/general"><News setProgress={setProgress} key='general' pageSize={pageSize} country='us' category='general' /></Route>
//             <Route exact path="/Sports"><News setProgress={setProgress} key='Sports' pageSize={pageSize} country='us' category='Sports' /></Route>
//             <Route exact path="/Politics"><News setProgress={setProgress} key='Politics' pageSize={pageSize} country='us' category='Politics' /></Route>
//             <Route exact path="/Business"><News setProgress={setProgress} key='Business' pageSize={pageSize} country='us' category='Business' /></Route>
//             <Route exact path="/Entertainment"><News setProgress={setProgress} key='Entertainment' pageSize={pageSize} country='us' category='Entertainment' /></Route>
//             <Route exact path="/USA"><News setProgress={setProgress} key='USA' pageSize={pageSize} country='us' category='USA' /></Route>
//             <Route exact path="/Health"><News setProgress={setProgress} key='Health' pageSize={pageSize} country='us' category='Health' /></Route>
//             <Route exact path="/Science"><News setProgress={setProgress} key='Science' pageSize={pageSize} country='us' category='Science' /></Route>
//           </Switch>
//         </Router>
//       </div>
//     )
//   }
// }

