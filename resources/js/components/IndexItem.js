import React, { Component } from 'react';
import axios from 'axios';
import Footer from './Footer';
import Loading from './Loading';
import PaypalExpressBtn from 'react-paypal-express-checkout';

export default class IndexItem extends Component {

    constructor(props) {
        super(props);
        document.title = "Detail of project";
        $("html, body").animate({ scrollTop: 0 }, "fast");

        this.state = {
            items: [],
            followStatus : '',
            recieveStat : '',
            iconFollow : '',
            buttonFollow : '',
            donate: 1.50,
            totalDonate:null,
            followTotal:null
            
        }

      
        this.mapping = this.mapping.bind(this);
        this.followObj = this.followObj.bind(this);
        this.updateStat = this.updateStat.bind(this);
        this.donationState = this.donationState.bind(this);
        this.successPayment = this.successPayment.bind(this);

    }


    componentDidMount() {

        this.setState({
            totalDonate:<img src ="https://loading.io/spinners/balls/lg.circle-slack-loading-icon.gif" width="20"/>,
            followTotal:<img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/585d0331234507.564a1d239ac5e.gif" width="20"/>
        })
        
        //get id proj
        axios.get(`http://localhost:8181/api/IndexItem/${this.props.match.params.id}/edit`)
            .then(response => {

                this.state.items.push(response.data)

                this.setState({
                    items: this.state.items
                })

            })
            .catch(function (error) {
                console.log(error);
            })


        //check status follow

        const followStat = {
            user: this.props.userProp,
            project_id: this.props.match.params.id
          }

        let url = "http://localhost:8181/api/statusFollow";
        axios.post(url,followStat).then((response) =>{
                         
            if(response.data.length > 0){
                this.setState({
                    followStatus : "You are follow this project",
                    iconFollow : <i class="fas fa-heart"></i>,
                    buttonFollow : "btn-dark",
                    recieveStat : response.data
                })
            }else{
                this.setState({
                    iconFollow : <i class="far fa-heart"></i>,
                    followStatus : "Follow this project",
                    buttonFollow : "btn-secondary"
                })
            }
                
        })
        .catch(function (error) {
        console.log(error);
        })

        //end check status follow


        //checkDonate

        axios.get(`http://localhost:8181/api/transaction/${this.props.match.params.id}`)
            .then(response => {

                this.setState({
                    totalDonate: response.data
                })

            })
            .catch(function (error) {
                console.log(error);
            })



        //checkFollow
        axios.get(`http://localhost:8181/api/follow/${this.props.match.params.id}`)
        .then(response =>{

            this.setState({
                followTotal: Number(response.data)
            })


        }).catch(function (error){
            console.log(error);
        })
        




    }


    followObj(e){

        e.preventDefault();

        const followObj = {
          name: this.props.userProp,
          project_id: e.target.value
        }
        

        if(this.props.userProp == "Sign in & Create account"){

            return swal("Sorry!", "Please login before follow this project", "warning");

        }else{

            this.setState({

                iconFollow : <img src = "https://loading.io/spinners/dual-ring/lg.dual-ring-loader.gif" width="30"/>
    
            })

            if(this.state.followStatus == "Follow this project"){
                let uri = "http://localhost:8181/api/follow";
                axios.post(uri, followObj).then((response) => {
            
                    if(response.data == "Success"){
                    this.updateStat();
                    }
                })
                .catch(function (error) {
                    console.log(error);
                })

            }else{
            //delete stat
                let uri = `http://localhost:8181/api/follow/${this.state.recieveStat}`;

                axios.delete(uri).then((response) => {
                    if(response.data == "Success Unfollow"){

                    this.setState({
                        followStatus: "Follow this project",
                        iconFollow : <i class="far fa-heart"></i>,
                        buttonFollow : "btn-secondary",
                        followTotal:this.state.followTotal-1
                    })
                }
          })

          
          .catch(function (error) {
            console.log(error);
            })

           
        }

    }
    }


    //อัพเดท status follow
    updateStat(){
        const followStat = {
            user: this.props.userProp,
            project_id: this.props.match.params.id
          }

        let url = "http://localhost:8181/api/statusFollow";

       
        axios.post(url,followStat).then((response) =>{
                     
           if(response){
                this.setState({
                    followStatus: "You are follow this project",
                    iconFollow : <i class="fas fa-heart"></i>,
                    recieveStat : response.data,
                    buttonFollow : "btn-dark",
                    followTotal:this.state.followTotal+1
                })

            }
            
                        
        })
        .catch(function (error) {
        console.log(error);
        })

    }



