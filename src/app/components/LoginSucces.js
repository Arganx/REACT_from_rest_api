import React from "react"
import  { Link } from 'react-router-dom'

export class LoginSucces extends React.Component{

    constructor(props) {
        super();
    }

    render(){
        return(
            <div>
            <h1>Successfully logged in</h1>
            <Link to="/">Return to home page</Link>
            </div>
        )
    }
}