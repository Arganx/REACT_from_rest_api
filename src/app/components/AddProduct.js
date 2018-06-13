import React from "react"

export class AddProduct extends React.Component{


    constructor(props) {
        super();
        this.state = {
            name: null,
            averagePrice: null,
            type: null,
            productImage: null,
            user: null,
            show: 0
        };
    }

    onHandleChangeType(event)
    {
        this.setState({
            type: event.target.value
        });
        // console.log(this.state.email);
    }

    onHandleChangeAveragePrice(event)
    {
        this.setState({
            averagePrice: event.target.value
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

    onHandleChangeProductImage(event)
    {
        this.setState({
            productImage: event.target.value
        });
        //console.log(this.state.password);
    }


    onAdd(event){
        event.preventDefault();
        this.setState({
            show: 1
        });
        console.log("Post Product");

        fetch('/products', {
            method: 'post',
            headers: {'Content-Type':'application/json',
            'Authorization': 'Bearer ' + this.props.token},
            body: JSON.stringify({
                "type": this.state.type,
                "name":this.state.name,
                "averagePrice":this.state.averagePrice,
                "productImage": this.state.productImage
            })
        }).then(response => response.json())
            .then(user=> {
                if(!user.error)
                {
                    this.setState({user})
                }

            });
    };

    result()
    {
        console.log(this.state.show);
        if(this.state.show===1)
        {
            console.log("In2");
            /*return <p>{this.state.user.map(user =>
                <div className='container'>
                    <p>Message: {user.message}</p>
                </div>
            )}</p>*/
            if(this.state.user) {
                console.log("In3");
                if (this.state.user.message) {
                    console.log("here2");
                    return <p>{this.state.user.message}</p>
                }
                else {
                    console.log("here");
                    return <p>{this.state.user.error.message}</p>
                }
            }
            else
            {
                console.log("here3");
                return <p>Error</p>
            }
        }
    }

    render(){
        return(
            <div className='container'>
                <h1>Add Product</h1>
                <input type="text" defaultValue="Name"
                       onChange={(event) => this.onHandleChangeName(event)}
                />
                <br/>
                <br/>
                <input type="text" defaultValue="Type"
                       onChange={(event) => this.onHandleChangeType(event)}
                />
                <br/>
                <br/>
                <input type="text" defaultValue="Average Price"
                       onChange={(event) => this.onHandleChangeAveragePrice(event)}
                />
                <br/>
                <br/>
                <input type="file"
                       onChange={(event) => this.onHandleChangeProductImage(event)}
                />
                <br/>
                <br/>
                <button className="btn btn-primary" onClick={(event) => this.onAdd(event)}> Add </button>
                <hr/>
                {this.result()}

            </div>
        )
    }
}