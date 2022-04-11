import React, { Component } from "react";
import ClassTable from "./views/ClassTable";

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      students: []
    }
  }

  componentDidMount(){
    console.log('App mounted')
    fetch('https://kekambas-bs.herokuapp.com/kekambas')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        let students = data
        this.setState({students})
      })

  }

  render(){
    console.log("App rendered")
    return(
      <>
        <div className="container">
          <ClassTable students = {this.state.students}  />
        </div>

      </>
    )
  }
}

