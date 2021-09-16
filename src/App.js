import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import Chat from './pages/chat/';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/'><Chat /></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
