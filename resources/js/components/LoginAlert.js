import React, { Component } from 'react';
import Footer from './Footer';
import Home from './Home';
import axios from 'axios';





export default class LoginAlert extends Component {
    constructor() {
        super();

    }



    render() {

        console.log(this.props);

        return (

            <div className="WrapLoginAlert">

                <div className="LoginAlert">
                    <span className="iconLoginAlert"><i class="fas fa-times-circle"></i></span>

                    <h2> Please Sign in </h2>
                    <h4>You cannot access in module </h4>
                    <hr />

                    {/*login*/}
                    
                    <a className="nav-link" data-toggle="modal" id="toggle" data-target="#myModal" href="">
                        <i class="fas fa-sign-in-alt"></i> &nbsp; Sign in here </a>
                    <br />


                    {/*regis*/}

                    <a className="nav-link" data-toggle="modal" id="toggle" data-target="#myModalRegis" href="">
                        <i class="fas fa-user-plus"></i>&nbsp; Create account here </a>

                </div>








            </div>

        );

    }
}