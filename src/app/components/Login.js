import React from "react"
import  { Redirect,Link } from 'react-router-dom'

export class Login extends React.Component{


    constructor(props) {
        super();
        this.state = {
            email: null,
            password: null,
            redirect: false,
            user: null
        };
    }

    onHandleChangeEmail(event)
    {
        this.setState({
            email: event.target.value
        });
       // console.log(this.state.email);
    }

    onHandleChangePassword(event)
    {
        this.setState({
            password: event.target.value
        });
        //console.log(this.state.password);
    }

    setRedirect()
    {
        this.setState({
            redirect: true
        });
    }

    renderRedirect()
    {
        if (this.state.redirect)
        {
            if(this.ok===1) {
                return <Redirect to="/successLogin"/>;
            }
            else
            {
                return <Redirect to="/failedLogin"/>;
            }
        }
    }

    show =0;
    ok =0;
    login(event)
    {
        console.log("Login");
        event.preventDefault();
        fetch('/user/login', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                "email": this.state.email,
                "password":this.state.password
            })
        }).then(response => response.json())
            .then(user=> {
                if(!user.error)
                {
                    this.setState({user});
                    if(this.state.user.message==="Login successful")
                    {
                        this.props.f(this.state.user.token,this.state.email);
                        this.ok=1;
                    }
                    this.setRedirect();
                }
            });
        this.show=1;
    }

    result()
    {
        if(this.show)
        {
            if(this.state.user) {
                if (this.state.user.message) {
                    return <li className='list-group-item'>
                        <p>Message: {this.state.user.message}</p>
                        <p>Token: {this.state.user.token}</p>
                    </li>
                }
                else {
                    return <p>{this.state.user.error}</p>
                }
            }
            else
            {
                return <p>Error</p>
            }
        }
    }


    render(){


        return(
            <div className='container'>
                {
                    this.renderRedirect()
                }
                <h1>Login</h1>
                <input type="text" defaultValue="Email"
                       onChange={(event) => this.onHandleChangeEmail(event)}
                />
                <br/>
                <br/>
                <input type="password" defaultValue="Password"
                       onChange={(event) => this.onHandleChangePassword(event)}
                />
                <br/>
                <br/>
                <button className="btn btn-primary" onClick={(event) => this.login(event)}> Login </button>
                <hr/>
                <Link to="/signUp">If you do not have an account signUp here</Link>
                {this.result()}

            </div>
        )
    }
}