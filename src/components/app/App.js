import React from "react";
import Menu from "../home/Menu";

export default class App extends React.PureComponent{
    constructor(props){
        super(props);
    }
    render(){
        return(<Menu/>);
    }
}