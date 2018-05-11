import React, { Component } from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Perfil from './Perfil';
import Login from './Login';
import Posts from './Posts';

class App extends Component {
  render() {
    return (
     <div>
       <header>
         <Link to="/">Login</Link>
         <Link to="/perfil">Perfil</Link>
         <Link to="/posts">Posts</Link>
       </header>
       <main>
         <Switch>
           <Route path="/" component={Login} />
           <Route path="/perfil" component={Perfil} />
           <Route path="/posts" component={Posts} />
          </Switch>
       </main>

       <footer>
         <p>Feito com muito café!</p>
       </footer>
     </div>
    );
  }
}

export default App;
