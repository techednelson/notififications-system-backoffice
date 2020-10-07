import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.scss';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import SignIn from './components/SignIn';
import Paperbase from './components/Paperbase';
import theme from './theme/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <main className="App">
          <section className="route-container">
            <Switch>
              <Route exact path="/" render={() => <Redirect to="/login"/>}/>
              <Route path="/login" component={SignIn}/>
              <Route path="/create" component={Paperbase}/>
            </Switch>
          </section>
        </main>
      </BrowserRouter>
    </ThemeProvider>

  );
}

export default App;
