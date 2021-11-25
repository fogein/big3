import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Fallback } from '../components/common/fallback';
import 'antd/dist/antd.css';
import { CardTeams } from '../pages/home/cardTeams/cardTeams'; 
import { LoginContainer } from '../containers/auth/login/LoginContainer'; 
import { SignUpContainer } from '../containers/auth/signup/SignUpContainer'; 
import { SignUpSuccess } from '../pages/auth/signUpSuccess';
import PrivateRouter from './Auth/privateRouter'
import { CardPlayers } from '../pages/home/cardPlayers/cardPlayers';
import { AddTeamPage } from '../pages/home/addTeamPage/addTeamPage';



export function MainRouter() {

  return (
    <Router >
      <Suspense fallback={<Fallback />}>
        <Switch>
          <PrivateRouter exact path="/team" component={CardTeams} />
          <PrivateRouter exact path="/team/addTeam" component={AddTeamPage} />
          <Route exact path="/" component={LoginContainer} />
          <Route exact path="/signup" component={SignUpContainer} />
          <PrivateRouter exact path="/signup/success" component={SignUpSuccess} />
          <PrivateRouter exact path="/players" component={CardPlayers} />
        </Switch>
      </Suspense>
    </Router>
  );}
