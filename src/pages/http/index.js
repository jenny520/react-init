/**
 * Created by zhoumeiyan on 19/07/2017.
 */
import React, {Component} from 'react'

export default class extends Component {
    state = {
        http: '3'
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <span>{this.state.http}</span>
            </div>
        )
    }
}