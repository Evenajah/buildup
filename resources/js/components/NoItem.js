

import React, { Component } from 'react';

export default class NoItem extends Component {

  render() {

    console.log(this.props);
    console.log(this.state);

    // //set เวลาแสดงผล
    // setTimeout(() => {


    //   this.setState({

    //     Noitem: "Oops! Noitem Found",
    //     iconNoitem : "far fa-tired"

    //   });

    //   $('#imgLoading').css("display","none");



    // }, 1500); // 1 วิ



    return (

      <div className="container-fluid">
      <div className="WrapNoitem">


        <h1 className="headerNoitem">


          <span className="iconNoitem"><i className="far fa-tired"></i><br /></span>
          <span>Oops! Noitem Found</span>
        </h1>






      </div>
      </div>
    )
  }
}
