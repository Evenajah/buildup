// TableRow.js
import { BrowserRouter,Link } from 'react-router-dom';
import React, { Component } from 'react';



export default class TableTransaction extends Component {  
   
    
                

  render() {
    console.log(this.state);
    return (
        <tr>
          <td>
            {this.props.obj.id}
          </td>
          <td>
            {this.props.obj.name}
          </td>

          <td>
            <b>{this.props.obj.project_id}</b>
          </td>
         
          <td className="detailTable">
            {this.props.obj.currency} USD
          </td>

           <td>
            <b>{this.props.obj.created_at}</b>
          </td>
        
          
         
        </tr>
    );
  }
}

