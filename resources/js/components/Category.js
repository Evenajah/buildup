import React, { Component } from 'react';
import Footer from './Footer';
import ListItem from './ListItem';
import Loading from './Loading';
import NoItem from './NoItem';
import { BrowserRouter as Router, Link, Route, Switch, Fade } from 'react-router-dom';


export default class Category extends Component {

    constructor(props) {
        super(props);

        this.state = {
            response: [],
            recieveResponse: '',
            count: '',
            countRecieve: '',
            counting: -1
        }

        this.List = this.List.bind(this);

    }


    componentDidMount() {

        //get category
        axios.get(`http://localhost:8181/api/Category`)
            .then(response => {
                this.setState({
                    response: response.data
                })

               
            })

        //get count category
        axios.get(`http://localhost:8181/api/countCategory`)
            .then(response => {

                this.setState({
                    count: response.data
                })

              
            })
    }


    List() {
        if (this.state.count instanceof Array) {

            return this.state.response.map((items) => {
                return <div className="category">

                    <Link className="category btn-dark"


                        to={"/category/" + items.category_name}>{items.category_name}
                        &nbsp;({this.state.count[this.state.counting + items.id]})


                        </Link>
                </div>
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

                    <div className="container-fluid" id="ContainerExplore">

                        <div className="TopicSegment"><i class="fas fa-puzzle-piece"></i> &nbsp; Category</div>
                        <br />
                        <div className="col-md-12" id="columnCategory" >



                            {this.List()}


                        </div>

                    </div>



                </div>
                <br /><br />
            </div>



        );
    }
}