import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch, Fade } from 'react-router-dom';
import Scrollbar from 'react-smooth-scrollbar';
import swal from 'sweetalert';
import axios from 'axios';

import Build from './Build';
import AdminSection from './AdminSection';
import Home from './Home';
import Explore from './Explore';
import ContactUs from './ContactUs';
import IndexItem from './IndexItem';
import Section from './Section';
import ViewPage from './ViewPage';
import ViewPageFollow from './ViewPageFollow';
import MyProject from './MyProject';
import MyFollowProject from './MyFollowProject';
import EditProject from './EditProject';
import ValidateSearch from './ValidateSearch';
import resultSearch from './resultSearch';
import CheckBuild from './CheckBuild';
import ListTransaction from './ListTransaction';

import { CSSTransition, TransitionGroup } from 'react-transition-group';



export default class Navigator extends Component {
    //กำหนด state ในฟอร์มสมัครสมาชิก
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            password: '',
            email: '',
            iCon: 'fas fa-sign-in-alt',
            User: 'Sign in & Create account',
            Logout: 'Logout',
            Modal: 'myModal',
            StatUser: '',
            ModalAdmin: ''

        };

        //formRegis
        this.RegisterInput1 = this.RegisterInput1.bind(this);
        this.RegisterInput2 = this.RegisterInput2.bind(this);
        this.RegisterInput3 = this.RegisterInput3.bind(this);
        this.SubmitRegister = this.SubmitRegister.bind(this);

        //formLogin
        this.LoginInput1 = this.LoginInput1.bind(this);
        this.LoginInput2 = this.LoginInput2.bind(this);
        this.submitLogin = this.submitLogin.bind(this);

        this.setLogout = this.setLogout.bind(this);
        this.checkAdmin = this.checkAdmin.bind(this);

    }



    //SET State เวลารีเฟรชละไม่ state ไม่เปลี่ยน
    componentWillMount() {

        localStorage.getItem('User') && this.setState({
            User: localStorage.getItem('User'),
        })
        localStorage.getItem('iCon') && this.setState({
            iCon: localStorage.getItem('iCon')
        })
        localStorage.getItem('Modal') && this.setState({
            Modal: localStorage.getItem('Modal')
        })
        localStorage.getItem('Logout') && this.setState({
            Logout: localStorage.getItem('Logout')
        })

        localStorage.getItem('StatUser') && this.setState({
            StatUser: localStorage.getItem('StatUser')
        })


    }

    componentDidMount() {
        if (this.state.StatUser == "admin") {
            document.getElementById("AdminSection").style.display = "block";
        } else {
            document.getElementById("AdminSection").style.display = "none";
        }
    }



    componentWillUpdate(nextProps, nextState) {

        //เก็บใส่ Storage 
        localStorage.setItem('User', nextState.User);
        localStorage.setItem('StatUser', nextState.StatUser);
        localStorage.setItem('iCon', nextState.iCon);
        localStorage.setItem('Modal', nextState.Modal);
        localStorage.setItem('Logout', nextState.Logout);
        localStorage.setItem('ModalAdmin', nextState.ModalAdmin);
    }

    //END SETSTATE REFRESH



    //RegisterModule
    RegisterInput1(e) {
        this.setState({
            name: e.target.value
        })
    }

    RegisterInput2(e) {
        this.setState({
            password: e.target.value
        })
    }

    RegisterInput3(e) {
        this.setState({
            email: e.target.value
        })
    }

    SubmitRegister(e) {
        e.preventDefault();
        const users = {
            name: this.state.name,
            password: this.state.password,
            email: this.state.email
        }

        let uri = 'http://localhost:8181/api/usersAccount';
        axios.post(uri, users).then((response) => {
            swal("Success!", "Create success \n your username is   " + this.state.name, "success");

            //setState ให้คืนค่าเริ่มต้น
            this.setState({
                name: '',
                password: '',
                email: ''
            });

        }).catch((error) => { //จับ error = username ซ้ำ or email ซ้ำ
            swal("Failed register", "Problems may arise. \n * Username already exists. or \n * Email already exists.", "warning");
            console.log(error.response) // แสดง error
        });
    }
    //EndRegis


    //LoginModule
    LoginInput1(e) {

        this.setState({
            name: e.target.value
        })
    }

    LoginInput2(e) {

        this.setState({
            password: e.target.value
        })

    }

    submitLogin(e) {

        e.preventDefault();

        const users = {
            name: this.state.name,
            password: this.state.password,
        }

        //ส่ง axios api::post 
        let uri = 'http://localhost:8181/api/LoginControl';
        axios.post(uri, users).then((response) => {

            //statement
            if (response.data == 'error') {
                swal("Failed Sign In", "Username or Password is not correct!", "warning");
            } else {

                //hide modal (jquery)
                $('#myModal').modal('hide');

                swal("You're Sign In", "Welcome back " + this.state.name);

                this.setState({
                    User: response.data,
                    name: '',
                    password: '',
                    iCon: "fas fa-users",
                    Modal: '#',
                    Logout: "fas fa-caret-down"

                })

                this.checkAdmin();

            }

        }).catch((error) => { //จับ error = username ซ้ำ or email ซ้ำ
            console.log(error.response) // แสดง error
        });
    }
    //EndLogin

    //Logout
    setLogout(e) {

        e.preventDefault();

        this.setState({
            name: '',
            password: '',
            User: 'Sign in & Create account',
            iCon: "fas fa-sign-in-alt",
            Modal: 'myModal',
            Logout: ''
        })
    }
    //end logout

    //checkAdmin
    checkAdmin() {
        if (this.state.User != 'Sign in & Create account') {
            axios.get(`http://localhost:8181/api/usersAccount/${this.state.User}`)
                .then(response => {
                    if (response.data == "admin") {

                        this.setState({
                            StatUser: response.data,
                        });

                        document.getElementById("AdminSection").style.display = "block";

                    } else {
                        this.setState({
                            StatUser: response.data,
                        });

                        document.getElementById("AdminSection").style.display = "none";

                    }

                })
                .catch(function (error) {
                    console.log(error);
                })
        }




    }



    render() {

        ///get id name
        const propsUser = this.state.name;
        console.log(this.state);

        return (


            <div>
                {/*navi*/}

                <nav className="navbar navbar-fixed-top navbar-expand-lg navbar-dark">
                    <Link className="navbar-brand pl-5" to="/"><img src="images/icon-build.PNG" class="logo" />&nbsp;BuildUp!</Link>

                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarNav" aria-control="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">

                        <ul className="navbar-nav" >

                            <li className="nav-item px-3 active">
                                <Link to="/" className="nav-link"> Home <span class="sr-only">(current)</span></Link>
                            </li>

                            <li className="nav-item px-3">
                                <Link to="/Explore" className="nav-link">Explore</Link>
                            </li>

                            <li className="nav-item px-3">
                                <Link to="/Contact" className="nav-link" >Contact Us</Link>
                            </li>

                        </ul>

                        {/*right*/}

                        <ul class="navbar-nav ml-auto">
                            <li className="nav-item px-3">
                                <Link to={"/Build"} className="nav-link" href="#"><i className="fas fa-plus"></i> &nbsp; Build project</Link>
                            </li>
                            <li className="nav-item px-3">
                                <a className="nav-link" title={this.state.User} data-toggle="modal" data-target="#myModal" href="">
                                    <i className={this.state.iCon} ></i> &nbsp; {this.state.User}  </a>
                            </li>
                            <li className="nav-item px-3">
                                <a className="nav-link" title="Logout" data-toggle="modal" data-target="#modalAccount" href="" >

                                    <i className={this.state.Logout}></i></a>
                            </li>
                        </ul>


                    </div>


                    {/*Modal Login */}

                    <div className="modal fade" id={this.state.Modal} role="dialog">
                        <div className="modal-dialog">

                            <div className="modal-content">
                                <div>
                                    <span className="iConLogin"><i className="fas fa-user-circle"></i></span>
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    <h2>Sign In</h2>
                                </div>

                                <div className="modal-body">
                                    <p>Fill Data in textbox</p>

                                    {/*formlogin*/}
                                    <form onSubmit={this.submitLogin}>
                                        <input type="text" className="inputLogin" size="45" placeholder="username"
                                            value={this.state.name} onChange={this.LoginInput1} required /><br /><br />

                                        <input type="password" className="inputLogin" size="45" placeholder="password"
                                            value={this.state.password} onChange={this.LoginInput2} required /><br /><br />

                                        <input type="submit" className="submitBtn" value="Sign In" />

                                    </form>
                                    {/*end form login*/}

                                    <br /><br />
                                    <a className="gotoRegis" data-toggle="modal" data-dismiss="modal" data-target="#myModalRegis" href="">
                                        <i className="fas fa-user-plus"></i> &nbsp;
                                        Create your account
                                        </a>
                                </div>

                                <div className="modal-footer">
                                    <button type="button" className="btn btn-default" id="closeBtn" data-dismiss="modal">Close</button>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/*End Modal*/}

                    {/*Modal Register */}
                    <div className="modal fade" id="myModalRegis" role="dialog">
                        <div className="modal-dialog">

                            <div className="modal-content">
                                <div>
                                    <span className="iConLogin"><i class="fas fa-user-circle"></i></span>
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    <h2>Create account</h2>
                                </div>

                                <div className="modal-body">
                                    <p>Fill Data in textbox</p>

                                    {/*form*/}
                                    <form onSubmit={this.SubmitRegister}>

                                        <input type="text" className="inputLogin" size="45" placeholder="Your Username"
                                            value={this.state.name} onChange={this.RegisterInput1} required /><br /><br />

                                        <input type="password" className="inputLogin" size="45" placeholder="Your Password"
                                            value={this.state.password} onChange={this.RegisterInput2} required /><br /><br />

                                        <input type="email" className="inputLogin" size="45" placeholder="Your E-mail"
                                            value={this.state.email} onChange={this.RegisterInput3} required /><br /><br />

                                        <input type="submit" className="submitBtn" value="Create" />

                                    </form>
                                    {/*End form*/}

                                    <br /><br />
                                    <a className="gotoRegis" data-toggle="modal" data-target="#myModal" data-dismiss="modal" href="">
                                        <i className="fas fa-arrow-circle-left"></i> &nbsp;Back to Sign In modal
                                    </a>
                                </div>

                                <div className="modal-footer">
                                    <button type="button" className="btn btn-default" id="closeBtn" data-dismiss="modal">Close</button>
                                </div>

                            </div>

                        </div>
                    </div>
                    {/*End ModalAfterlogin*/}

                    {/*Modal after login */}
                    <div className="modal fade" id="modalAccount" role="dialog">
                        <div className="modal-dialog">

                            <div className="modal-content">
                                <div>
                                    <span className="iConLogin"><i className="fas fa-user-circle"></i></span>
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    <h2>{this.state.StatUser} : {this.state.User}</h2>
                                </div>

                                <div className="modal-body">


                                    {/*ModuleAccount*/}
                                    <Link to="/Myproject" className="formAccount"><i class="fas fa-th-large"></i>&nbsp; My project</Link>

                                    <br />




                                    <Link to="/My_follow_project" className="formAccount"><i class="fas fa-grin-squint-tears"></i>&nbsp;
                                        My follow project</Link>

                                    <br />


                                    <div id="AdminSection">
                                        <Link to="/AdminSection" className="formAccount" id="AdminBtn"><i class="fas fa-unlock-alt"></i>&nbsp; Admin Section</Link>
                                        <br/>
                                    </div>

                                    {/*LogOut*/}
                                    <Link to="/home" className="formAccount" title="Logout" id="logoutBtn" data-toggle="modal" data-target="#modalAccount"
                                        onClick={this.setLogout} href="#">
                                        <i class="fas fa-sign-out-alt"> Logout</i></Link>
                                    {/*Logout*/}


                                    {/*end ModuleAccount*/}
                                    <br /><br />



                                </div>

                            </div>
                        </div>
                    </div>
                    {/*end modal after*/}


                </nav>


                {/* Route and Transition page */}
                <Route render={({ location }) => (
                    <TransitionGroup>
                        <CSSTransition
                            key={location.key}
                            timeout={300}
                            classNames="fade"
                        >


                            <Switch location={location}>

                                <Route exact path="/" component={Home} />
                                <Route path="/AdminSection" component={AdminSection} />
                                <Route path="/Explore" component={Explore} />
                                <Route path="/Contact" component={ContactUs} />
                                <Route path="/Build" component={() => <CheckBuild userProp={this.state.User} />} />
                                <Route path="/project/:id" component={(props) => <IndexItem {...props} userProp={this.state.User} />} />
                                <Route path="/category/:id" component={Section} />
                                <Route path="/viewPage" component={ViewPage} />
                                <Route path="/viewPage_Follow" component={ViewPageFollow} />
                                <Route path="/Myproject" component={() => <MyProject userProp={this.state.User} />} />
                                <Route path="/My_follow_project" component={() => <MyFollowProject userProp={this.state.User} />} />
                                <Route path="/edit/:id" component={EditProject} />
                                <Route path="/result_search/:id" component={resultSearch} />
                                <Route path="/result_search/" component={ValidateSearch} />
                                <Route path="/transaction" component={ListTransaction} />

                            </Switch>

                        </CSSTransition>
                    </TransitionGroup>
                )} />

                {/*End Navi */}

            </div>


        );
    }
}
