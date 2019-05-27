import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import Navigator from './components/Navigator';



import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';


export default class Main extends Component {
    render() {
        return (
           
            <div>
               
                <Router>
                   <div>
                    
                    <Navigator/>
                    
                    
                    
                    
                    </div>
                </Router>
                
            </div>
         
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Main />, document.getElementById('example'));
}
