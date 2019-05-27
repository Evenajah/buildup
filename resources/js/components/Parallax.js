import React,{ Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch, Fade } from 'react-router-dom';

class Parallax extends Component {
    render(){
        return(


            <div>
           {/*parallax*/}
                
                <div className="parallax">
                
                <center>
                  
                    <Link to={"/Build"} className="nav-link" href="#"><h1 className="createEnjoy">Create and Enjoy!</h1></Link>
                </center>
                </div>
                
               
                {/* end parallax */}
           </div>
                     

        );
    }
}

export default Parallax;