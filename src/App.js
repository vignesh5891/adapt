import { Contacts } from './Pages/Contacts'
import { SideNav } from './_components'
import './App.css';

function App() {
  return (
    <div className="adapt-app">
      <SideNav />
      <Contacts />
    </div>
  );
}

export default App;
