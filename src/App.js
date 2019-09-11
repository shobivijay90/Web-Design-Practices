import React from "react";
import Design from "./Design";
import webData from "./webData";
import "./styles/styles.css";

class App extends React.Component{
  
constructor(){
    super()
    this.state =  { 
      data: webData
    }
  }

  render(){     
    const DataComponents = this.state.data.map(points => <Design key={points.id} data={points.data}/>); 

    return(
      <div className="container">
      <div className="App">
      <h2>WEB DESIGN BEST PRACTICES</h2>
      <br/>
          {DataComponents}
      </div>
      </div>
    )
  }
}

export default App