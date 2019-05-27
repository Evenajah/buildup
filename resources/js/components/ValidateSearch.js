

import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Footer from './Footer';

export default class ValidateSearch extends Component {

    render() {

        return (
            <div className="WrapValidateSearch">

                <SearchBar /><br /><br/><br/><br/><br/>
                <center>
                <h1>


                    
                    <span>Oops! Please input keyword to search</span>


                </h1>

                </center>
                <br/><br/><br/>
                <Footer/>

            </div>
        )
    }
}
