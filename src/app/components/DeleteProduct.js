import React from "react"

export class DeleteProduct extends React.Component{

    constructor(props) {
        super();
        this.state = {
            products: [],
            id: null,
            user: null,
            show: 0
        };
    }

    componentDidMount() {
        fetch("./products").then(response => response.json())
            .then(products=> this.setState({products}));
    }


    onChange(event)
    {

        var e = document.getElementById("ddlViewBy");
        var strUser = e.options[e.selectedIndex].value;

        this.setState({
            id: strUser
        });
    }

    delete(event)
    {
        fetch('/products/'+this.state.id, {
            method: 'delete',
            headers: {'Content-Type':'application/json',
                'Authorization': 'Bearer ' + this.props.token}
        }).then(response => response.json())
            .then(user=> {
                if(!user.error)
                {
                    this.setState({user});
                    this.setState({
                        show: 1
                    });
                }

            });
    }

    show()
    {
        if(this.state.show===1)
        {
            return <p>Product deleted</p>
        }
    }


    render(){
        return(
            <div>
                <h1>Delete</h1>


                <select id="ddlViewBy" className='list-group' onChange={(event) => this.onChange(event)}>
                    <option></option>
                    {this.state.products.map(products =>
                                <option value={products._id}>{products.name}</option>
                    )}

                </select>
                <br/>
                <button className="btn btn-primary" onClick={(event) => this.delete(event)}> Delete </button>
                <hr/>
                {this.show()}
            </div>

        )
    }
}