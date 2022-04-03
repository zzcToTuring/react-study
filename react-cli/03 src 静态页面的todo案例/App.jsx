import React from "react"
import Header from "../src/components/Header/index"
import List from "../src/components/List/index"
import Footer from "../src/components/Footer/index"
import "./App.css"

export default class App extends React.Component{
    render(){
        return(
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header/>
                    <List/>
                    <Footer/>
                </div>
            </div>
        )
        
    }
}