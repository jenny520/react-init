/**
 * Created by zhoumeiyan on 19/07/2017.
 */
import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PureRenderMixin from 'react-addons-pure-render-mixin'

export default class extends Component {
    state = {
        http: '3'
    }
    render() {
        return (
            <div>
                <span>http</span>
            </div>
        )
    }
}