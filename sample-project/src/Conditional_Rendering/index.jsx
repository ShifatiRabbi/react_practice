import React, {Component} from "react";
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";

export default class Conditional_Rendering extends Component{

    constructor(props){
        super(props)

        this.state = {
            isLoggedIn : true,
        }
    }

    render(){
        return(
            <div>
                {this.state.isLoggedIn ? <HomePage /> : <LoginPage />}
            </div>
        )
    }
}