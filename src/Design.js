import React from "react"

class Design extends React.Component{
 
    render(){
        return (
            <div className="points">
            <input type="checkbox"/>
            <p>{this.props.data}</p>
            </div>
        )
    }
}

export default Design