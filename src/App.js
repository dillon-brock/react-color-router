import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/:r/:g/:b'>
          <Header />
          <Main />
        </Route>
        <Route path='*' component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
