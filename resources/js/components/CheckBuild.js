import React, { Component } from 'react';
import Footer from './Footer';
import axios from 'axios';
import Category from './Category';
import Build from './Build';
import Home from './Home';
import LoginAlert from './LoginAlert';




export default class CheckBuild extends Component {




  render() {

    if (this.props.userProp == "Sign in & Create account") {

      return <LoginAlert/>
   

    } else {

      return <Build userProp = {this.props.userProp}/>

    }

  }
}