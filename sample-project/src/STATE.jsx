import React, {Component} from "react";

export class STATE extends Component{

    constructor(props){
        super(props)

        this.state = {
            count : 0,
        }
    }

    incCount = () => {
        this.setState({
            count : this.state.count + 1,
        })
    }

    decCount = () => {
        this.setState({
            count : this.state.count - 1,
        })
    }

    render(){
        return(
            <div>
                <h1>Count : { this.state.count }</h1>
                <button onClick={this.incCount} disabled={this.state.count === 5 ? true : false}>+</button>
                <button onClick={this.decCount} disabled={this.state.count === 0 ? true : false}>-</button>
            </div>
        )
    }
}

