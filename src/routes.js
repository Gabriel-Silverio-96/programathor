import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Pages
import index from './pages/home'
import JobList from './pages/jobs/JobList';
import DetailJob from './pages/jobs/JobDetail';
import Candidates from './pages/CreateAccount/candidates';
import Company from './pages/CreateAccount/company';
import Login from './pages/Login';
import Page404 from './pages/404';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={index} />
                <Route path="/programathor" component={index} />
                <Route path="/vagas" component={JobList} />
                <Route path="/detalhe-vaga/:id" component={DetailJob} />
                <Route path="/cadastro/candidato" component={Candidates} />
                <Route path="/cadastro/empresa" component={Company} />
                <Route path="/login" component={Login} />

                <Route path="*" component={Page404} />
            </Switch>
        </BrowserRouter>
    )
};