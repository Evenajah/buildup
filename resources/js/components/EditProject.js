import React, { Component } from 'react';
import Footer from './Footer';
import axios from 'axios';
import MyProject from './MyProject';


export default class EditProject extends Component {

    constructor(props) {
        super(props);

        document.title = "EditProject";
        $("html, body").animate({ scrollTop: 0 }, "fast");

        this.state = {

            id: '',
            selectCategory: '',
            topic: '',
            detail: '',
            image: '',
            imageOld: '',
            category: []

        };

        //bindFunction
        this.inputTopic = this.inputTopic.bind(this);
        this.inputCategory = this.inputCategory.bind(this);
        this.inputDetail = this.inputDetail.bind(this);

        //submit
        this.onFormSubmit = this.onFormSubmit.bind(this);

        this.onChangeFile = this.onChangeFile.bind(this);
    }



    componentDidMount() {
        axios.get(`http://localhost:8181/api/project/${this.props.match.params.id}/edit`)
            .then(response => {

                this.setState({
                    id: response.data.id,
                    selectCategory: response.data.category,
                    topic: response.data.topic,
                    imageOld: response.data.image,
                    detail: response.data.detail

                })

                const property = {
                    height: "600",
                }


            })
            .catch(function (error) {
                console.log(error);
            })


        axios.get('http://localhost:8181/api/Category')
            .then(response => {

                this.setState({
                    category: response.data
                });

            })
            .catch(function (error) {
                console.log(error);
            })



        const property = {
            height: "600",
        }



        CKEDITOR.replace("detail", property);

        // CKEDITOR.instances.detail.insertText(edit);

        CKEDITOR.instances["detail"].on("change", function () {

            let data = CKEDITOR.instances["detail"].getData();
            this.inputDetail(data)

        }.bind(this));


    }



    //SetStateOnchange


    inputTopic(e) {
        this.setState({
            topic: e.target.value
        })
    }

    inputCategory(e) {
        this.setState({
            selectCategory: e.target.value
        })
    }

    inputDetail(e) {
        this.setState({
            detail: e
        })
    }

    //submit with axios
    onFormSubmit(e) {

        e.preventDefault();

        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }


        //append form
        const formData = new FormData();

        formData.append('_method', 'PATCH');
        formData.append('category', this.state.selectCategory);
        formData.append('topic', this.state.topic);
        formData.append('detail', this.state.detail);
        formData.append('image', this.state.image);


        let uri = `http://localhost:8181/api/project/${this.props.match.params.id}`;
        axios.post(uri, formData, config).then((response) => {
            if (response.data == "Successfully Updated") {

                swal("Success!", "Update success", "success");

                $("html, body").animate({ scrollTop: 0 }, "fast");

            }


        }).catch((error) => { //catch error
            swal("Failed create", " Sorry! something is wrong", "warning");
            console.log(error.response) // แสดง error
        });


    }


    //changeFile
    onChangeFile(e) {
        this.setState({
            image: e.target.files[0]
        })
    }




    render() {
        console.log(this.state);
        console.log(this.props);


        return (



            <div className="build" >

                <br /> <br /> <br /> <br />


                <br /> <br /> <br />

                <form className="formCreate" onSubmit={this.onFormSubmit}>
                    <div className="headerBuild"><h2>EDIT YOUR PROJECT &nbsp;<i className="fas fa-caret-right"></i></h2></div>
                    <br /><br />
                    <div className="form-group">


                        <select className="form-control" required onChange={this.inputCategory}>
                            <option selected >{this.state.selectCategory}</option>
                            {
                                this.state.category.map((name) => {
                                    return <option>{name.category_name}</option>
                                })
                            }
                        </select>
                    </div>

                    <br />

                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Your topic project" value={this.state.topic}
                            onChange={this.inputTopic} required />
                    </div>

                    <br />

                    {/*input file*/}
                    <div className="form-group">
                        <span className="labelFile">Your old image </span><br />
                        <img src={"../images/" + this.state.imageOld} className="imageEdit" /><br /><br /><br />
                        <span className="labelFile">Input your image </span>
                    </div>

                    <div className="form-group">
                        <input type="file" onChange={this.onChangeFile} className="form-control" name="image" accept="image/*" className="fileInput" />
                    </div>
                    {/*end inpout file*/}
                    <br />
                    <br />

                    <div className="form-group">

                        {/*ckEditor*/}
                        <textarea id="detail" defaultValue={this.state.detail}></textarea>

                    </div>


                    <br />

                    <br />


                    <br /><br />

                    <div className="form-group">
                        <input type="submit" className="btnBuild" value="Edit Project" />
                    </div>






                    <br /> <br /> <br />




                </form>



                <br /> <br /> <br />

                <Footer />

            </div >

        );
    }
}