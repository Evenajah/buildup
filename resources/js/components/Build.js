import React, { Component } from 'react';
import Footer from './Footer';
import CheckBuild from './CheckBuild';
import axios from 'axios';



class Build extends Component {

  constructor(props) {
    super(props);

    document.title = "Build";
    $("html, body").animate({ scrollTop: 0 }, "fast");

    this.state = {
      category: [],
      selectCategory: 'Select your Category',
      topic: '',
      detail: 'Detail project...',
      image: null
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
    axios.get('http://localhost:8181/api/Category')
      .then(response => {
        this.setState({
          category: response.data
        });
      })
      .catch(function (error) {
        console.log(error);
      })


    //CKeditor
    const property = {
      height: "600",

    }

    CKEDITOR.replace("detail", property);

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

    if (this.state.selectCategory == "Select your Category" || this.state.detail == "Detail project..." || this.state.topic == "") {
      swal("Wrong input", "Please fill data in all form", "warning");
      $("html, body").animate({ scrollTop: 0 }, "fast");

    } else {

      const config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      }


      //append form
      const formData = new FormData();
      formData.append('user', this.props.userProp);
      formData.append('category', this.state.selectCategory);
      formData.append('topic', this.state.topic);
      formData.append('detail', this.state.detail);
      formData.append('image', this.state.image);

      // console.log('>> formData >> ', formData);

      let uri = 'http://localhost:8181/api/project';

      axios.post(uri, formData, config).then((response) => {

        swal("Success!", "Create success", "success");


        //setState ให้คืนค่าเริ่มต้น
        this.setState({
          topic: '',
          detail: 'Detail project...',
          selectCategory: 'Select your Category'

        });


        //to top bar
        $("html, body").animate({ scrollTop: 0 }, "fast");


        //set image and detail = default
        document.getElementById("image").value = "";
        CKEDITOR.instances['detail'].setData(this.state.detail);



      }).catch((error) => { //catch error
        swal("Failed create", " Sorry! something is wrong", "warning");
        console.log(error.response) // แสดง error
      });

    }

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



      <div className="build">

        <br /><br /><br /><br />


        <br /><br /><br />

        <form className="formCreate" onSubmit={this.onFormSubmit}>
          <div className="headerBuild"><h2>BUILD YOUR PROJECT &nbsp;<i className="fas fa-caret-right"></i></h2></div>
          <br /><br />
          <div className="form-group">


            <select className="form-control" required onChange={this.inputCategory}>
              <option>{this.state.selectCategory}</option>
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
              onChange={this.inputTopic} />
          </div>

          <br />



          {/*input file*/}
          <div className="form-group">
            <span className="labelFile">Input your topic image </span>
          </div>


          <div className="form-group">
            <input type="file" onChange={this.onChangeFile} className="form-control" id="image" accept="images/*" className="fileInput" />
          </div>
          {/*end inpout file*/}
          <br />
          <br />



          <div className="form-group">

            {/*ckEdiotor*/}
            <textarea id="detail" defaultValue={this.state.detail}></textarea>


          </div>

          <br />

          <br />


          <br /><br />

          <div className="form-group">
            <input type="submit" className="btnBuild" value="Create Project" />
          </div>


          <br /><br />
        </form>



        <br /> <br /> <br />

        <Footer />
      </div>

    );
  }
}


export default Build;