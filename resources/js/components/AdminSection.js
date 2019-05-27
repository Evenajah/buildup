import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import TableRow from './TableRow';
import Pagination from "react-js-pagination";
import NoItem from './NoItem';
import Footer from './Footer';
import Loading from './Loading';


class AdminSection extends Component {

    constructor(props) {
        super(props);

        $('#modalAccount').modal('hide');
        $("html, body").animate({ scrollTop: 0 }, "fast");
        document.title = "AdminSection";
    }


   



   
    render() {
        return (


            <div class="AdminSec">
                <div className="WrapAdminSection">
                    <h1><i class="fas fa-unlock-alt"></i></h1>
                    <h2>Admin Section</h2><br/>
                    <Link to="/transaction" className="formAccount"><i class="fas fa-history"></i>&nbsp; View transaction history</Link>
                    <br/>

                </div>
            </div>


        );
    }
}

export default AdminSection;