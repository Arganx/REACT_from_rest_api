import React from "react"
import {Link} from "react-router-dom"

export class SignUp extends React.Component{


    constructor(props) {
        super();
        this.state = {
            email: null,
            password: null,
            name: null,
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

    onHandleChangeName(event)
    {
        this.setState({
            name: event.target.value
        });
        //console.log(this.state.password);
    }

    show = 0;

    onSignUp(event){
        console.log("SignUp");
        event.preventDefault();
        fetch('/user/signUp', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                "email": this.state.email,
                "name":this.state.name,
                "password":this.state.password
            })
        }).then(response => response.json())
            .then(user=> {
                if(!user.error)
                {
                    this.setState({user})
                }

            });
        this.show=1;
    };

    result()
    {
        if(this.show)
        {
            /*return <p>{this.state.user.map(user =>
                <div className='container'>
                    <p>Message: {user.message}</p>
                </div>
            )}</p>*/
            if(this.state.user) {
                if (this.state.user.message) {
                    return <p>{this.state.user.message}</p>
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
                <h1>SignUp</h1>
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
                <input type="text" defaultValue="Name"
                       onChange={(event) => this.onHandleChangeName(event)}
                />
                <br/>
                <br/>
                <button className="btn btn-primary" onClick={(event) => this.onSignUp(event)}> SignUp </button>
                <hr/>
                <Link to="/login">Return to login</Link>
                {this.result()}

            </div>
        )
    }
}