import React from "react"

export class Company extends React.Component{

    state = {company: [],
    name: null};

    componentDidMount()
    {
        fetch("./company").then(response => response.json())
            .then(company=> this.setState({company}));
    }

    a(company)
    {


       /* var text=[];
        return this.state.company.map(company=>{
            var i;
            for (i = 0; i < company.products.length; i++) {
                //console.log(company.products[i]);

                text[i] = <p>{company.products[i]}</p>;

            }
            return <li className='list-group-item' key={company.id}>{text}</li>;
        });*/

/*       var text =[];
       var i=0;
       company.products.forEach((product)=>{
           text[i] = <p>{product}</p>;
           i=i+1;
       })
        return <li className='list-group-item' key={company.id}>{text}</li>;*/

        var text =[];
        var i=0;
        company.products.forEach((product)=>{

            fetch("./products/"+product).then(response => response.json())
                .then(products=> {
                    if (!products.message) {
                        console.log(products.product.name);

                    }
                });


            text[i] = <p>{product}</p>;
            i=i+1;
        });
        return <li className='list-group-item' key={company.id}>{text}</li>;



        //return text;
    }


    render(){
        return(
            <div className="App">
                <h1>Company</h1>
                <ul className='list-group'>
                    {this.state.company.map(company =>
                        <div className='container'>
                            <li className='list-group-item' key={company.id}>
                                <p>Name: {company.name}</p>
                                <p>Type: {company.netIncome}</p>
                                <p>Location: </p>
                                <ul className='list-group'>
                                    <li className='list-group-item' key={company.id}>
                                        <p>longitude:{company.location[0]}</p>
                                        <p>latitude:{company.location[1]}</p>
                                    </li>
                                </ul>

                                <p>Products:</p>
                                <ul className='list-group'>
                                {this.a(company)}
                                </ul>
                            </li>

                        </div>
                    )}

                </ul>
            </div>
        )
    }
}