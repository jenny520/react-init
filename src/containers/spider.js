/**
 * Created by zhoumeiyan on 20/07/2017.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as spiderActions from '../actions/spider'
import Spider from '../pages/spider'

class SpiderContainer extends Component {
    render() {
        console.log(this.props.dispatch)
        return (
            <div>
                <Spider {...this.props}/>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        isLoading: state.spider.isLoading
    }
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators(spiderActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SpiderContainer)