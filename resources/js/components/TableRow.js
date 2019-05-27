// TableRow.js
import { BrowserRouter,Link } from 'react-router-dom';
import React, { Component } from 'react';



export default class TableRow extends Component {  
    constructor(props) {
        super(props);

        this.DeleteItem = this.DeleteItem.bind(this);
    }

 
    DeleteItem(e) {
      e.preventDefault();

      //deleteItem
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this project!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {

          let uri = `http://localhost:8181/api/project/${this.props.obj.id}`;

          axios.delete(uri).then((response) => {
            swal("Success! Your project has been deleted!", {
              icon: "success",
              });
                      
            $("#"+this.props.obj.id).css("display", "none"); 
            $("html, body").animate({ scrollTop: 0 }, "fast");
          });
       
         
        }else {
          swal("Your project is safe!");
        }

      });


                
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
          <td>
            <Link to= {"/edit/"+this.props.obj.id} className="btn btn-warning" id="editBtn"><i class="fas fa-edit"></i></Link>
          </td>
          <td>
            <form onSubmit={this.DeleteItem} id="deleteBtn">
                <input type="submit" value="X" className="btn btn-danger"/>
            </form>
          </td>
        </tr>
    );
  }
}

