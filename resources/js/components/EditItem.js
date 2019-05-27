// EditItem.js

import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class EditItem extends Component {
  constructor(props) {
      super(props);
      this.state = {name: '', email: '',password:''};
      this.handleChange1 = this.handleChange1.bind(this);
      this.handleChange2 = this.handleChange2.bind(this);
      this.handleChange3 = this.handleChange3.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    axios.get(`http://localhost:8181/items/${this.props.params.id}/edit`)
    .then(response => {
      this.setState({ name: response.data.name,email: response.data.email,password:response.data.password });
    })
    .catch(function (error) {
      console.log(error);
    })
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

  handleSubmit(event) {
    event.preventDefault();
    const products = {
      name: this.state.name,
      password: this.state.password,
      email: this.state.email
    }
    let uri = 'http://localhost:8181/items/'+this.props.params.id;
    axios.patch(uri, products).then((response) => {
          this.props.history.push('/display-item');
    });
  }
  render(){
    return (
      <div>
        <h1>Update Item</h1>
        <div className="row">
          <div className="col-md-10"></div>
          <div className="col-md-2">
            <Link to="/display-item" className="btn btn-success">Return to Items</Link>
          </div>
        </div>
        <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label>Item Name</label>
                <input type="text"
                  className="form-control"
                  value={this.state.name}
                  onChange={this.handleChange1} />
            </div>

            <div className="form-group">
                <label name="product_price">Item Price</label>
                <input type="text" className="form-control"
                  value={this.state.password}
                  onChange={this.handleChange2} />
            </div>

            <div className="form-group">
                <label name="product_price">Item Price</label>
                <input type="text" className="form-control"
                  value={this.state.email}
                  onChange={this.handleChange3} />
            </div>

            <div className="form-group">
                <button className="btn btn-primary">Update</button>
            </div>
        </form>
    </div>
    )
  }
}
export default EditItem;