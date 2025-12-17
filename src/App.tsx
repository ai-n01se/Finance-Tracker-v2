import BasicValues from './components/BasicValues/BasicValues';
import FormForAccount from './components/FormForAccount/FormForAccount';
import HistoryFinance from './components/HistoryFinance/HistoryFinance';
import './App.css';

function App() {
  return (
    <div className='main'>
      <BasicValues />
      <FormForAccount />
      <HistoryFinance />
    </div>
  );
}

export default App;
