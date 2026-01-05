import type { FinanceItem } from '../../../types/main.type';
import { MdDelete } from 'react-icons/md';
import { useEntriesStore } from '../../../store/zustand';

export default function HistoryFinanceLi({ item }: { item: FinanceItem }) {
  const color = item.type === 'income' ? 'text-green-400' : 'text-red-400';
  const colorHover =
    item.type === 'income' ? 'hover:bg-[#16d54c11]' : 'hover:bg-[#d5161611]';

  const { deleteEntry } = useEntriesStore();

  return (
    <li
      id='{item.id}'
      className={
        'grid grid-cols-3 border-b-2 transition-all border-black-100 px-3 py-2 ' +
        color +
        ' ' +
        colorHover
      }
      key={item.id}>
      <p className='border-r-2 border-black-100 '>
        {item.type === 'income' ? '+' : '-'}
        {item.amount}
      </p>
      <p className=' border-r-2 border-black-100 text-center '>
        {item.description}
      </p>
      <p className='flex items-center justify-end gap-4'>
        {item.type}
        <div
          className='text-xl cursor-pointer'
          onClick={() => deleteEntry({ id: item.id })}>
          <MdDelete />
        </div>
      </p>
    </li>
  );
}
