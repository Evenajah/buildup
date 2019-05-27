import React, { Component } from 'react';
import ListItem from './ListItem';
import Loading from './Loading';
import Category from './Category';
import Footer from './Footer';
import NoItem from './NoItem';
import { Link } from 'react-router-dom';


export default class resultSearch extends Component {

    constructor(props) {
        super(props);

        this.state = {
            resultSearch: '',
        }


        this.List = this.List.bind(this);
    }



    componentDidMount() {

        
        let url = `http://localhost:8181/api/project/${this.props.match.params.id}`

        axios.get(url)

            .then(response => {
                this.setState({
                    resultSearch: response.data
                })


            }).catch(function (error) {
                console.log(error);
            })
        



    }

    List() {
        if (this.state.resultSearch instanceof Array) {

            if (this.state.resultSearch.length == 0) {
                return <NoItem />;
            }


            return this.state.resultSearch.map(function (object, i) {
                return <ListItem obj={object} key={i} />;
            })
        }
        else {

            //หน้าโหลด
            return <Loading />

        }
    }





    render() {

        console.log(this.state);

        return (
            <div className="Explore">

                <div className="WrapExplore">
                    <br /><br /><br /><br /><br /><br />


                    <div className="container-fluid" id="ContainerExplore">

                        

                        <div class="TopicSegment"><i class="fas fa-search"></i> &nbsp;Search : <b>{this.props.match.params.id}</b></div>

                        <div className="row">

                            {this.List()}
                            <br />
                            
                            <br /> <br />
                        </div>
                    </div>
                    <br /><br />
                    <Category />

                <br/><br/>
                </div>

                

                <Footer />


            </div>



        );
    }
}

