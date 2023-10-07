import React, { Component, useLayoutEffect } from 'react';
import "./Layout.css";
import { Grid } from '@mui/material';
import LeftSide from './LeftSide/LeftSide';
import UploadSection from './UploadSection/UploadSection';
import PostContainer from './PostContainer/PostContainer';
import RightSide from './RightSidePanel/RightSide';

class Layout extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div className="main__container">
                <Grid container >
                    <Grid item xs={3}>
                        <LeftSide />
                    </Grid>
                    <Grid item xs={6} className="middleContainer">

                        <UploadSection update={this.letUpdate} />
                        <PostContainer ref="child"/>
                    </Grid>
                    <Grid item xs={3}>
                        <RightSide />
                    </Grid>
                </Grid>
            </div>
         );
    }
}
 
export default Layout;