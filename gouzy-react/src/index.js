import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './index.css';
import * as serviceWorker from './serviceWorker';

import Header from "./HeaderComponent/Header";
// import TopMenu from "./TopMenuComponent/TopMenu";
import Home from './HomeComponent/Home';
import Article from './ArticleComponent/Article';
import Draft from "./DraftComponent/Draft";


render(
    <Router>
        <div>
            {/*<TopMenu/>*/}
            <div className="container">
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/edit/:articleId" component={Draft}/>
                    <Route path="/:articleId" component={Article}/>
                </Switch>
            </div>
        </div>
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
