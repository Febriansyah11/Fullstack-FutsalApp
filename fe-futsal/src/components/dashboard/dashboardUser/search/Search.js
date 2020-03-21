import React, {Component} from 'react';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';



class Search extends Component {
    render() {
        return (

            <div className="search col-lg-12 col-xs-12 - col-md-12 col-sm-12">
                <div className="text-search col-lg-3 col-xs-3 col-md-3 col-sm-3">Search Field...  &nbsp;</div>
                <div className="input-group md-form form-sm form-1 pl-0 col-lg-9 col-xs-9 col-md-9 col-sm-9">
                <div className="input-group-prepend">
                    <span className="input-group-text cyan lighten-2" id="basic-text1"><SearchIcon/></span>
                </div>
                <input className="form-control my-0 py-1" type="text" onChange={this.props.handleChange} placeholder="Search" aria-label="Search"/>
            </div>
            </div>
        );
    }
}

export default Search;