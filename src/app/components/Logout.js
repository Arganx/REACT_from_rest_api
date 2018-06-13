import React from "react"
import  { Redirect} from 'react-router-dom'

export class Logout extends React.Component{

    constructor(props) {
        super();
    }

    log()
    {
        if(this.props.token !==null)
        {
            this.props.f(null);
        }
        return <Redirect to="/"/>;
    }

    render(){
        return(
            <div>
                <h1>Logout</h1>
                {this.log()}
            </div>

        )
    }
}