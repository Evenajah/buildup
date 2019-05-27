// DisplayItem.js

import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TableRowFollow from './TableRowFollow';
import Pagination from "react-js-pagination";
import NoItem from './NoItem';

import Footer from './Footer';
import Loading from './Loading';

export default class MyFollowProject extends Component {
    constructor(props) {
        super(props);

        $('#modalAccount').modal('hide');
        $("html, body").animate({ scrollTop: 0 }, "fast");



        document.title = "MyFollowProject";

        this.state = {
            requestItems: '',
            activePage: 1,
            itemsCountPerPage: 1,
            totalItemsCount: 2,
            pageRangeDisplayed: 3
        };

        this.handlePageChange = this.handlePageChange.bind(this);
    }


    componentDidMount() {
        axios.get(`http://localhost:8181/api/accountData/${this.props.userProp}/edit`)
            .then(response => {

                this.setState({
                    requestItems: response.data.data
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }



    tabRow() {

        if (this.state.requestItems instanceof Array) {
            if (this.state.requestItems.length == 0) {
                return <NoItem />
                               
            }
            
            return this.state.requestItems.map(function (object, i) {
                return <TableRowFollow obj={object} key={i} />;

            })
        }else{
            return <Loading/>
        }



    }

    //pagination
    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({ activePage: pageNumber });

        axios.get(`http://localhost:8181/api/accountData/${this.props.userProp}/edit?page=` + pageNumber)
            .then(response => {
                this.setState({

                    requestItems: response.data.data,
                    itemsCountPerPage: response.data.per_page,

                    totalItemsCount: response.data.total,
                    activePage: response.data.current_page,

                });
                $("html, body").animate({ scrollTop: 0 }, "fast");

            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {

        console.log(this.props);
        console.log(this.state);

        return (
            <div className="Myproject">


                <h1 class="headerMyproject"><br />

                </h1>



                <table className="table table-striped table-secondary">
                    <thead className="tableHead">
                        <tr>
                            <td>ID</td>
                            <td>Category</td>
                            <td>Topic</td>
                            <td class="detailTable">Detail</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>

                        {this.tabRow()}

                    </tbody>

                    <div className="pagiNation">

                        <Pagination

                            activePage={this.state.activePage}
                            itemsCountPerPage={this.state.itemsCountPerPage}
                            totalItemsCount={this.state.totalItemsCount}
                            pageRangeDisplayed={3}
                            onChange={this.handlePageChange}
                            itemClass='page-item'
                            linkClass='page-link'

                        />

                    </div>


                </table>


                {/* <Footer /> */}
            </div>
        )
    }
}
