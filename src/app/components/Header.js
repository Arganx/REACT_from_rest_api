import React from "react";
import {Link} from "react-router-dom";

export const Header = (props) => {

    function logout()
    {
        if(props.token !== null)
        {
            return <li><Link to={"/logout"}>Logout</Link></li>
        }
    }

    function addProduct()
    {
        if(props.token !== null)
        {
            return <li><Link to={"/addProduct"}>Add Product</Link></li>
        }
    }

    function addCompany()
    {
        if(props.token !== null)
        {
            return <li><Link to={"/addCompany"}>Add Company</Link></li>
        }
    }

    function login()
    {
        if(props.token === null)
        {
            return <li><Link to={"/login"}>Login</Link></li>
        }
    }


    function deleteProduct()
    {
        if(props.token !== null)
        {
            return <li><Link to={"/deleteProduct"}>Delete Product</Link></li>
        }
    }

    function deleteCompany()
    {
        if(props.token !== null)
        {
            return <li><Link to={"/deleteCompany"}>Delete Company</Link></li>
        }
    }

    function welcome()
    {
        if(props.token !== null)
        {
            return <p>Welcome {props.name}</p>
        }
    }

    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        {welcome()}
                        <li><Link to={"/"}>Home</Link></li>
                        {login()}
                        <li><Link to={"/company"}>Company </Link></li>
                        <li><Link to={"/products"}>Products</Link></li>
                        {addProduct()}
                        {addCompany()}
                        {deleteProduct()}
                        {deleteCompany()}
                        {logout()}
                    </ul>
                </div>
            </div>
        </nav>
    );
};