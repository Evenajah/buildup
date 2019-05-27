import React, { Component } from 'react';
import Navigator from './Navigator';
import SearchBar from './SearchBar';
import Feature from './Feature';
import Parallax from './Parallax';
import Footer from './Footer';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import CreateItem from './CreateItem';


export default class Home extends Component {

    constructor(props) {
        super(props);

        document.title = "BuildUp!";
        $("html, body").animate({ scrollTop: 0 }, "fast");

        if (this.props.swalProp == "from Build page") {
            swal("Good job!", "You clicked the button!", "success");
        }
    }

    render() {
        return (

            <div>

                

                <SearchBar />
               
                <div className="row content">
                    <div className="col-2"></div>

                </div>
                {/*end Landing page*/}  {/*Landing page*/}

                <Feature />
                <Parallax />
                <Footer />

            </div>
        );
    }
}
