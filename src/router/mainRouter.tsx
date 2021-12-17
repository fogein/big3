import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Fallback } from '../components/common/fallback';
import 'antd/dist/antd.css';
import { CardTeams } from '../pages/home/cardTeams/cardTeams'; 
import { LoginContainer } from '../containers/auth/login/loginContainer'; 
import { SignUpContainer } from '../containers/auth/signup/signUpContainer'; 
import {PrivateRouter} from './Auth/privateRouter'
import { CardPlayers } from '../pages/home/cardPlayers/cardPlayers';
import { AddTeamPage } from '../pages/home/addTeamPage/addTeamPage';
import { TeamInfo } from '../pages/home/teamInfo/teamInfo';
import { EditTeamPage } from '../pages/home/editTeamPage/EditTeamPage';
import { PageNotFound } from '../pages/home/pageNotFound/pageNotFound';




export function MainRouter() {

  return (
    <Router >
      <Suspense fallback={<Fallback />}>
        <Switch>
          <PrivateRouter exact path="/teams" component={CardTeams} />
          <PrivateRouter exact path="/teams/addTeam" component={AddTeamPage} />
          <Route exact path="/" component={LoginContainer} />
          <Route exact path="/signup" component={SignUpContainer} />
          <PrivateRouter exact path="/players" component={CardPlayers} />
          <PrivateRouter exact={true} path="/team/:id" component={TeamInfo} />
          <PrivateRouter exact={true} path="/team/edit/:id" component={EditTeamPage} />
          <Route exact={false} path="*" component={PageNotFound} />
        </Switch>
      </Suspense>
    </Router>
  );}
