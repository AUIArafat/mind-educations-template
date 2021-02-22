import React, { Component } from "react";
import loader from "../assets/images/loading.gif"
import LandingPages from "../pages/LandingPages";

class App extends Component {
  state = {
    loading: true
  }
  handleLoader = () => {
    setTimeout(() =>{
      this.setState({
        loading: false
      })
    }, 1500)
  }
  render() {
    if(this.state.loading){
      this.handleLoader();
    }
    return (
      <div className="App">
        {this.state.loading ?
          (<div class="loader_bg">
            <div class="loader"><img src={loader} alt="#" /></div>
          </div>) : null 
        }
        <LandingPages/>
      </div>
    );
  }
}

export default App;
