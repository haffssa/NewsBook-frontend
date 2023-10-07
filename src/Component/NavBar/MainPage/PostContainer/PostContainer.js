import React, { Component } from 'react';
import "./PostContainer.css";
import Post from './Post';
//import port_img from "../../../../images/post.jpeg";

class PostContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: []
         }
    }

    getData=()=>{
         //getData =()=>{
         //   let json=[
            //    {
          //          "post_ID" : 1,
              //      "user_id" : 12345678,
                //    "user_img" :"url....",
                  //  "user_name" : "Haaf Saa Sfn",
                    //"description":"loved this...",
                 //   "post_img":port_img,
                   // "like" : "25"
              //  },
              //  {
                //    "post_ID" : 2,
                  //  "user_id" : 12345678,
                  //"user_img" :"url....",
                  //  "user_name" : "Haaf Saa Sfn",
                    //"description":"loved this...",
        //            "post_img":port_img,
          //          "like" : "25"
            //    },
              //  {
                //    "post_ID" : 3,
                  //  "user_id" : 12345678,
                   // "user_img" :"url....",
            //        "user_name" : "gsfgAGFH",
              //      "description":" hello everyOne...",
                //    "post_img":"hjgwhgqw",
                  //  "like" : "95"
               // }
           // ]
            //this.setState({data:json});
        //}
        // ]
        const thisContext=this;
        fetch("http://localhost:8080/news")
        .then(response => response.json())
        .then(json => {
            thisContext.setState({data : json});
        })
        .catch(error =>{

        })
        
    }

    componentDidMount(){
        this.getData();
    }
    render() { 
        return ( 
            <div>
                {
                    this.state.data.map((item)=>(
                        <Post object={item} />
                    ))
                }
            </div>
    
    

        );
    }
}
 
export default PostContainer;