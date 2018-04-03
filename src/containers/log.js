/**
 * Created by zhoumeiyan on 2017/7/28.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as logActions from '../actions/log'
import Log from '../pages/log'

class LogContainer extends Component {
    render() {
        return (
            <div>
                <Log {...this.props}/>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        toastText: state.log.toastText
    }
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators(logActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LogContainer)