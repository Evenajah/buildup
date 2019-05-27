import React, {Component} from 'react';
import axios from 'axios';
import {BrowserRouter} from 'react-router-dom';


class CreateItem extends Component {
    constructor(props){
        super(props);
        this.state = {name: '', password: '',email:''};
    
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleChange1(e){
        this.setState({
          name: e.target.value
        })
      }

      handleChange2(e){
        this.setState({
          password: e.target.value
        })
      }

      handleChange3(e){
        this.setState({
          email: e.target.value
        })
      }

      handleSubmit(e){
        e.preventDefault();
        const users = {
          name: this.state.name,
          password: this.state.password,
          email: this.state.email
          
        }
        let uri = 'http://localhost:8181/items';
        axios.post(uri, users).then((response) => {
            this.props.history.push("/display-item");
        });
      }




    render() {
        console.log(this.state.email);
      return (
      <div>
        <h1>Create An Item</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Username:</label>
                <input type="text" className="form-control" onChange={this.handleChange1} />
              </div>
            </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Password:</label>
                  <input type="text" className="form-control col-md-6" onChange={this.handleChange2}/>
                </div>
              </div>
            </div><br />
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Email:</label>
                  <input type="text" className="form-control col-md-6" onChange={this.handleChange3}/>
                </div>
              </div>
            </div>
            <div className="form-group">
              <button className="btn btn-primary">Add Item</button>
            </div>
        </form>
  </div>
      )
    }
}
export default CreateItem;