import React, { Component } from 'react';

class Feature extends Component {
    render() {
        return (


            <div class="feature">
                {/*Our feature*/}
                <div class="container text-center">
                    <h1>3 Way to build easy</h1>
                    <p class="pt-2">3 Way to build easy</p>
                </div>
                <div class="container text-center pt-4">
                    <div class="row">
                        <div class="col-4">
                            <img src="https://image.flaticon.com/icons/png/512/189/189667.png" class="img-fluid" />
                        </div>
                        <div class="col-4">
                            <img src="images/icon-build.PNG" class="img-fluid" />
                        </div>
                        <div class="col-4">
                            <img src="https://www.applauseacademyma.com/uploads/2/7/7/4/27741413/s681039153363271826_p36_i1_w758.png" class="img-fluid" />
                        </div>
                    </div>
                </div>
                <div class="container text-center pt-4">
                    <div class="row py-5">
                        <div class="col-4">
                            <h2>
                                If you have some idea and wanna be that it's come true
                            </h2>
                        </div>
                        <div class="col-4">
                            <h2>
                                Build your project in this website
                            </h2>
                        </div>
                        <div class="col-4">
                            <h2>
                                After that you will recieve donate from everyone!
                            </h2>
                        </div>
                    </div>
                </div>
                {/*End Our feature*/}
            </div>


        );
    }
}

export default Feature;