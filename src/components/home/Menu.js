import React from "react";

import {RouteButton} from "../button/Button";

export default class Menu extends React.PureComponent{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h1>SnapHole</h1>
                <RouteButton title="Camera"/>
                <RouteButton title="My Service Requests"/>
            </div>
        );
    }
}