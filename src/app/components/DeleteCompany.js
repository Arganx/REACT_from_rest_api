import React from "react"

export class DeleteCompany extends React.Component{

    constructor(props) {
        super();
        this.state = {
            company: [],
            id: null,
            user: null,
            show: 0
        };
    }

    componentDidMount() {
        fetch("./company").then(response => response.json())
            .then(company=> this.setState({company}));
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
        fetch('/company/'+this.state.id, {
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



    render(){
        return(
            <div>
                <h1>Delete Company</h1>


                <select id="ddlViewBy" className='list-group' onChange={(event) => this.onChange(event)}>
                    <option></option>
                    {this.state.company.map(company =>
                        <option value={company._id}>{company.name}</option>
                    )}

                </select>
                <br/>
                <button className="btn btn-primary" onClick={(event) => this.delete(event)}> Delete </button>
                <hr/>
            </div>

        )
    }
}