    mapping() {

        if (this.state.items.length > 0) {
            return this.state.items.map((items) => {

                return <div>
                    <br /><br />

                    <div className="WrapHeaderIndex">
                        <h1 className="topicIndex">{items.topic}</h1><br />
                        <h3><i className="fas fa-user"></i> &nbsp;By&nbsp;{items.user_create} &nbsp;&nbsp;

                
    
                <button type="button" className={"btn "+this.state.buttonFollow} onClick= {this.followObj} value={items.id}>

                                {this.state.iconFollow}&nbsp;{this.state.followStatus}

                </button>&nbsp;
            

                <button type="button" className="btn btn-secondary btn-lg">
                                <i className="far fa-heart"></i>&nbsp;Follow Creator
                </button><br />
                        </h3>

                    </div>
                    <img src={"../images/" + items.image} className="imageIndex" />

                    <div className="componentIndex">

                        <i class="fas fa-th-large"></i> &nbsp; {items.category}<br />

                        <i className="fas fa-calendar"></i>&nbsp; {items.created_at.substr(0, 10)}<br />
                        <i class="fas fa-grin-squint-tears"></i> {this.state.followTotal}&nbsp;Follow<br />
                        <br/>
                        <div className = "donateTotal">
                            <i class="fas fa-dollar-sign"></i> &nbsp;{parseFloat(this.state.totalDonate).toFixed(2)} USD
                        </div>
                        
                        <br /><br /> <br /> <br /> <br /> 
                        <p></p>
                       



                    </div>
                    <br /> <br /> <br />
                    <hr />
                    <br /> <br />

                    <div className="detail" dangerouslySetInnerHTML={{ __html: items.detail }} />

                </div>

            }

            )
        } else {
            return <Loading />
        }
    }


    donationState(e){
        e.preventDefault();

        this.setState({
            donate : e.target.value
        })
    }


    successPayment(){

        const transaction = {
            user: this.props.userProp,
            project_id: this.props.match.params.id,
            currency : this.state.donate
          }

        let url = "http://localhost:8181/api/transaction";

       
        axios.post(url,transaction).then((response) =>{
                     
           if(response.data == "Success"){
                this.setState({
                    totalDonate : this.state.totalDonate+Number(this.state.donate),
                    donate:'1.50',
                    
                })

                swal("Success!", "Donate success!", "success");
                $("html, body").animate({ scrollTop: 0 }, "fast");

            }
            
                        
        })
        .catch(function (error) {
        console.log(error);
        })

    }


    


  


    render() {


        console.log(this.state);
        console.log(this.props);

        const onSuccess = (payment) => {
            // Congratulation, it came here means everything's fine!
            this.successPayment();
            // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
        }
 
        const onCancel = (data) => {
            // User pressed "cancel" or close Paypal's popup!
        
            console.log('The payment was cancelled!', data);
            // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
        }
 
        const onError = (err) => {
            // The main Paypal's script cannot be loaded or somethings block the loading of that script!
            console.log("Error!", err);
            // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
            // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
        }
 
        let env = 'sandbox'; // you can set here to 'production' for production
        let currency = 'USD'; // or you can set this value from your props or state
        let total = Number(this.state.donate); // same as above, this is the total amount (based on currency) to be paid by using Paypal express checkout
        // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/
 
        const client = {
            sandbox:    'AdZIirqIdGNpZJ9rMzYT6T5_U669-U-br62ygjta6eqwdSgnbp_Szsa8L0WTgrlce9fk8a6p5b_ELPt9'
            
        }


        return (
            <div className="Index">

                <div className="rowIndex">
                    <div className="col-md-12">

                        {this.mapping()}
                        <br/><br/><br/><br/><br/><br/><br/><br/>

                    <center>
                    <div className="WrapDonate">

                       <span class="DonateIcon"><i class="fas fa-hand-holding-usd"></i></span> &nbsp;
                        <img src = "http://pngimg.com/uploads/paypal/paypal_PNG23.png" className="imagepaypal"/><br/>
                        <img src ="https://www.eidesissolutions.com/wp-content/uploads/2018/03/visa-and-mastercard-logos-logo-visa-png-logo-visa-mastercard-png-visa-logo-white-png-awesome-logos.png"
                        width="150" />
                        <br/><br/>

                        <input type="number" placeholder="Donate this project default is 1 USD" value={this.state.donate}
                        className="DonateInput" onChange = {this.donationState} /> &nbsp; &nbsp; &nbsp; <span className="usd">
                        <i class="fas fa-dollar-sign"></i> USD</span>

                        <br/><br/>

                        <PaypalExpressBtn client={client} currency={currency} total={total} 
                        onError={onError} onSuccess={onSuccess} onCancel={onCancel} />

                    </div>
                    </center>
                        
                    </div>
                </div>

                
                <Footer />

            </div>
        );
    }
}