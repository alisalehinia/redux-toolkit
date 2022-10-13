import { store } from './features/store';
import { Provider } from 'react-redux';
import './App.css';
import CounterContainer from './components/CounterContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CounterContainer />
      </div>
    </Provider>
  );
}

export default App;
