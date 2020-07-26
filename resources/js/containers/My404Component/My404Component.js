import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";

class My404Component extends Component {

    render() {
        return (
            <Auxiliary>
                <div className="container">
                    <div className="row">
                        <div className="container-fluid">
                            <h1>404 Page Not Found</h1>
                        </div>
                    </div>
                </div>

            </Auxiliary>
        );
    }
}

const mapStateToProps = state => {
    return {
    };
};
const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(My404Component);
