/**
 * Created by zhoumeiyan on 21/07/2017.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as httpActions from '../actions/http'
import Http from '../pages/http'

class HttpContainer extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Http {...this.props}/>
        )
    }
}
function mapStateToProps(state) {
    return {
        loginInfo: state.get('http').loginInfo
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(httpActions, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(HttpContainer)