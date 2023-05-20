import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import ABC from './Components/ABC';
import Numbers from './Components/Numbers';
import Colors from './Components/Colors';
import Shapes from './Components/Shapes';
import Animals from './Components/Animals';
import Fruits from './Components/Fruits';
import Vegetables from './Components/Vegetables';
import Body from './Components/Body';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        {/* <Redirect from='/Home' to='/Register' /> */}
          <Route exact path='/' component={Home}>
            <Home />
          </Route>

          <Route exact path="/ABC" component={ABC}>
            <ABC />
            </Route>

          <Route exact path="/Numbers" component={Numbers}>
          <Numbers />
          </Route>

          <Route exact path="/Colors" component={Colors}>
          <Colors />
          </Route>
          
          <Route exact path="/Shapes" component={Shapes}>
          <Shapes />
          </Route>

          <Route exact path="/Animals" component={Animals}>
          <Animals />
          </Route>
          
          <Route exact path="/Fruits" component={Fruits}>
          <Fruits />
          </Route>

          <Route exact path="/Vegetables" component={Vegetables}>
          <Vegetables />
          </Route>

          <Route exact path="/Body" component={Body}>
          <Body />
          </Route>

      </div>
    </BrowserRouter>
  );
}

export default App;
