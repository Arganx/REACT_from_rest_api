import React from "react"
import  { Link } from 'react-router-dom'

export class LoginFailed extends React.Component{

    constructor(props) {
        super();
    }

    render(){
        return(
            <div>
            <h1>Failed logged in</h1>
            <Link to="/login">Try again</Link>
            </div>
        )
    }
}