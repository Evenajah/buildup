import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch, Fade } from 'react-router-dom';
import Pagination from "react-js-pagination";


export default class ListItem extends Component {

    constructor(props) {
        super(props);
              
    }

    unescapeHTML(html) {
        var escapeEl = document.createElement('p');
        escapeEl.innerHTML = html;
        return escapeEl.textContent;
    }

    render() {
        console.log(this.state);

        return (


            <div className="col-md-4 " >
                <Link className="LinkWithId" to={"/project/" + this.props.obj.id}>

                    <img src={"../images/" + this.props.obj.image} className="imageItems" /><br />

                    <h3>{this.props.obj.topic}</h3>
                    <div className="componentItem">


                        <i class="fas fa-th-large"></i> &nbsp; {this.props.obj.category}<br />


                        <i className="fas fa-calendar"></i> &nbsp; {this.props.obj.created_at.substr(0, 10)}<br />

                        <i className="fas fa-user"></i>&nbsp; {this.props.obj.user_create} <br />
                      
                    
                    </div>
                    <br />

                    {this.unescapeHTML(this.props.obj.detail.substr(0, 199) + '...')} <br />


                </Link>


            </div>



        );
    }
}