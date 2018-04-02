/**
 * Created by zhoumeiyan on 20/07/2017.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as spiderActions from '../actions/spider'
import Spider from '../pages/spider'

class SpiderContainer extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Spider {...this.props}/>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        isLoading: state.get('spider').isLoading
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(spiderActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SpiderContainer)