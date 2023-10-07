import React, { Component } from 'react';
import './LeftSide.css'
import ImageLayout from '../ImageLayout';
import covid from "../../../../images/covid.png";
import groups from "../../../../images/groups.png";
import memories from "../../../../images/memories.png";
import messengerKids from "../../../../images/messengerkids.png";
import ads from "../../../../images/ads.png";
import adsmanager from "../../../../images/admanager.png";
import blood from "../../../../images/blood.png";
import Business from "../../../../images/business.png";


class LeftSide extends Component {
    constructor(props) {
        super(props);
        this.state={ 
            data :[] 
        }
    }
    getData=()=>{
        let jsondata = [
            {
                "image" : "https://scontent.frba3-1.fna.fbcdn.net/v/t39.30808-1/358115554_2071258206549184_7887476093577911203_n.jpg?stp=cp0_dst-jpg_p86x86&_nc_cat=105&ccb=1-7&_nc_sid=5fac6f&_nc_eui2=AeH6eBzRR_XHRr5msEDt1XhxbarnANjmfv5tqucA2OZ-_kbnkNlfCOqlyAxwV6v0TZVTtG5OI-LRA1rUqq5EvT9Q&_nc_ohc=n5ewo9HTqDMAX9Jm-0n&_nc_ht=scontent.frba3-1.fna&oh=00_AfDAcxm_bZ_5aewRfm-OrCly8gCC9d763vwDR4qSNHG7HQ&oe=64F7E467",
                "text" : "Haaf Saa Sfn"
            },
            {
                "image" : covid,
                "text" : "COVID--19 Information Centre"
            },
            {
                "image" : groups,
                "text" : "Friends"
            },
            {
                "image" : memories,
                "text" : "Memories"
            },
            {
                "image" : messengerKids,
                "text" : "Messenger Kids"
            },
            {
                "image" : adsmanager,
                "text" : "Ad Center"
            },
            {
                "image" : ads,
                "text" : "Ads Manager"
            },
            {
                "image" : blood,
                "text" : "Blood Donation"
            },
            {
                "image" : Business,
                "text" : "Business Manager"
            }
        ];
        this.setState({data : jsondata});
    }

    componentDidMount(){
        this.getData();
    }

    render() { 
        return (
        <div>
            {
                this.state.data.map( (item) => (
                    <ImageLayout image={item.image} text={item.text} />
                ))
            }
        </div>
        );
    }
}
 
export default LeftSide;