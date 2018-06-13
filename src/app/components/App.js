import React, { Component } from 'react';
import '../../App.css';
import { BrowserRouter, Route,Switch} from 'react-router-dom'
import {Header} from "./Header";
import {Home} from "./Home";
import {Login} from "./Login"
import {Empty} from "./Empty";
import {Products} from "./Products";
import {Company} from "./Company";
import {SignUp} from "./SignUp";
import {LoginSucces} from "./LoginSucces";
import {LoginFailed} from "./LoginFailed";
import {Logout} from "./Logout";
import {AddProduct} from "./AddProduct";
import {DeleteProduct} from "./DeleteProduct";
import {AddCompany} from "./AddCompany";
import {DeleteCompany} from "./DeleteCompany";

class App extends Component {

    constructor(props) {
        super();
        this.state = {
            token: null,
            name: null
        };
    }

    setToken(newToken,newName)
    {
        this.setState({
            token: newToken,
            name: newName
        });
    }

  render() {
      return (
        <BrowserRouter>
            <div>
            <Header token={this.state.token} name={this.state.name}/>
            <Switch>
                <Route path='/' render={(props) => <Home test={this.state.token} />} exact/>
                <Route path='/login' render={(props) => <Login f={this.setToken.bind(this)} />}/>
                <Route path='/products' component={Products}/>
                <Route path='/company' component={Company}/>
                <Route path='/signUp' component={SignUp}/>
                <Route path='/successLogin' component={LoginSucces}/>
                <Route path='/failedLogin' component={LoginFailed}/>
                <Route path='/logout' render={(props) => <Logout f={this.setToken.bind(this)} />}/>
                <Route path='/addProduct' render={(props) => <AddProduct token={this.state.token} />}/>
                <Route path='/deleteProduct' render={(props) => <DeleteProduct token={this.state.token} />}/>
                <Route path='/addCompany' render={(props) => <AddCompany token={this.state.token} />}/>
                <Route path='/deleteCompany' render={(props) => <DeleteCompany token={this.state.token} />}/>
                <Route component={Empty} exact/>
            </Switch>
            </div>
        </BrowserRouter>
      );
  }
}

export default App;
