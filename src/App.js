import './App.css';
import { SideNav, FilterForm } from './_components'

function App() {
  return (
    <div className="adapt-app">
      <SideNav />
      <div className="container">
        <FilterForm />
        <div className="content p-10">main bar content</div>
      </div>
    </div>
  );
}

export default App;
