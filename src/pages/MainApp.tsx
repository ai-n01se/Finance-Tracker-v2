import BasicValues from '../components/BasicValues/BasicValues';
import FormForAccount from '../components/FormForAccount/FormForAccount';
import HistoryFinance from '../components/HistoryFinance/HistoryFinance';
import { useEntriesStore } from '../store/zustand';

export default function MainApp() {
  const { entries, addEntry } = useEntriesStore();

  return (
    <div className='flex w-full h-full flex-col gap-10 items-center'>
      <BasicValues entries={entries} />
      <FormForAccount addEntry={addEntry} />
      <HistoryFinance />
    </div>
  );
}
