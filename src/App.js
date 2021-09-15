import logo from './logo.svg';
import './App.css';
import Title from 'components/title/';

function App() {
  return (
    <div>
      <Title
        title='1 Day Chat App'
        notice='All messages will be deleted at every 00:00 UTC'
      />
    </div>
  );
}

export default App;
