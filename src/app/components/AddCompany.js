import React from "react"

export class AddCompany extends React.Component{


    constructor(props) {
        super();
        this.state = {
            name: null,
            netIncome: null,
            location1: null,
            location2: null,
            products: [],
            user: null,
            show: 0,
            accept: 0,
            tmp: 0,
            sendProducts: []
        };
    }

    componentDidMount() {
        fetch("./products").then(response => response.json())
            .then(products=> this.setState({products}));
    }

    onHandleChangeName(event)
    {
        this.setState({
            name: event.target.value
        });
    }
    onHandleChangeNetIncome(event)
    {
        this.setState({
            netIncome: event.target.value
        });
    }

    onHandleChangeLatitude(event)
    {
        this.setState({
            location1: event.target.value
        });
    }

    onHandleChangeLong(event)
    {
        this.setState({
            location2: event.target.value
        });
    }

    changeTMP(event)
    {
        this.setState({
            tmp: event.target.value
        });
        console.log(this.state.tmp)
    }

    changeProductNumber()
    {
        this.setState({
            accept: 1
        });
        console.log(this.state.accept)
    }

    onChange(event)
    {
        var help =[];
        var i;
        for (i = 0; i < this.state.tmp; i++) {
            var e = document.getElementById(i);
            var strUser = e.options[e.selectedIndex].value;
            console.log(strUser);
            help[i]=strUser;
        }


        this.setState({
            sendProducts: help
        });
    }


    addProducts()
    {
        if(this.state.accept === 0)
        {
            return <div>
                <input type="number" onChange={(event) => this.changeTMP(event)}/>
                <button className="btn btn-primary" onClick={(event) => this.changeProductNumber(event)}>Accept amount of products</button>
            </div>
        }
        else {

            var x = [];

            var i;
            for (i = 0; i < this.state.tmp; i++) {
                x[i] = <div>
                    <select id={i} className='list-group' onChange={(event) => this.onChange(event,i)}>
                    <option></option>
                    {this.state.products.map(products =>
                        <option value={products._id}>{products.name}</option>
                    )}

                </select>
                    <br/><br/></div>;
            }
            return <ul>
                {x}
            </ul>
        }
    }

    show =0;

    onAdd(event)
    {
        event.preventDefault();
        this.setState({
            show: 1
        });
        console.log("Post Company");

        fetch('/company', {
            method: 'post',
            headers: {'Content-Type':'application/json',
                'Authorization': 'Bearer ' + this.props.token},
            body: JSON.stringify({
                "netIncome": this.state.netIncome,
                "name":this.state.name,
                "location": [this.state.location1,this.state.location2],
                "productId": this.state.sendProducts
            })
        }).then(response => response.json())
            .then(user=> {
                if(!user.error)
                {
                    this.setState({user})
                }

            });
    }

    sending(event)
    {
        console.log(this.state.sendProducts);
    }

    render(){
        return(
            <div className='container'>
                <h1>Add Company</h1>
                <input type="text" defaultValue="Name"
                       onChange={(event) => this.onHandleChangeName(event)}
                />
                <br/>
                <br/>
                <input type="text" defaultValue="Net income"
                       onChange={(event) => this.onHandleChangeNetIncome(event)}
                />
                <br/>
                <br/>
                <input type="text" defaultValue="Lat"
                       onChange={(event) => this.onHandleChangeLatitude(event)}
                />
                <input type="text" defaultValue="Lon"
                       onChange={(event) => this.onHandleChangeLong(event)}
                />
                <br/>
                <br/>

                {this.addProducts()}
                <button className="btn btn-primary" onClick={(event) => this.onAdd(event)}> Add </button>
                <button className="btn btn-primary" onClick={(event) => this.sending(event)}> Show </button>
                <hr/>

            </div>
        )
    }
}