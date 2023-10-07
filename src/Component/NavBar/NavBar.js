import React, { Component } from 'react';
import "./NavBar.css";
import Grid from '@mui/material/Grid';
import fblogo from "../../images/logo.png";
import home from "../../images/home.svg";
import page from "../../images/pages.svg";
import market from "../../images/market.svg";
import watch from "../../images/watch.svg";
import group from "../../images/groups.svg";
import { Avatar } from '@mui/material';


class NavBar extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (
            <div>
                <Grid container className="navbar_main">
                    <Grid items xs ={3}>
                        <div className="navbar_leftbar">
                            <img className="navbar_logo" src={fblogo} width="35px"/>
                            <input className="navbar_search" type="text" placeholder="Search Bar"/>
                        </div>
                    </Grid>
                    <Grid items xs ={6}>
                        <div className="navbar_container">
                            <div className="navbar_tabs active">
                                <img src={home} height="35px" width="35px"/>
                            </div>
                            <div className="navbar_tabs">
                                <img src={page} height="35px" width="35px"/>
                            </div>
                            <div className="navbar_tabs">
                                <img src={watch} height="35px" width="35px"/>
                            </div>
                            <div className="navbar_tabs">
                                <img src={market} height="35px" width="35px"/>
                            </div>
                            <div className="navbar_tabs">
                                <img src={group} height="35px" width="35px"/>
                            </div>
                        </div>
                    </Grid>
                    <Grid items xs ={3}>
                        <div className="navbar_right">
                            <div className="navbar_righttab">
                                <Avatar className="navbar_righting" src="https://scontent.frba3-1.fna.fbcdn.net/v/t39.30808-1/358115554_2071258206549184_7887476093577911203_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=105&ccb=1-7&_nc_sid=fe8171&_nc_eui2=AeH6eBzRR_XHRr5msEDt1XhxbarnANjmfv5tqucA2OZ-_kbnkNlfCOqlyAxwV6v0TZVTtG5OI-LRA1rUqq5EvT9Q&_nc_ohc=n5ewo9HTqDMAX9Jm-0n&_nc_ht=scontent.frba3-1.fna&oh=00_AfCEqsDAQ42xq_vxuBUJ8BHJDgDhQye7CVcs28uVFEIJhw&oe=64F7E467"/>
                                <div className="navbar_profilename">hafsa</div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div> 
        );
    }
}
 
export default NavBar;