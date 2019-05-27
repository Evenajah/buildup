import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export default class Blog extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">blog Component</div>

                            <div className="card-body">
                                I'm an blog component!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Blog />, document.getElementById('example'));
}
