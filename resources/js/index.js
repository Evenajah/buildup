import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import User from './components/users';
import Example from './components/Example';
import CreateItem from './components/CreateItem';
import BlogArticle from './components/BlogArticle';
import DisplayItem from './components/DisplayItem';
import EditItem from './components/EditItem';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';


export default class Index extends Component {
    render() {
        return (
            <div className="container">
                
                <Router>
                    <div>
                        <Link to ="/users">Users</Link>
                        <Link to ="/users/Create">CreateUser</Link>
                        <Link to = "/display-item">display-item</Link>
                        <Link to = "/">Home</Link>

                      <Route path="/edit/:id" component={EditItem} />
                       <Route path="/" exact component={Example}/>     
                       <Route path="/users" exact component={User}/>  
                       <Route path="/users/Create" exact component={CreateItem}/> 
                       <Route path="/display-item" component={DisplayItem} />
                       
                    </div>

                </Router>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Index />, document.getElementById('example'));
}
