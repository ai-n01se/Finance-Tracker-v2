import { useUsersDataStore, useUserStore } from '../store/zustand';
import { v4 as uuid } from 'uuid';

export default function Register() {
  const { setUser } = useUserStore();
  const { addUser } = useUsersDataStore();
  return (
    <div className='flex w-full h-full flex-col gap-10 items-center justify-center'>
      <h1 className='text-3xl font-bold'>Welcome to Finance Tracker</h1>
      <button
        onClick={() => {
          const idUser = uuid();
          addUser({
            id: idUser,
            name: 'John Doe',
            password: 'password123',
            email: 'john.doe@example.com',
          });
          setUser({
            id: idUser,
            name: 'John Doe',
            email: 'john.doe@example.com',
          });
        }}>
        Login
      </button>
    </div>
  );
}
