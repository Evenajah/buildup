import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';



export default class Users extends Component {
    constructor(){
        super();
        this.state = {
            usersData : []
        }
        

    }
    
    componentWillMount(){
        axios.get('/api/users').then(response => {
            this.setState({
                usersData: response.data
            });
        }).catch(errors =>{console.log(errors);})
    }

    render() {
        console.log(this.state);
        return (
            <div className="container">
                {this.state.usersData.map(users => 

                <li>
                    <Link to = {"/users/" + users.id}>{users.name}</Link>
                </li>
                
                )}
            </div>
        );
    }
}

