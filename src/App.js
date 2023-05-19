import {BrowserRouter, Route, Switch, Redirect, Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import ABC from './Components/ABC';
import Numbers from './Components/Numbers';
import Colors from './Components/Colors';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
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
          
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;