import React from "react";
import Hello from "./com/Hello/hello";
import Welcome from "./com/Welcome/welcome"

export default class App extends React.Component{
    render(){
        return(
            <div>
                <Hello></Hello>
                <Welcome></Welcome>
            </div>
        )
    }
}