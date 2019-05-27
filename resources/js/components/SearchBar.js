import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchKeyword: '',
            searchLink: ''
        }

        this.keywordInput = this.keywordInput.bind(this);

    }


    //setstatekeyword
    keywordInput(e) {

        const val = e.target.value
        const lastChar = val[val.length - 1] 
        
        if (lastChar === ' ') { 
            this.setState({ value: '' })
        }
        else {
            this.setState({
                searchKeyword: val
            })

        }

    }






    render() {

        console.log(this.state);

        return (
            <div>
                {/*search*/}
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
             
                <div className="row justify-content-center" id="searchBar">
                    <div>
                        <form className="card card-sm" onSubmit={this.submitSearch}>
                            <div className="card-body row no-gutters align-items-center">

                                <div className="col">
                                    <input className="form-control bg-dark form-control-lg form-control-borderless" id="formSearch" type="search"
                                        placeholder="Find Something" required onChange={this.keywordInput} />
                                </div>

                                <div className="col-auto">
                                    <Link to={"/result_search/" + this.state.searchKeyword} class="btn btn-lg btn-dark form-control-lg form-control-borderless " id="SearchBtn"
                                        type="submit" ><i className="fas fa-search"></i> &nbsp;Search</Link>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
                {/*End search*/}
            </div>



        );
    }
}

export default SearchBar;