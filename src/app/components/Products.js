import React from "react"

export class Products extends React.Component{

    state = {products: []};

    componentDidMount()
    {
        fetch("./products").then(response => response.json())
            .then(products=> this.setState({products}));
    }


    render(){
        return(
            <div className="App">
                <h1>Products</h1>
                <ul className='list-group'>
                    {this.state.products.map(products =>
                        <div className='container'>
                            <li className='list-group-item' key={products.id}>
                                <p>Name: {products.name}</p>
                                <p>Type: {products.type}</p>
                                <p>Average Price: {products.averagePrice}</p>
                            </li>
                        </div>
                    )}

                </ul>
            </div>
        )
    }
}