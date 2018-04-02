/**
 * Created by zhoumeiyan on 20/07/2017.
 */
import React from 'react';
import '../index.css';
import {
    Route,
    HashRouter
} from 'react-router-dom'
import Loadable from 'react-loadable'
import Loading from '../components/MyLoadingComponent'

const AsyncSpider = Loadable({
    loader: () => import('../containers/spider'),
    loading: Loading,
})
const AsyncHttp = Loadable({
    loader: () => import('../containers/http'),
    loading: Loading
})
const AsyncLog = Loadable({
    loader: () => import('../containers/log'),
    loading: Loading
})

const routes = (
    <HashRouter>
        <div>
            <Route exact path="/" component={AsyncSpider}/>
            <Route path="/http" component={AsyncHttp}/>
            <Route path="/log" component={AsyncLog}/>
        </div>
    </HashRouter>
);

export default routes;