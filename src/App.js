import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path='/:r/:g/:b' component={Main} />
      </Switch>
    </div>
  );
}

export default App;
