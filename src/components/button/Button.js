import React from "react";

import "./button.css"

export class RouteButton extends React.PureComponent{
    constructor(props){
        super(props);
    }
    render(){
        return(<button className="route__button">{this.props.title}</button>)
    }
} 