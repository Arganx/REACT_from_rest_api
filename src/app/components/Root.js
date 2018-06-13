import React from "react"

import {Header} from "./Header"
import {Home} from "./Home";

export class Root extends React.Component
{

    constructor(props) {
        super();
        this.state = {
            token: ""
        };
    }

    onGetToken(newToken)
    {
        this.setState({
            token: newToken
        });
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className={"col-xs-10 col-xs-offset-1"}>
                        <Header token = {this.state.token}/>
                    </div>
                </div>
                <div className="row">
                    <div className={"col-xs-10 col-xs-offset-2"}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}