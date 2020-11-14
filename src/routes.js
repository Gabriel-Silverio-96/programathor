import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Pages
import index from './pages/home'
import JobList from './pages/jobs/JobList';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={index} />
                <Route path="/vagas" component={JobList} />
            </Switch>
        </BrowserRouter>
    )
};