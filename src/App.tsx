import { useUserStore } from './store/zustand';
import MainApp from './pages/MainApp';
import Register from './pages/Register';

function App() {
  const { user } = useUserStore();

  return user ? <MainApp /> : <Register />;
}

export default App;
