import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  HttpLink,
} from '@apollo/client';
import Chat from './pages/chat/';

const link = new HttpLink({
  uri: 'https://angular-test-backend-yc4c5cvnnq-an.a.run.app/',
  fetchOptions: { mode: 'no-cors', },
  headers: {
    'Content-Type': 'application/text',
  },
  credentials: 'omit',
  useGETForQueries: true,
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <ApolloProvider client={client}>
          <Route path='/' exact><Chat /></Route>
          <Route path='/:channelId'><Chat /></Route>
        </ApolloProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
