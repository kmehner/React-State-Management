import React, { Component } from "react";
import { Routes, Route } from 'react-router-dom' // import router
// import ClassTable from "./views/ClassTable";
import PostCard from "./views/PostCard";

export default class App extends Component{
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     students: []
  //   }
  // }

  // componentDidMount(){
  //   console.log('App mounted')
  //   fetch('https://kekambas-bs.herokuapp.com/kekambas')
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data)
  //       let students = data
  //       this.setState({students})
  //     })

  // }

  render(){
    
    return(
      <div>
        <h1 className="text-center bg-dark text-light p-2">Kekambus Blog</h1>
        <div className="container">
            <Routes>
              <Route path='/' element={<PostCard/>} />
            </Routes>
        </div>
      </div>
    )
  }
}

