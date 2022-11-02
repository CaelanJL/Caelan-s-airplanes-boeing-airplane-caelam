import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Outlet} from 'react-router-dom';
import navBar from '../navBar';


function App() {
  const layout = () => {
    return(
      <>
        <navBar />
        <Outlet />
      </>
    );
  };

  function searchForm() {

  }

  function inputForm() {

  }


  return (
    <div className="App">
      <button type="button" className="btn btn-primary">Primary</button>
      <button type="button" className="btn btn-secondary">Secondary</button>
      <button type="button" className="btn btn-success">Success</button>
      <button type="button" className="btn btn-danger position-absolute top-50 start-50 translate-middle">Danger</button>
      <button type="button" className="btn btn-warning">Warning</button>
      <button type="button" className="btn btn-info">Info</button>
      <button type="button" className="btn btn-light">Light</button>
      <button type="button" className="btn btn-dark">Dark</button>
    </div>
  );
}

export default App;
