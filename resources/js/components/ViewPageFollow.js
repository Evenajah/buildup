import React, { Component } from 'react';
import Footer from './Footer';
import ListItemFollow from './ListItemFollow';
import Category from './Category';
import Loading from './Loading';
import { BrowserRouter as Router, Link, Route, Switch, Fade } from 'react-router-dom';
import Pagination from "react-js-pagination";


export default class ViewPageFollow extends Component {

    constructor(props) {
        super(props);

        document.title = "View Follow";
        $("html, body").animate({ scrollTop: 0 }, "fast");

        this.state = {
            recieveData: '',
            activePage: 1,
            itemsCountPerPage: 1,
            totalItemsCount: 2,
            pageRangeDisplayed: 3
        }

        this.handlePageChange = this.handlePageChange.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:8181/api/statusFollow/create')
            .then(response => {
                this.setState({ recieveData: response.data.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    //pagination
    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({ activePage: pageNumber });

        axios.get('http://localhost:8181/api/statusFollow/create?page=' + pageNumber)
            .then(response => {
                this.setState({

                    recieveData: response.data.data,
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




    List() {
        
        if (this.state.recieveData instanceof Array) {
            return this.state.recieveData.map(function (object, i) {
                return <ListItemFollow obj={object} key={i} />;
            })
        } else {
            return <Loading />
        }
    }


    render() {
        console.log(this.state);
        return (
            <div>
                <div className="WrapExplore">
                    <br /><br /><br /><br /><br /><br />
                    <div className="container-fluid" id="ContainerExplore">



                        <div class="TopicSegment"><i class="fas fa-star"></i> &nbsp;Top Follow</div>

                        <div className="row">

                            {this.List()}

                            <br />

                            {/*จัดการหน้าเพจ*/}
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

                            <br /> <br /> <br /> <br />
                        </div>

                        


                    </div>
                    <br />
                    <br />
                   
                    <Category />

                    <Footer />
                </div>
            </div>



        );
    }
}