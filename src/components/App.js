import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BadgeNew from '../pages/BadgeNew';
import BadgeEdit from '../pages/BadgeEdit';
import BadgeDetails from '../pages/BadgeDetailsContainer';
import Badges from '../pages/Badges';
import Home from"../pages/Home";
import Layout from './Layout';
import NotFound from '../pages/NotFound';


function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/badges" component={Badges} />
                    <Route exact path="/badges/new" component={BadgeNew} />
                    <Route exact path="/badges/:badgeId" component={BadgeDetails} />
                    <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;