import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';



export default class BlogArticle extends Component {
    constructor(props){
        super(props);
        this.state ={
            post : {}
        };
    }

    componentDidMount(){
        axios.get("/api/users/" + this.props.match.params.id).then(response =>{
            this.setState({post : response.data[0]});
        }).catch(error => console.log(error));
    }


    render() {
       console.log(this.props);
        return (
            <div className="container">
                <h1> {this.state.post.name} </h1>
            </div>
        );
    }
}

