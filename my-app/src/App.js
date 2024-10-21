import css from './App.module.css';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <div className={css.App}>
      {"its working"}
      <Sidebar />
    </div>
  );
}

export default App;