/**
 * Created by zhoumeiyan on 2017/7/28.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as logActions from '../actions/log'
import Log from '../pages/log'

class LogContainer extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Log {...this.props}/>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        toastText: state.get('log').toastText
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(logActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LogContainer)