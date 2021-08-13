import './App.css';
import { SideNav, FilterForm } from './_components'

function App() {
  return (
    <div className="adapt-app">
      <SideNav />
      <div className="container">
        <FilterForm />
        <div className="content p-10">
          <div>10 contact forms 2 companies <button>Upgrade now</button></div>
          <div><span>Coimbatore, Tamilnadu, India</span></div>
          <div>
            <input type="checkbox" />
            <button>Export</button>
            <button>Add to list</button>
            <button>Bulk Actions</button>
            <span>Show rows 50</span>
            <span>1 of 1</span>
          </div>
          <table>
            <thead>
              <th></th>
              <th>Name</th>
              <th>Company</th>
              <th>Email & Phone</th>
              <th>Deliverablity</th>
              <th></th>
            </thead>
            <tbody>
              <td><input type="checkbox" /></td>
              <td>
                <span>Pradeep Muruganandham</span>
                Founder and chief officer<br />
                Coimbatore Tamilnadu india.
              </td>
              <td>
                <b>Adapt</b> <br />
                New york, New york
              </td>
              <td></td>
              <td>95%</td>
              <td><button>View Contact</button></td>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
