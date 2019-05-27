// TableRow.js
import { BrowserRouter,Link } from 'react-router-dom';
import React, { Component } from 'react';



export default class TableRowFollow extends Component {  
    constructor(props) {
        super(props);
      
    }

 
    
    
    unescapeHTML(html) {
      var escapeEl = document.createElement('p');
      escapeEl.innerHTML = html;
      return escapeEl.textContent;
    }
    

  render() {
    console.log(this.state);
    return (
        <tr id = {this.props.obj.id}>
          <td>
            {this.props.obj.id}
          </td>
          <td>
            {this.props.obj.category}
          </td>
          <td>
            <b>{this.props.obj.topic}</b>
          </td>
         
          <td className="detailTable">
            {this.unescapeHTML(this.props.obj.detail.substr(0,199)+'...')}
          </td>
        
          <td>
            <Link to= {"project/"+this.props.obj.id} className="btn btn-primary" ><i class="far fa-eye"></i></Link>
          </td>
          
        </tr>
    );
  }
}

