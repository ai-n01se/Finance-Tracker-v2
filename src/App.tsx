import BasicValues from './components/BasicValues/BasicValues';
import FormForAccount from './components/FormForAccount/FormForAccount';
import HistoryFinance from './components/HistoryFinance/HistoryFinance';
import './App.css';
import { useEntries } from './store/store';

function App() {
  const { entries, addEntry } = useEntries();
  return (
    <div className='main'>
      <BasicValues entries={entries} />
      <FormForAccount addEntry={addEntry} />
      <HistoryFinance entries={entries} />
    </div>
  );
}

export default App;
