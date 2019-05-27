import React, { Component } from 'react';
import Footer from './Footer';
import ListItem from './ListItem';
import ListItemFollow from './ListItemFollow';
import Category from './Category';
import Loading from './Loading';
import { BrowserRouter as Router, Link, Route, Switch, Fade } from 'react-router-dom';


export default class Explore extends Component {

    constructor(props) {
        super(props);

        document.title = "Explore";
        $("html, body").animate({ scrollTop: 0 }, "fast");

        this.state = {
            project: '',
            projectTopFollow:''
        }
    }


    componentDidMount() {
        axios.get('http://localhost:8181/api/project')
            .then(response => {
                this.setState({ project: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })

        /////////////////////////////////

        axios.get('http://localhost:8181/api/statusFollow')
            .then(response => {
                this.setState({ projectTopFollow: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }


    ListNewest() {
        if (this.state.project instanceof Array) {
           
            return this.state.project.map(function (object, i) {
                return <ListItem obj={object} key={i} follow="none"/>;
            })
        }
        else{
            return <Loading/>
        }
    }

      ListTopFollow(){
        if (this.state.projectTopFollow instanceof Array) {
            return this.state.projectTopFollow.map(function (object, i) {
                return <ListItemFollow obj={object} key={i} />;
            })
        }
        else{
            return <Loading/>
        }
      }



    render() {
        console.log(this.state);

        return (
            <div className="Explore">

                <div className="WrapExplore">
                    <br /><br /><br /><br /><br /><br />

                    <Category />
                    <div className="container-fluid" id="ContainerExplore">
                        
                        <div class="TopicSegment"><i class="fas fa-exclamation"></i> &nbsp;Newest</div>

                        <div className="row" >

                            {this.ListNewest()}
                            <br />
                            <Link className="view" to="/viewPage">View more</Link>
                            <br /> <br />
                        </div>
                    </div>

                    <div className="container-fluid" id="ContainerExplore">


                        <div class="TopicSegment"><i class="fas fa-star"></i> &nbsp; Top Follow</div>

                        <div className="row">

                            {this.ListTopFollow()}

                            <br />

                            <Link className="view" to="/viewPage_Follow">View more</Link>

                            <br /> <br /> <br /> <br />
                        </div>
                    </div>

                    <br /><br />
                </div>

                <Footer />


            </div>



        );
    }
}