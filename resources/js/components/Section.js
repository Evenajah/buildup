import React, { Component } from 'react';
import Footer from './Footer';
import ListItem from './ListItem';
import Category from './Category';
import NoItem from './NoItem';
import Loading from './Loading';
import { BrowserRouter as Router, Link, Route, Switch, Fade } from 'react-router-dom';
import Pagination from "react-js-pagination";




export default class Section extends Component {

    constructor(props) {
        super(props);

        document.title = `Category : ${this.props.match.params.id}`;
        $("html, body").animate({ scrollTop: 0 }, "fast");

        this.state = {

            listCategory: '',

            //paginate state
            activePage: 1,
            itemsCountPerPage: 1,
            totalItemsCount: 2,
            pageRangeDisplayed: 1


        }

        this.handlePageChange = this.handlePageChange.bind(this);

    }


    componentDidMount() {

        //get section

        axios.get(`http://localhost:8181/api/Category/${this.props.match.params.id}/edit`)
            .then(response => {
                this.setState({
                    listCategory: response.data.data
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }


    List() {
        if (this.state.listCategory instanceof Array) {

            if (this.state.listCategory.length == 0) {
                return <NoItem />;
            }

            return this.state.listCategory.map(function (object, i) {
                return <ListItem obj={object} key={i} />;
            })
        }
        else {

            //หน้าโหลด
            return <Loading />

        }
    }


    //pagination
    handlePageChange(pageNumber) {

        console.log(`active page is ${pageNumber}`);

        this.setState({ activePage: pageNumber });

        axios.get(`http://localhost:8181/api/Category/${this.props.match.params.id}/edit?page=` + pageNumber)
            .then(response => {
                this.setState({

                    listCategory: response.data.data,
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

        console.log(this.state);


        //loading
        // if(!this.state.listCategory.length){
        //     return <MDSpinner className="spinner" size={100}/>
        // }

        return (
            <div>
                <div className="WrapExplore">
                    <br /><br /><br /><br /><br /><br />
                    <div className="container-fluid" id="ContainerExplore">
                        <br />
                        

                            <div class="TopicSegment">Result of {this.props.match.params.id}</div>

                            <div className="row">

                                {this.List()}

                            </div>

                       

                        {/*จัดการหน้าเพจ*/}
                        <center>
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
                        </center>

                        <br /><br />


                        

                        <br /><br />
                    </div>

                    <br /><br />
                    <Category />

                    <Footer />

                </div>
            </div>



        );
    }
}