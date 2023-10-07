import { Avatar, Badge } from '@mui/material';
import React, { Component } from 'react';
import "./Layout.css";
import {getImage} from "../../../GetImage.js";

class ImageLayout extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (
            <div className="image__container">
            <div className="image__imglay">
                {
                    this.props.status ? 
                    <Badge color="secondary" overlap="circle" badgeContent=" " variant="dot">
                        <Avatar className="image__img" src={getImage(this.props.image)} />
                    </Badge>
                    : this.props.status==false ?
                    <Avatar className="image__img" src={getImage(this.props.image)} />
                    : <Avatar className="image__img" src={this.props.image} />
                }
            
            </div>
            <div className="image__text">
                {this.props.text}
            </div>
        </div>
        );
    }
}
 
export default ImageLayout;