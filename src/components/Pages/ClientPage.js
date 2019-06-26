import React, { Component } from 'react';
import { connect } from 'react-redux';
import {logoutUser} from '../../_redux/actions/authentication';

class ClientPage extends Component {
    constructor() {
        super(props);
    }
    render() {
        return (
            <h1>Clients Page</h1>
        )
    }
}
const mapStateToProps = (state) => ({
    auth: state.auth
})
export default connect(mapStateToProps, {logoutUser})(ClientPage);